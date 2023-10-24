/* A API server that receives a word list and return a story after calling chatGPT
 * input:  A word List
 * output: the story
 */

const OpenAI = require('openai');
const openai = new OpenAI();

export default async function chatGPTPrompt(req, res) {
  // const { wordList } = req.query;

  const wordList = 'circus, computer, coral reef, coffee machine, terminology';

  //call ChatGPt to get the story
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a story writer that mostly use high frequency words to tell stories.',
      },
      {
        role: 'user',
        content: wordList,
      },
    ],
    temperature: 1.71,
    max_tokens: 20,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.choices[0].message.content);
  return res.status(200).json(response.choices[0].message.content);
}
