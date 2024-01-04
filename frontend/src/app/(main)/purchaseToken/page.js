// 'use client';
// import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
// import { Button } from '@material-tailwind/react';

// export default function PreviewPage() {
//   const test_publishable_key =
//     'pk_test_51ORdFyGTkm7su90R4Okd6YJG8yDNMfmcWf50B2ITaF1rnVGL4evAisCcJcl52OAjKkhO9ZgfsLuzr3nmDUv9PYDm007zOGkjrK';
//   const stripePromise = loadStripe(test_publishable_key);

// React.useEffect(() => {
//   // Check to see if this is a redirect back from Checkout
//   const query = new URLSearchParams(window.location.search);
//   if (query.get('success')) {
//     console.log('Order placed! You will receive an email confirmation.');
//   }

//   if (query.get('canceled')) {
//     console.log('Order canceled -- continue to shop around and checkout when you are ready.');
//   }
// }, []);

// const handleClick = () => {
// try {
//   const res = axios.get(`${process.env.NEXT_PUBLIC_URL}/api/purchaseToken`);
//   console.log('succefully connect to backend strip');
// } catch (err) {
//   console.log(err);
//   alert('failed connect to backend strip, re-try it');
//   // }
//   console.log('clicked');
//   return;
// };
// return (
// <form action="${process.env.NEXT_PUBLIC_URL}/api/purchaseToken" method="POST">
// </form>
//     <Button onClick={handleClick}>Checkout</Button>
//   );
// }

'use client';
import React from 'react';
import { Button, Typography, Card, Textarea } from '@material-tailwind/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

export default function purchaseToken() {
  const test_publishable_key =
    'pk_test_51ORdFyGTkm7su90R4Okd6YJG8yDNMfmcWf50B2ITaF1rnVGL4evAisCcJcl52OAjKkhO9ZgfsLuzr3nmDUv9PYDm007zOGkjrK';
  const stripePromise = loadStripe(test_publishable_key);

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when youre ready.');
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const res = axios.get(`${process.env.NEXT_PUBLIC_URL}/api/purchaseToken`);
      console.log('succefully connect to backend Stripe');
      console.log(res);
    } catch (err) {
      console.log(err);
      alert('failed connect to backend Stripe, re-try it');
    }
  };

  return (
    <div className="p-8 rounded-xl shadow-lg">
      <section className="min-h-[100vh] p-4">
        <Button onClick={handleSubmit} size="lg" color="gray" className="mt-6" fullWidth>
          purchase
        </Button>
      </section>
    </div>
  );
}
