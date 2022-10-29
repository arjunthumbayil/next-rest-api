/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGO_URI:
      "mongodb+srv://arjun:nextrestapi@cluster0.wuv8tv9.mongodb.net/myseconddb?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
