const TABLE_NAME = 'AnecdoteTask';
const S3_BUCKET_NAME = 'anecdote-web';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

const s3 = new AWS.S3();
console.log('docClient and s3 works here');
export { docClient, TABLE_NAME, s3, S3_BUCKET_NAME };
