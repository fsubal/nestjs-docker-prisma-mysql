import {
  I18nBadRequestException,
  I18nNotFoundException,
} from '@anchan828/nest-i18n-i18next';

export interface JsonSerializer<T> {
  toJSON(): T;
}

export interface ResponseJson<T> {
  data: T;
  errors: string[];
}

export function arrayOf<T extends JsonSerializer<any>, Input>(
  klass: new (input: Input) => T,
) {
  return class SerializeAsArray {
    serializers: T[];

    constructor(public objects: Input[]) {
      this.serializers = this.objects.map((o) => new klass(o));
    }

    toJSON() {
      return this.serializers.map((s) => s.toJSON());
    }
  };
}

export function notFound(key = 'requests.not_found'): never {
  throw new I18nNotFoundException({ key });
}

export function badRequest(key = 'requests.not_found'): never {
  throw new I18nBadRequestException({ key });
}
