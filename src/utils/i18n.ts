import z from 'zod';

export const LOCALES = z.enum(['ja-JP', 'en-US']);

export type Locales = z.infer<typeof LOCALES>;

export const DEFAULT_LOCALE: Locales = 'ja-JP';

type RecursiveRecord = {
  [key in string]: string | RecursiveRecord;
};

/**
 * @see https://zenn.dev/queq1890/articles/bea3de7e896361
 */
export type PickKeys<T extends RecursiveRecord, K = keyof T> = K extends string
  ? T[K] extends string
    ? K
    : `${K}.${PickKeys<Extract<T[K], RecursiveRecord>>}`
  : never;
