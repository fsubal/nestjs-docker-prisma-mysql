export interface BaseApiEntity {
  data: unknown;
  errors: string[];
}

export class ErrorEntity implements BaseApiEntity {
  data: null;
  errors: string[];

  constructor(errors: string[]) {
    this.errors = errors;
  }
}
