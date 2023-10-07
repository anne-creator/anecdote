//the access key was stored in side the .aws locally(on my mac),
//so when the project is trying to connect aws, terminal? will look up the .aws file locally
//for confidential purpose

const AWS = require('aws-sdk'); //import aws-sdk interface to js language
AWS.config.update({ region: 'us-east-1' }); //?update to region 'us-east-1',so every project in aws is region specific?
const docClient = new AWS.DynamoDB.DocumentClient(); //?creates an instance of the DynamoDB DocumentClient class

export default function handler(req, res) {
  docClient.get(
    {
      TableName: 'AnecdoteTask',
      Key: {
        TaskId: 'test',
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
