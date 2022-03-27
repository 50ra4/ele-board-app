module.exports = {
  root: true, // プロジェクトのルートに配置していると教えている
  env: {
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // ESLintにTypeScriptを適応
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'], // TypeScriptプラグインのルールを適用
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
};
