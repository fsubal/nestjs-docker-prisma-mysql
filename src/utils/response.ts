import { BadRequestException, NotFoundException } from '@nestjs/common';

export interface JsonSerializer<T> {
  toJSON(): T;
  getErrors(): string[];
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

    getErrors() {
      return this.serializers.flatMap((s) => s.getErrors());
    }
  };
}

export function ok<T>(serializer: JsonSerializer<T>): ResponseJson<T> {
  return { data: serializer.toJSON(), errors: serializer.getErrors() };
}

export function notFound(message = 'Record Not Found'): never {
  throw new NotFoundException({
    data: null,
    errors: [message],
  });
}

export function badRequest(message = 'Invalid Request'): never {
  throw new BadRequestException({
    data: null,
    errors: [message],
  });
}
