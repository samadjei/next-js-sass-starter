module.exports = {
  env: {
  browser: true,
  es2021: true,
  'jest/globals': true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
  camelcase: 'off',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'max-len': 'off',
  'linebreak-style': 'off',
  'comma-dangle': ['error', 'never'],
  'no-param-reassign': 'off',
  'import/extensions': [
  'error',
  'ignorePackages',
  {
  js: 'never',
  jsx: 'never',
  ts: 'never',
  tsx: 'never'
  }
  ],
  'react/jsx-filename-extension': [
  1,
  {
  extensions: ['.js', '.jsx']
  }
  ],
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/function-component-definition': 'off',
  'react/prop-types': [0],
  'no-restricted-exports': 'off',
  'no-tabs': 'off',
  'react/react-in-jsx-scope': 'off',
  'no-underscore-dangle': 'off'
  }
  };