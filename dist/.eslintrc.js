const env = process.env.NODE_ENV;

module.exports = {
  env: {
    browser: true,
    node: false,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
  settings: {
    "import/resolver": {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
      }
    }
  },
};
  