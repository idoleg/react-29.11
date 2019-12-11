const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
  ],
};
