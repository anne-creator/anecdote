import AWS from '../../aws-config.js';
const docClient = new AWS.DynamoDB.DocumentClient();

export default function handler(req, res) {
  docClient.put(
    {
      TableName: 'AnecdoteTask',
      Item: {
        TaskId: 'req',
        aws: 'aws-config',
      },
    },
    (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json('item has been put');
      }
    },
  );
}
