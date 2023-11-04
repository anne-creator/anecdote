const AWS = require('aws-sdk');
// const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
// const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'AnecdoteTask';

export { docClient, TABLE_NAME };
