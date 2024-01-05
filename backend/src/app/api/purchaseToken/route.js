import Stripe from 'stripe';

const secret_key =
  // 'sk_test_51ORdFyGTkm7su90ROlXdSPi0j5Mz4Ip3Upih6Mm6GSw50tFVFrkq0wlZFgFSwcwsjxixwA3mYYvR7dLYmrj0Agh9004Pcf36Yp';
  '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'; //real key
const stripe = new Stripe(secret_key);

export async function GET(request) {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Use price ID as the input, price IDs are generated
          // from the Stripe dashboard when creating a product
          price: '1',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://anecdote-frontend.vercel.app/purchaseToken?success=true`,
      cancel_url: `https://anecdote-frontend.vercel.app/purchaseToken?canceled=true`,
      automatic_tax: { enabled: true },
    });
    console.log(session);
    return Response.json({ url: session.url });
  } catch (error) {
    console.log('error!');
    return Response.error('Internal Server Error');
  }
}
