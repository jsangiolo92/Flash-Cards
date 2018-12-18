const path = require('path');
const src_dir = path.join(__dirname, './client/src');
const dist_dir = path.join(__dirname, './client/dist');

const config = {
  entry: `${src_dir}/index.jsx`,
  output: {
    path: dist_dir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react']
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}

module.exports = config;