import { DEFAULT_LOCALE, LOCALES, Locales } from './i18n';
import { badRequest } from './response';

export function asInteger(
  value: unknown,
  locale: Locales = DEFAULT_LOCALE,
  message?: string,
): number {
  if (!(typeof value === 'string')) {
    return badRequest(locale, message);
  }

  const parsed = parseInt(value);
  if (Number.isNaN(parsed)) {
    return badRequest(locale, message);
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
