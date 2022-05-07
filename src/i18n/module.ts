import { I18nextModule } from '@anchan828/nest-i18n-i18next';
import { DEFAULT_LOCALE, Locales } from './utils';

import * as en from './en.json';
import * as ja from './ja.json';

const resources: Record<Locales, typeof ja> = {
  'en-US': en,
  'ja-JP': ja,
};

export const I18nModule = I18nextModule.register({
  fallbackLng: [DEFAULT_LOCALE],
  resources,
});
