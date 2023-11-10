/**
 * The server store the generated story to the s3 bucket
 * Input: generated story string
 * Output: a downloadable string link
 */

import { s3, S3_BUCKET_NAME } from '../../../dbconfig.js';

export async function POST(req) {
  const { story, taskId } = await req.json();
  console.log(`story: ${story}`);
  console.log(`story: ${taskId}`);

  //put s3 server call here
  const params = {
    Bucket: S3_BUCKET_NAME,
    Key: taskId,
    Body: story,
  };

  try {
    await s3.upload(params).promise();
    console.log('File uploaded to S3');
  } catch (error) {
    console.error('Error uploading to S3:', error);
  }

  // Function to get a downloadable link
  const linkParams = {
    Bucket: S3_BUCKET_NAME,
    Key: taskId,
    Expires: 31536000,
  };

  try {
    const res = s3.getSignedUrl('getObject', linkParams);
    console.log(res);
    return Response.json(res);
  } catch (err) {
    console.log(err);
    return Response.error(`failed to download the link`);
  }
}

export async function OPTIONS(request) {
  try {
    return Response.json('ok');
  } catch {
    return Response.error('Internal Server Error');
  }
}
