'use client';
import axios from 'axios';
import { useState } from 'react';

export default function callTestApi() {
  const [inputData, setInputData] = useState('');
  const [resultData, setResultData] = useState({});

  // Define optional config for the request (headers, query parameters, etc.)
  const config = {
    params: {
      TaskId: inputData, // Replace with query parameters if needed
    },
  };

  const handleClick = async () => {
    axios
      .get('http://localhost:3007/api/describeAnecdote', config)
      .then((response) => {
        setResultData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <label htmlFor="inputField"></label>
        <input
          type="text"
          value={inputData}
          id="inputField"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handleClick}>get data</button>
        {resultData ? <pre>{JSON.stringify(resultData, null, 2)}</pre> : <p>Loading...</p>}{' '}
      </main>
    </div>
  );
}
