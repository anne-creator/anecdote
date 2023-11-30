const TABLE_NAME = 'AnecdoteTask';
const S3_BUCKET_NAME = 'anecdote-web';

const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
  aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
  aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
});
const docClient = new AWS.DynamoDB.DocumentClient();

const s3 = new AWS.S3();
console.log('docClient and s3 works here');
export { docClient, TABLE_NAME, s3, S3_BUCKET_NAME };
