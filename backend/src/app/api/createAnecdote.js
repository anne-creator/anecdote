//put an item into the table
import { docClient } from '../../dbconfig.js';

export default function handler(req, res) {
  //AnectdoteId, userId, status (SUCCESS, IN_PROGRESS, FAILED), createdTime, lastUpdatedTime, wordList, s3Url.
  const { AnectdoteId, status, createdTime, lastUpdatedTime, wordList, s3Url } = req.query;
  docClient.put(
    {
      TableName: 'AnecdoteTask',
      Item: {
        AnectdoteId,
        status,
        createdTime,
        lastUpdatedTime,
        wordList,
        s3Url,
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
