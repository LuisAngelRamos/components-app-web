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
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Prohibir JSX en archivos .js - debe usar .tsx
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'], // Solo permitir JSX en archivos .tsx
      },
    ],
    // Otras reglas útiles
    'react/react-in-jsx-scope': 'off', // No necesario en React 17+
    'react/prop-types': 'off', // Usamos TypeScript para tipos
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Opcional
    '@typescript-eslint/no-explicit-any': 'warn', // Advertir sobre any
  },
  overrides: [
    {
      // Reglas específicas para archivos .ts (sin JSX)
      files: ['**/*.ts'],
      rules: {
        'react/jsx-filename-extension': ['error', { extensions: [] }], // Prohibir JSX en .ts
      },
    },
  ],
};
