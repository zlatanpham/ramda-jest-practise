module.exports = {
  env: {
    jest: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true // if using jsx
    }
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module'
  },
  globals: { module: false },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    indent: 'error',
    'no-tabs': 'error',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-debugger': 'off'
  }
}
