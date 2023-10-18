//use taskId to pull an item from dynamoDB table
import { docClient } from '../../dbconfig.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // const { TaskId } = req.query;
  const TaskId = '1';

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
        return res.status(200).json(data.Item.wordList.values);
      }
    },
  );
}
