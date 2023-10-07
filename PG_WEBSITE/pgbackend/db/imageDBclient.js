import { S3Client } from "@aws-sdk/client-s3";

export function s3Client() {
    const REGION = process.env.S3BUCKETREGION
    const client = new S3Client({ region: REGION });
    return client
}