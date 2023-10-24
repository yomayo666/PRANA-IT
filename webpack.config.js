const path = require('path');

module.exports = {
  entry: './src/index.js', // путь к вашему файлу входа
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // путь для выходного файла
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
};
