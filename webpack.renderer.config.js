const rules = require('./webpack.rules');

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
