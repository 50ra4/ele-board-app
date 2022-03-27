const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: !isProduction,
      },
    ],
  ],
};
