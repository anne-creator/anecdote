/** list table api server */
// import { request } from 'http';
import { docClient } from '../../../dbconfig.js';
const TABLE_NAME = 'AnecdoteTask';
export async function GET() {
  const params = {
    TableName: TABLE_NAME,
  };
  try {
    const res = await docClient.scan(params).promise();
    return Response.json({ res });
  } catch {
    return Response.error('Internal Server Error');
  }
}

export async function DELETE(request) {
  const { id } = await request.json();
  if (!id) return Response.error('id is requried');
  return new Response(`Todo ${id} deleted `);
}
// export async function put() {

//   const { AnectdoteId, status, createdTime, lastUpdatedTime, wordList, s3Url } = req.query;
//   const params = {
//     TableName: 'AnecdoteTask',
//     Item: {
//       // AnectdoteId,
//       // status,
//       // createdTime,
//       // lastUpdatedTime,
//       // wordList,
//       // s3Url,
//       test: "update from the backend"
//   };

//   try {
//     const res = await docClient.put(params),promise();
//   }
// }
// }

// res.setHeader('Access-Control-Allow-Origin', '*');
// res.setHeader('Access-Control-Allow-Methods', '*');
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

// const { taskId } = req.query;
// console.log(TaskName);
//AnecdoteTask
