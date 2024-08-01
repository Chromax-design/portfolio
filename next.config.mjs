/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
};

export default withContentlayer(nextConfig);
