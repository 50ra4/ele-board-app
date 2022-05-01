/** @type {import('next').NextConfig} */

/**
 * @see https://nextjs.org/docs/messages/react-hydration-error
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    /**
     * ssr and displayName are configured by default
     * @see https://nextjs.org/docs/advanced-features/compiler#styled-components
     */
    styledComponents: true,
  },
};

module.exports = nextConfig;
