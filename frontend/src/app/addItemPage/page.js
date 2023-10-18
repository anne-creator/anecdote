'use client';
import axios from 'axios';
import { Typography, Textarea, Button } from '@material-tailwind/react';

export function addItemPage() {
  const handleClick = () => {
    axios.post(url, config).then;
  };
  return (
    <section className="h-screen items-center lg:grid-cols-2">
      <div className="mx-auto p-10 lg:max-w-xl bg-white">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Let's enter your new list of vocabularies to create a new story!
        </Typography>
        <Typography variant="lead" className="mb-16 !text-gray-500">
          Max 20 words
        </Typography>

        <form action="#">
          <div className="mb-4 h-max">
            <Textarea
              color="gray"
              size="lg"
              label="Max 20 words, seperate with comma
"
              name="message"
            />
          </div>
          <Button onClick={handleClick} size="lg" color="gray" className="mt-6" fullWidth>
            Create a new story
          </Button>
        </form>
      </div>
      {/* <img
        src="/img/contact-us.jpg"
        alt="background image"
        className="hidden h-full min-h-screen w-full object-cover lg:block"
      /> */}
    </section>
  );
}

export default addItemPage;
