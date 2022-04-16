module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
    'plugin:@next/next/recommended',
  ],
  rules: {},
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
