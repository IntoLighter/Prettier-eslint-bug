module.exports = {
  env: {
    browser: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'prefer-const': 0,
    'generator-star-spacing': [2, { before: false, after: true }],
    'comma-dangle': 0
  }
}
