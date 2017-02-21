const path = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'production';

const config = {
  entry: './src/site.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    stats: {
      chunks: false,
      colors: true
    }
  },
  devtool: 'eval',
  plugins: [
  ].concat(
    ENV === 'production'
    ? [new webpack.NoEmitOnErrorsPlugin()]
    : [new webpack.NamedModulesPlugin()]
  )
};

module.exports = config;
