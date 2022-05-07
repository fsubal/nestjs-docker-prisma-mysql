import z from 'zod';

export const LOCALES = z.enum(['ja-JP', 'en-US']);

export type Locales = z.infer<typeof LOCALES>;

export const DEFAULT_LOCALE: Locales = 'ja-JP';
