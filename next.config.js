/** @type {import('next').NextConfig} */
const withImages = require("next-images");
(module.exports = withImages()),
  {
    reactStrictMode: true,
    env: {
      apiAddress: "http://localhost:1337/",
    },
  };
