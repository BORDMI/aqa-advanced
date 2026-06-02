import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    ignores: ['node_modules/**', 'package-lock.json', '.husky/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-unassigned-vars': 'warn',
      'no-console': 'off',
      'no-useless-assignment': 'warn',
    },
  },
  prettier,
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      '@stylistic/indent': ['error', 2, { MemberExpression: 1 }],
    },
  },
];
