module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Prohibir JSX en archivos .js - debe usar .jsx
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx'], // Solo permitir JSX en archivos .jsx
      },
    ],
    // Otras reglas útiles
    'react/react-in-jsx-scope': 'off', // No necesario en React 17+
    'react/prop-types': 'off', // Opcional, dependiendo de si usas prop-types
  },
  overrides: [
    {
      // Reglas específicas para archivos .js
      files: ['**/*.js'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: [] }], // Prohibir JSX completamente en .js
      },
    },
  ],
};

