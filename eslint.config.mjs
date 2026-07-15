export default [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  {
    files: ['app/**/*.{js,jsx}', 'components/**/*.{js,jsx}', 'lib/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'readonly',
        process: 'readonly',
        console: 'readonly',
        URL: 'readonly',
        document: 'readonly',
        window: 'readonly',
        getComputedStyle: 'readonly',
        requestAnimationFrame: 'readonly',
        performance: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
];
