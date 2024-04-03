const fs = require('fs');

const folders = fs
  .readdirSync('src', {withFileTypes: true})
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['simple-import-sort', 'import', '@typescript-eslint/eslint-plugin'],
  globals: {
    NodeJS: true,
  },
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn',
    'react/display-name': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    'import/no-named-as-default': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
    ],
    'import/no-cycle': [
      'warn',
      {
        ignoreExternal: true,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^@?\\w'],
          [`^(${folders.join('|')})(/.*|$)`, '^\\.'],
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
