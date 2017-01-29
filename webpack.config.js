module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    devTool: 'inline-source-map',
    path: __dirname + '/public'
  },
  devServer: {
    inline: true,
    progress: true,
    colors: true,
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel!eslint'
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  postcss: () => [
    require('autoprefixer')
  ]
};
