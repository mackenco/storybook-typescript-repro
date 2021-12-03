const merge = require('webpack-merge');
const webpackConfig = require('../webpack.js');

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  stories: ['../src/**/*.stories.mdx'],
  typescript: {
    reactDocgenTypescriptOptions: {
      skipChildrenPropWithoutDoc: true,
      shouldExtractLiteralValuesFromEnum: true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: config => {
    return merge.strategy({ 'module.rules': 'replace' })(config, webpackConfig);
  },
};
