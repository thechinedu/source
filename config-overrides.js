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

  return config;
};
