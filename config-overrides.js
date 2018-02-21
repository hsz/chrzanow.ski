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
      '@heading-color': 'fade(#fff, 95%)',
      '@text-color': 'fade(#fff, 85%)',
      '@text-color-secondary': 'fade(#fff, 65%)',
    },
  })(config, env);

  return config;
};
