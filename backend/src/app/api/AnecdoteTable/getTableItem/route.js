import { docClient, TABLE_NAME } from '../../../../dbconfig';
import { headers } from 'next/headers';

//get an item from dynamodb table
export async function GET() {
  const headersList = headers();
  const id = await headersList.get('id');
  console.log(id);
  if (!id) return Response.error('id is requried');

  const params = {
    TableName: TABLE_NAME,
    Key: {
      TaskId: id,
    },
  };

  try {
    const res = await docClient.get(params).promise();
    return Response.json({ res });
  } catch {
    return Response.error("can't get item from the database");
  }
}
