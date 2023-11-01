/* A API server that receives a word list and return a story after calling chatGPT
 * input:  A word List
 * output: the story
 */

const OpenAI = require('openai');
const openai = new OpenAI();
import { headers } from 'next/headers';

export async function GET(request) {
  // const { wordList } = await request.json();
  const headersList = headers();
  const id = await headersList.get('id');
  console.log(id);

  const wordList = 'circus, computer, coral reef, coffee machine, terminology';

  try {
    const data = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: wordList,
        },
        {
          role: 'user',
          content: wordList,
        },
      ],
      temperature: 1.71,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const res = await data.choices[0].message.content;
    return Response.json(res);
  } catch {
    return Response.error('Internal Server Error');
  }

  // console.log(response.choices[0].message.content);
  // return res.status(200).json(response.choices[0].message.content);
}
