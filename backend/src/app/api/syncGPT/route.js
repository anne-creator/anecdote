/**
 * A API server that call chatGPT to generate story.
 * if success, return the generated story
 * if failed: tell the user it has been faild
 * * input:  a task created by frontend addIem 'generate a story button'
 * * output: a task with generated story
 */
import { NextRequest, NextResponse } from 'next/server';
import generateStory from '../../../utils/generateStory.js';

export async function GET(request) {
  const wordList = request.nextUrl.searchParams.get('wordList');
  if (!wordList) Response.error('wordList is empty');
  console.log(wordList);

  try {
    const story = await generateStory(wordList);

    if (story instanceof Error) {
      console.error('story is an error'); // Log the error
      return Response.error('An error occurred during story generation');
    }

    return NextResponse.json(story, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    return Response.error('Internal Server Error');
  }
}
