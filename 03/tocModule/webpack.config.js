module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }]
  },
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/public/assets`,
    filename: 'index.bundle.js',
  },
  devServer: {
    open: true,
    contentBase: './public',
    publicPath: '/assets/',
    watchContentBase: true
  },
};
