/** list table api server */
import { docClient } from '../../../dbconfig.js';
const TABLE_NAME = 'AnecdoteTask';

// list table
export async function GET(request) {
  const userId = request.nextUrl.searchParams.get('userId');
  if (!userId) Response.error('userId is empty');
  const params = {
    TableName: TABLE_NAME,
    IndexName: 'userId',
    FilterExpression: 'userId = :u',
    ExpressionAttributeValues: {
      ':u': userId,
    },
  };

  try {
    const res = await docClient.scan(params).promise();
    return Response.json({ res });
  } catch (err) {
    console.log(err);
    return Response.error('Internal Server Error');
  }
}

//delete items in table
export async function DELETE(request) {
  const { id } = await request.json();
  if (!id) return Response.error('id is requried');

  const params = {
    TableName: TABLE_NAME,
    Key: {
      TaskId: id,
    },
  };
  try {
    const res = await docClient.delete(params).promise();
    return Response.json(`Id: ${id} has been deleted`);
  } catch {
    return Response.error('Internal Server Error');
  }
}

export async function POST(request) {
  const { TaskId, userId, status, createdTime, lastUpdatedTime, wordList, s3Url } =
    await request.json();
  console.log('get called');
  const params = {
    TableName: TABLE_NAME,
    Item: {
      TaskId,
      userId,
      status: 'success',
      createdTime,
      lastUpdatedTime,
      wordList,
      s3Url,
    },
  };

  try {
    const res = await docClient.put(params).promise();
    return Response.json(`id: ${TaskId} has been put in to the dynamodb table ${TABLE_NAME}`);
  } catch {
    return Response.error('Internal Server Error');
  }
}
