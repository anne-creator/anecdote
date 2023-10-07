const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

export default function handler(req, res) {
  docClient.delete(
    {
      TableName: 'AnecdoteTask',
      Key: {
        TaskId: 'putTest',
      },
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        res.status(200).json('item has been deleted');
      }
    },
  );
}
