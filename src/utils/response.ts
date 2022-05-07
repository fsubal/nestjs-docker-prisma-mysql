export interface JsonSerializer<T> {
  toJSON(): T;
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
