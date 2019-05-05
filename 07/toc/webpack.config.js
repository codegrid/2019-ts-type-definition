module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ['ts-loader']
    }, ]
  },
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: 'Toc',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  }
};
