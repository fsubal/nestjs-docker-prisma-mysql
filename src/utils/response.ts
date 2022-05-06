import { BadRequestException, NotFoundException } from '@nestjs/common';

export interface ResponseJson<T> {
  data: T;
  errors: string[];
}

export function ok<T>(data: T): ResponseJson<T> {
  return { data, errors: [] };
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
