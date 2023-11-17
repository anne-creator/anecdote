const TABLE_NAME = 'AnecdoteTask';
const S3_BUCKET_NAME = 'anecdote-web';

const AWS = require('aws-sdk');
// const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
// const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

const s3 = new AWS.S3();

export { docClient, TABLE_NAME, s3, S3_BUCKET_NAME };
