import { BadRequestException, NotFoundException } from '@nestjs/common';
import { TOptions } from 'i18next';
import type { I18nKey, I18nable } from '../decorators/i18n/i18n.decorator';

type AnyJson =
  | boolean
  | number
  | string
  | null
  | Jsonable[]
  | {
      [key: string]: Jsonable;
    };

type Jsonable = AnyJson | Date; // JSON itself does not allow Date, but NestJS does

export interface JsonSerializer<T extends Jsonable> {
  toJSON(): T;
  getErrors(): [I18nKey, TOptions][];
}

export interface ResponseJson<T extends Jsonable> {
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

    getErrors() {
      return this.serializers.flatMap((s) => s.getErrors());
    }
  };
}

export function ok<T extends Jsonable>(
  serializer: JsonSerializer<T>,
  i18n: I18nable,
): ResponseJson<T> {
  return { data: serializer.toJSON(), errors: i18n.ts(serializer.getErrors()) };
}

export function notFound(message: string): never {
  throw new NotFoundException({
    data: null,
    errors: [message],
  });
}

export function badRequest(message: string): never {
  throw new BadRequestException({
    data: null,
    errors: [message],
  });
}
