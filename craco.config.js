module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          assert: require.resolve("assert"),
          crypto: require.resolve("crypto-browserify"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          stream: require.resolve("stream-browserify"),
          url: require.resolve("url"),
          zlib: require.resolve("browserify-zlib"),
          vm: require.resolve("vm-browserify"),
        },
      },
    },
  },
};
