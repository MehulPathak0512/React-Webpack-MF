const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devServer: {
    port: 3001,
    static: path.join(__dirname, 'dist'),
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'
      },
      {
        test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'crypto',
      filename: 'remoteEntry.js',
      exposes: {
        './CryptoApp': './src/CryptoApp.jsx',
      },
      shared: {
  react: { singleton: true, requiredVersion: false, eager: false },
  'react-dom': { singleton: true, requiredVersion: false, eager: false },
},

    }),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
