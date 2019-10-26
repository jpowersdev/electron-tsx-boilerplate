const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    presets: [
      '@babel/preset-typescript',
      ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
      '@babel/preset-react'
    ],
    plugins: [['styled-jsx/babel']]
  }
};

module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader'
  },
  {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    loaders: [babelLoader]
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [babelLoader]
  }
  // {
  //   test: /\.(m?js|node)$/,
  //   parser: { amd: false },
  //   use: {
  //     loader: '@marshallofsound/webpack-asset-relocator-loader',
  //     options: {
  //       outputAssetBase: 'native_modules'
  //     }
  //   }
  // }
];
