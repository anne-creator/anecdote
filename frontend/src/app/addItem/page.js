'use client';
import axios from 'axios';
import { useState } from 'react';
const uuid = require('uuid');
import { useRouter } from 'next/navigation';
import { Button, Typography, Card, Input, Textarea, Checkbox } from '@material-tailwind/react';
import { useUser } from '@clerk/nextjs';

export default function addItem() {
  //auth
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const [inputData, setInputData] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      let status = 'SUBMITTED';
      let story = '';
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/syncGPT?wordList=${inputData}`,
        );
        story = await response.data;
        status = 'COMPLETED';
      } catch (err) {
        console.log('ChatGPT called failed, inserting the metadata anyways.');
      }

      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/AnecdoteTable`, {
        TaskId: uuid.v4(),
        userId: user.id,
        status: status,
        createdTime: Date.now(),
        lastUpdatedTime: Date.now(),
        wordList: inputData,
        s3Url: story,
      });
      console.log('succefully post');
    } catch (err) {
      console.log(err);
      alert('story generator failed, re-try it');
    }
    router.push('/AnecdoteTable');
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
              {/* <form onSubmit={handleSubmit} action="#"> */}
              <div className="mb-4 h-max">
                <Textarea
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  placeholder="Max 10 words"
                  color="gray"
                  size="lg"
                  name="message"
                />
              </div>
              <Button onClick={handleSubmit} size="lg" color="gray" className="mt-6" fullWidth>
                generate a story
              </Button>
              {/* </form> */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
