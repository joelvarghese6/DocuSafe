// app/api/documents/[key]/route.ts
import { NextResponse } from "next/server";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Bucket and s3: same as above

const s3Client = new S3Client({ region: "ap-south-1" });

export async function GET(_: Request, { params }: { params: { key : string } }) {
  const command = new GetObjectCommand({ Bucket: "unfold-hackathon", Key: params.key });
  const src = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

  return NextResponse.json({ src });
}