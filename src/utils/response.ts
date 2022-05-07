import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Locales } from './i18n';

export interface JsonSerializer<T> {
  toJSON(): T;
  getErrors(locale: Locales): string[];
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

    getErrors(locale: Locales) {
      return this.serializers.flatMap((s) => s.getErrors(locale));
    }
  };
}

export function ok<T>(
  serializer: JsonSerializer<T>,
  locale: Locales,
): ResponseJson<T> {
  return { data: serializer.toJSON(), errors: serializer.getErrors(locale) };
}

export function notFound(
  _locale: Locales,
  messageId = 'Record Not Found',
): never {
  throw new NotFoundException({
    data: null,
    errors: [messageId],
  });
}

export function badRequest(
  _locale: Locales,
  messageId = 'Invalid Request',
): never {
  throw new BadRequestException({
    data: null,
    errors: [messageId],
  });
}
