import { BadRequestException, NotFoundException } from '@nestjs/common';

export interface JsonSerializer<T> {
  toJSON(): T;
  getErrors(): string[];
}

export interface ResponseJson<T> {
  data: T;
  errors: string[];
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
