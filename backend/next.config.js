/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    MY_AWS_ACCESS_KEY: process.env.MY_AWS_ACCESS_KEY,
    MY_AWS_SECRET_KEY: process.env.MY_AWS_SECRET_KEY,
  },
  async headers() {
    console.log('actualy run this config file');
    return [
      {
        // Routes this applies to
        source: '/api/(.*)',
        // Headers
        headers: [
          // Allow for specific domains to have access or * for all
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
            // DOES NOT WORK
            // value: process.env.ALLOWED_ORIGIN,
          },
          // Allows for specific methods accepted
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          // Allows for specific headers accepted (These are a few standard ones)
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};
