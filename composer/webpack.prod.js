const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

const domain = process.env.PRODUCTION_DOMAIN;
// console.log('domain', domain);

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/users/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'composer',
      remotes: {
        users: `users@${domain}/users/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, devConfig);
