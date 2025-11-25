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
    // Permitir JSX solo en archivos .jsx
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx'], // Solo permitir JSX en archivos .jsx
      },
    ],
    // Otras reglas útiles
    'react/react-in-jsx-scope': 'off', // No necesario en React 17+
    'react/prop-types': 'warn', // Advertir sobre props sin validación
  },
  overrides: [
    {
      // Reglas específicas para archivos .js (sin JSX)
      files: ['**/*.js'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: [] }], // Prohibir JSX en .js
      },
    },
  ],
};
