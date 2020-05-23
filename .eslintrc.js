module.exports = {
  extends: [
    require.resolve('@darkobits/ts-unified/dist/config/eslint-react')
  ],
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-type-alias': 'off'
  }
};
