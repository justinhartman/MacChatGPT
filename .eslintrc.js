module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true
  },
  extends: 'standard',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'func-style': ['error', 'expression', {
      'allowArrowFunctions': true
    }],
    'prefer-arrow-callback': 'error',
    'no-var': 'error',
    'no-unused-vars': 'off',
    'no-global-assign': 'off',
    'guard-for-in': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'node/no-callback-literal': 'off',
    'node/no-deprecated-api': 'off'
  },
  overrides: [
    {
      files: '*.js',
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    },
    {
      files: '*.ts',
      rules: {
        'no-undef': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'no-use-before-define': 'off'
      }
    },
    {
      files: '*.d.ts',
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
};
