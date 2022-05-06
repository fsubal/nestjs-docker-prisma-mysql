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
