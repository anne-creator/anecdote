//the access key was stored in side the .aws locally(on my mac),
//so when the project is trying to connect aws, terminal? will look up the .aws file locally
//for confidential purpose

const AWS = require('aws-sdk'); //import aws-sdk interface to js language
AWS.config.update({ region: 'us-east-1' });
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
