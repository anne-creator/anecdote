import { docClient } from '../../dbconfig.js';

export default function handler(req, res) {
  docClient.delete(
    {
      TableName: 'AnecdoteTask',
      Key: {
        TaskId: 'itself',
      },
    },
    (err, data) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json('item has been deleted');
      }
    },
  );
}
