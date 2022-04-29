/** @type {import('next').NextConfig} */

/**
 * @see https://nextjs.org/docs/messages/react-hydration-error
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
