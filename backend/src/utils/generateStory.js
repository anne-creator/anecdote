/**
 * Taks a wordlist array and return a story string
 */
const OpenAI = require('openai');

const openai = new OpenAI();

const generateStory = async (wordList) => {
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
      max_tokens: 10,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const res = await data.choices[0].message.content;
    return res;
  } catch (err) {
    return err;
  }
};

export default generateStory;
