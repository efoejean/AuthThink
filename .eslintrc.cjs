module.exports = {
  env: {
    node: true,
  },
  extends: ['xo', 'plugin:jest/recommended', 'plugin:jest/style', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'capitalized-comments': 'off',
    'no-redeclare': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
