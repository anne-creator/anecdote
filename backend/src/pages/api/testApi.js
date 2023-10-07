export default function handler(req, res) {
  try {
    // Perform some API logic here...

    // If the API operation is successful, send a response
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({ message: 'API operation successful' });
  } catch (error) {
    // If there's an error, send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
