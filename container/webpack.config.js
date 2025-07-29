const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devServer: {
    port: 3000,
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    clean: true,
  },
  module: {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}
,
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        demo: 'demo@http://localhost:3003/remoteEntry.js',
        currency: 'currency@http://localhost:3002/remoteEntry.js'
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
