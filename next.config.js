const nextConfig = {
  async redirects() {
    return [
            {
              source: '/news',
              destination: '/news/react',
              permanent: true,
            },
          ]
  },

  experimental: {
    appDir: true
  },

  reactStrictMode: true
};


module.exports = nextConfig;
