const path = require('path')

module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    document: true,
    window: true,
    oneSignal: true,
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react-hooks',
    'import',
  ],
  rules: {
    'react/no-danger': 0,
    'react/prop-types': [2, { ignore: ['children'] }],
    'import/no-named-as-default-member': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-double'],
    'no-restricted-imports': [2, { patterns: ['../*'] }],
    'jsx-a11y/no-autofocus': [0, {
      ignoreNonDOM: true,
    }],
    'no-underscore-dangle': ['error', {
      allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, '.')],
      },
    },
  },
}
