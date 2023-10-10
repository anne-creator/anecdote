import AWS from '../../aws-config.js';
const docClient = new AWS.DynamoDB.DocumentClient();

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const tableName = 'AnecdoteTask';

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
