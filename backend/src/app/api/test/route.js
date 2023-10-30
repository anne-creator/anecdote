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
