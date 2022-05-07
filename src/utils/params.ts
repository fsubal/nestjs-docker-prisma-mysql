import { DEFAULT_LOCALE, LOCALES, Locales } from '../i18n/utils';
import { badRequest } from './response';

export function asInteger(value: unknown, message?: string): number {
  if (!(typeof value === 'string')) {
    return badRequest(message);
  }

  const parsed = parseInt(value);
  if (Number.isNaN(parsed)) {
    return badRequest(message);
  }

  return parsed;
}

export function asLocale(locale: unknown): Locales {
  const { success } = LOCALES.safeParse(locale);
  if (!success) {
    return DEFAULT_LOCALE;
  }

  return locale as Locales;
}
