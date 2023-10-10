const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
// Configure the AWS SDK with your credentials and region

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Specify the name of the table you want to scan
  const tableName = 'AnecdoteTask';

  // Define the scan parameters
  const params = {
    TableName: tableName,
  };

  // Use the scan method to retrieve all items from the table
  docClient.scan(params, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(200).json(data);
    }
  });
}
