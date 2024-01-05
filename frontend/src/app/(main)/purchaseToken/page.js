'use client';
import React from 'react';
import { Button, Typography, Card, Textarea } from '@material-tailwind/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function purchaseToken() {
  const router = useRouter();
  const test_publishable_key =
    // 'pk_test_51ORdFyGTkm7su90R4Okd6YJG8yDNMfmcWf50B2ITaF1rnVGL4evAisCcJcl52OAjKkhO9ZgfsLuzr3nmDUv9PYDm007zOGkjrK';
    'pk_live_51ORdFyGTkm7su90RFyBqXe3eqdHF8Uqk0dxM1QX7W3ZVXFyyunMEzc2MQp2oG1UNJUwmg0CWuDmVZkkXtBnWncN400dauPYKn'; //real key
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
      router.push((await res).data.url);
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
