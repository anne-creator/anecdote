/**
 * A API server that call chatGPT to generate story.
 * if success, return the generated story
 * if failed: tell the user it has been faild
 * * input:  a task created by frontend
 * * output: a task with generated story
 */

import { headers } from 'next/headers';
import { docClient, TABLE_NAME } from '../../../dbconfig.js';
import generateStory from '../../../utils/generateStory.js';

export async function GET() {
  const headersList = headers();
  const id = await headersList.get('id');
  if (!id) return Response.error('id Required');

  const params = {
    TableName: TABLE_NAME,
    Key: {
      TaskId: id,
    },
  };

  //get the wordList from dynamo DB table
  const task = await docClient.get(params).promise();
  const wordList = await task.Item.wordList;

  if (!wordList) Response.error('wordList is empty');

  //call GPT to generate story
  try {
    const story = await generateStory(wordList);

    if (story instanceof Error) {
      console.error(res); // Log the error
      return Response.error('An error occurred during story generation');
    }

    return Response.json(story);
  } catch (error) {
    console.error(error); // Log other errors
    return Response.error('Internal Server Error');
  }
}
