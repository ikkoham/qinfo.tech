module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'camelcase': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-require-imports': 0,
    'react/jsx-boolean-value': [1, 'never'],
    'import/prefer-default-export': 0,
  },
};
