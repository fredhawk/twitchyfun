var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/, 
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Twitch App',
      minify: {
        collapseWhitepsace: false // Set to true to minify html
      },
      hash: true, // Set to true if we want hashed bundles.
      template: './src/index.html', // Load a custom template (ejs by default)
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
    ]
}