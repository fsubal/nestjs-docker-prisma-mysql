import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import i18next, { InitOptions, t, TOptions } from 'i18next';
import Backend from 'i18next-fs-backend';
import { DEFAULT_LOCALE, LOCALES, Locales, PickKeys } from '../../utils/i18n';

import en from './locale.en.json';
import jp from './locale.ja.json';

export type I18nKey = PickKeys<typeof jp>;

const OPTION: InitOptions = {
  fallbackLng: [DEFAULT_LOCALE],
  resources: { 'en-US': en, 'ja-JP': jp },
};

i18next.use(Backend).init(OPTION);

export class I18nable {
  constructor(private request: Request) {}

  private get locale() {
    try {
      const accept = this.request.headers.get('Accept-Language');
      if (!accept) {
        return DEFAULT_LOCALE;
      }

      const { success } = LOCALES.safeParse(accept);
      if (!success) {
        return DEFAULT_LOCALE;
      }

      return accept as Locales;
    } catch {
      return DEFAULT_LOCALE;
    }
  }

  t(key: I18nKey, option?: TOptions) {
    return t(key, { lng: this.locale, ...option });
  }

  ts(entires: [I18nKey, TOptions][]) {
    return entires.map(([key, option]) => this.t(key, option));
  }
}

export const I18n = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();

    return new I18nable(req);
  },
);
