module.exports = {
  entryPoints: ['src'],
  entryPointStrategy: 'expand',
  tsconfig: 'tsconfig.json',
  exclude: [
    'src/*.{ts,tsx}',
    '**/+(presentation|store|pages)/**/*',
    '**/*+(.spec|.test|.stories).{ts,tsx}',
    '**/__snapshots__/**/*',
    'src/utils/storybookUtils.tsx',
  ],
  name: 'ele-board-app document',
  out: 'docs/typedoc',
};
