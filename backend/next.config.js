/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    MY_AWS_ACCESS_KEY: process.env.MY_AWS_ACCESS_KEY,
    MY_AWS_SECRET_KEY: process.env.MY_AWS_SECRET_KEY,
  },
};
