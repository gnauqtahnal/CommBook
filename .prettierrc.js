module.exports = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
  ],
  printWidth: 80,
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  importOrder: [
    '^react$',
    '^react-native$',
    '^@core/(.*)$',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
};
