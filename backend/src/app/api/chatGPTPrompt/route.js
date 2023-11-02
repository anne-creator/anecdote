/* A API server that receives a word list and return a story after calling chatGPT
 * input:  A word List
 * output: the story
 */

import { headers } from 'next/headers';
import { docClient, TABLE_NAME } from '../../../dbconfig.js';
import generateStory from '../../../utils/generateStory.js';

export async function GET() {
  const headersList = headers();
  const id = await headersList.get('id');
  const params = {
    TableName: TABLE_NAME,
    Key: {
      TaskId: id,
    },
  };

  //get the wordList from dynamo DB table
  const response = await docClient.get(params).promise();
  const wordList = await response.Item.wordList;

  try {
    const res = await generateStory(wordList);

    if (res instanceof Error) {
      console.error(res); // Log the error
      return Response.error('An error occurred during story generation');
    } else {
      return Response.json(res);
    }
  } catch (error) {
    console.error(error); // Log other errors
    return Response.error('Internal Server Error');
  }
}
