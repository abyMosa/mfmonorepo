const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8000
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'composer',
      remotes: {
        users: 'users@http://localhost:8001/remoteEntry.js'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(commonConfig, devConfig);
