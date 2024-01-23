const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/composer/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'composer',
      remotes: {
        users: `users@https://d2gbu0ggj5rc67.cloudfront.net/users/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, devConfig);
