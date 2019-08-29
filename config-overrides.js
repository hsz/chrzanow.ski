const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { addBabelPlugin, override, addLessLoader } = require('customize-cra');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = override(
  addBabelPlugin(['babel-plugin-emotion', { sourceMap: true, autoLabel: true }]),
  addBabelPlugin([
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
  ]),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
      '@component-background': 'transparent',
      '@heading-color': 'fade(#fff, 95%)',
      '@text-color': 'fade(#fff, 85%)',
      '@text-color-secondary': 'fade(#fff, 65%)',
      '@border-color-base': 'fade(#fff, 50%)',
      '@border-color-split': 'fade(#fff, 20%)',
    },
  }),
  config => ({
    ...config,
    plugins: config.plugins.concat([...(PRODUCTION ? [new BundleAnalyzerPlugin()] : [])]),
  }),
);
