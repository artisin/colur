var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    colur: './lib/index.js'
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  target: 'node',
  externals: [nodeExternals()]
};

