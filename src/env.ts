import { ConfigService } from '@nestjs/config';
import { z } from 'zod';

export const ENV = z.object({
  DATABASE_URL: z.string(),
  MINIO_ROOT_USER: z.string(),
  MINIO_ROOT_PASSWORD: z.string(),
  MINIO_ENDPOINT: z.string(),
  MINIO_BUCKET: z.string(),
  MINIO_REGION: z.string().optional(),
});

export type ValidatedEnv = ConfigService<z.infer<typeof ENV>, true>;
