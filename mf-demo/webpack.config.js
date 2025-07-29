const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
 entry: './src/index.jsx',
 mode: 'development',
 devServer: {
   port: 3003, // pick a unique port for this MF
   static: path.resolve(__dirname, 'dist'),
   hot: true,
   open: true,
   historyApiFallback: true,
 },
 output: {
   publicPath: 'auto',
   filename: '[name].js',
   path: path.resolve(__dirname, 'dist'),
   clean: true,
 },
 resolve: {
   extensions: ['.js', '.jsx'],
 },
 module: {
   rules: [
     {
       test: /\.jsx?$/, // Transpile .js and .jsx files
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
       },
     },
     {
       test: /\.s[ac]ss$/i, // Support for SCSS if needed
       use: ['style-loader', 'css-loader', 'sass-loader'],
     },
   ],
 },
 plugins: [
   new ModuleFederationPlugin({
     name: 'demo',
     filename: 'remoteEntry.js',
     exposes: {
       './DemoApp': './src/DemoApp.jsx',
     },
     shared: {
       react: { singleton: true, requiredVersion: '^18.0.0' },
       'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
     },
   }),
   new HtmlWebpackPlugin({
     template: './public/index.html',
   }),
 ],
};