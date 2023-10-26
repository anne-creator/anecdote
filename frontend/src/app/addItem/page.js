'use client';
import axios from 'axios';
import { useState } from 'react';
const uuid = require('uuid');
import { useRouter } from 'next/navigation';
import { Button, Typography, Card, Input, Textarea, Checkbox } from '@material-tailwind/react';

export default function addItem() {
  const [inputData, setInputData] = useState('');
  console.log(inputData);
  const router = useRouter();

  // Define optional config for the request (headers, query parameters, etc.)
  const config = {
    params: {
      AnectdoteId: uuid.v4(),
      status: 'SUBMITTED',
      createdTime: Date.now(),
      lastUpdatedTime: Date.now(),
      wordList: inputData,
      s3Url: uuid.v4(),
    },
  };
  console.log(config.params);

  const handleClick = async () => {
    axios
      .get('http://localhost:3001/api/createAnecdote', config)
      .then((response) => {
        console.log(response);
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="min-h-[100vh] p-4">
      <img
        src="/bg1.png"
        alt="bg-img"
        className="absolute right-0 top-0 h-[40%] w-full object-cover object-center lg:h-full lg:w-1/2"
      />
      <div className="container mx-auto grid h-full min-h-[100vh] grid-cols-1 lg:grid-cols-5">
        <div className="my-auto lg:col-span-3">
          <Card className="col-span-12 rounded-xl border border-white bg-white/90 py-20 px-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-6">
            <div className="mx-auto lg:max-w-xl">
              <Typography variant="h1" color="blue-gray" className="mb-4">
                Let's create a story with your choice of the words
              </Typography>
              <Typography variant="lead" className="mb-16 !text-gray-500">
                Put comma between words
              </Typography>
              <form action="#">
                <div className="mb-4 h-max">
                  <Textarea placeholder="Max 10 words" color="gray" size="lg" name="message" />
                </div>
                <Button
                  onClick={() => router.push('/')}
                  size="lg"
                  color="gray"
                  className="mt-6"
                  fullWidth
                >
                  Generaet a story
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
