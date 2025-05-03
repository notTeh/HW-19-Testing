module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000', // Adjust the base URL as needed
    supportFile: 'cypress/support/index.js',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
};