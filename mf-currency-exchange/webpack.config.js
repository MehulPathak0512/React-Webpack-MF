const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devServer: {
    port: 3002,
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
      name: 'currency',
      filename: 'remoteEntry.js',
      exposes: {
        './CurrencyApp': './src/components/CurrencyApp/CurrencyApp.jsx',
        },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
