/** list table api server */
import { docClient } from '../../../dbconfig.js';

export async function GET() {
  const params = {
    TableName: 'AnecdoteTask',
  };
  try {
    const res = await docClient.scan(params).promise();

    return Response.json({ res });
  } catch {
    return Response.error('Internal Server Error');
  }
}

// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', '*');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

// const { taskId } = req.query;
// console.log(TaskName);
//AnecdoteTask
