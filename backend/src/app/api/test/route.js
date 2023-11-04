import { resolve } from 'path/posix';

export async function POST(req) {
  // Extract the `messages` from the body of the request
  const res = await req.json();
  console.log(res);
  const message = res.message;
  // Respond with the stream
  return new Response.json(message);
}
