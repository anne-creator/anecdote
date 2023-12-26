import Stripe from 'stripe';

const test_secret_key =
  'sk_test_51ORdFyGTkm7su90ROlXdSPi0j5Mz4Ip3Upih6Mm6GSw50tFVFrkq0wlZFgFSwcwsjxixwA3mYYvR7dLYmrj0Agh9004Pcf36Yp';
const stripe = new Stripe(test_secret_key);

export async function GET(request) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Use price ID as the input, price IDs are generated
          // from the Stripe dashboard when creating a product
          price: 'price_1OReBZGTkm7su90RtCyIFhb4',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/api/purchaseToken?success=true`,
      cancel_url: `http://localhost:3000/api/purchaseToken?canceled=true`,
      automatic_tax: { enabled: true },
    });
    // return Response.redirect({ url: session.url, status: 303 });
    return Response.json({ url: session.url, status: 303 });
  } catch (error) {
    console.log('error!');
    return Response.error('Internal Server Error');
  }
}
