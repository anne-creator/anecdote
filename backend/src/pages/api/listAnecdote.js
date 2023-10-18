import { docClient } from '../../dbconfig.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { taskId } = req.query;
  // console.log(TaskName);
  //AnecdoteTask

  const params = {
    TableName: 'AnecdoteTask',
    TaskId: taskId,
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
