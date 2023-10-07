'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [textData, setTextData] = useState('');
  const [loading, setLoading] = useState('unloaded');

  const handleClick = async () => {
    setLoading('loading');
    console.log(textData);
    try {
      const { data: response } = await axios.get('http://localhost:3000/api/testApi');
      console.log(response);
      // setData(response);
      setLoading('success');
    } catch (error) {
      setLoading('failed');
      console.error(error.message);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <textarea
        rows="4"
        cols="50"
        value={textData}
        onChange={(e) => setTextData(e.target.value)}
        className="relative block"
      />

      <button onClick={handleClick}>get data</button>
      {loading == 'success' && <h1>{textData}</h1>}
      {loading == 'failed' && <h1>failed to put the data</h1>}
    </main>
  );
}
