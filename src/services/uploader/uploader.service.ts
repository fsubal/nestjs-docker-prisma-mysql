import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploaderService {
  private s3: S3;

  constructor(private config: ConfigService) {
    const accessKeyId = this.config.get<string>('MINIO_ROOT_USER')!;
    const secretAccessKey = this.config.get<string>('MINIO_ROOT_PASSWORD')!;
    const endpoint = this.config.get<string>('MINIO_ENDPOINT');
    const region = this.config.get<string>('MINIO_REGION');

    this.s3 = new S3({
      region,
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  async upload(bucket: string, key: string, file: File) {
    try {
      const output = await this.s3.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: file,
        }),
      );

      return output;
    } catch (e) {
      throw e;
    }
  }
}
