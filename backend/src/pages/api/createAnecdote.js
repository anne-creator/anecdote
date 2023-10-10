const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

export const describeAnecdoteTable = (req, res) => {
  docClient.put(
    {
      TableName: 'AnecdoteTask',
      Item: {
        TaskId: 'req',
        a: 'as',
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
};
