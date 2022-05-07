import { TOptions } from 'i18next';
import { I18nKey } from '../decorators/i18n/i18n.decorator';

export function createErrorMap() {
  const errors = new Set<[I18nKey, TOptions]>();

  return {
    add(key: I18nKey, options?: TOptions) {
      errors.add([key, options ?? {}]);
    },
    toArray() {
      return Array.from(errors);
    },
  };
}
