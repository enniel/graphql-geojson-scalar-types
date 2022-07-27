const typescriptConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'airbnb-typescript/base',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },
};

module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      ...typescriptConfig,
      files: ['src/**/*.ts', 'tests/*.ts'],
    },
    {
      ...typescriptConfig,
      files: ['demo/*.ts'],
      rules: {
        ...typescriptConfig.rules,
        'no-console': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
