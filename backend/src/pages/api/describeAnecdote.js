import AWS from '../../aws-config.js';
const docClient = new AWS.DynamoDB.DocumentClient();

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { TaskId } = req.query;

  docClient.get(
    {
      TableName: 'AnecdoteTask',
      Key: {
        TaskId: TaskId,
      },
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    },
  );
}
