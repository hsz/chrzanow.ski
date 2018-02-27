const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }], config);

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@component-background': 'transparent',
      '@heading-color': 'fade(#fff, 95%)',
      '@text-color': 'fade(#fff, 85%)',
      '@text-color-secondary': 'fade(#fff, 65%)',
      '@border-color-base': 'fade(#fff, 50%)',
      '@border-color-split': 'fade(#fff, 20%)',
    },
  })(config, env);

  return config;
};
