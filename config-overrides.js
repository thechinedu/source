module.exports = config => {
  require('react-app-rewire-postcss')(config, {
     plugins: loader => [
      require('postcss-preset-env')({
        stage: 2,
        features: {
          'nesting-rules': true
        }
      })
    ]
  });

  config.module.rules[1].oneOf.unshift({
    test: /\.md$/, use: 'raw-loader'
  });

  config.module.rules[1].oneOf[config.module.rules[1].oneOf.length - 1]
    .exclude.push(/\.md$/);

  return config;
};
