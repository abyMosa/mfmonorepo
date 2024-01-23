const commonJs = require('./webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');


const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/users/latest'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'users',
      filename: 'remoteEntry.js',
      exposes: {
        './UsersApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
  ]
}

module.exports = merge(commonJs, prodConfig);
