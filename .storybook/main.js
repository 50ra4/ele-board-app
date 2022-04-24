const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ];
    baseConfig.resolve.alias = {
      ...baseConfig.resolve.alias,
      '@/components': path.resolve(__dirname, '../src/presentation/components'),
    };
    return baseConfig;
  },
  typescript: {
    reactDocgen: 'none',
  },
  /**
   * @see https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#64-deprecations
   */
  staticDirs: ['../public'],
};
