const prettierConfig = require('./.prettierrc')

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'babel/camelcase': 'off',
    'babel/quotes': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-lines-per-function': 'off',
    'react/jsx-pascal-case': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', prettierConfig],
  },
}
