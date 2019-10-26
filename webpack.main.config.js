const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: rules
  },
  plugins: plugins,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
