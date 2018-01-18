
const webpack = require('webpack')
const path    = require('path')

const reactPath = './resources'
const buildPath = '/public/assets/javascript'

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // ソケットす通信が行われるため、使用していないポートを設定
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',

    reactPath + '/index.jsx',
  ],
  output: {
    filename: 'app.js',
    path: __dirname + buildPath,
    publicPath: '/public/assets/javascript/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2016',
            'stage-1',
            'react'
          ],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
            'react-hot-loader/babel',
          ],
        }
      },
    ]
  },
  devServer : {
    host: 'localhost',
    port: 8081,
    contentBase: __dirname,
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    alias: {

    }
  }
};
