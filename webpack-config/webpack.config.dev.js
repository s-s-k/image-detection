import webpack from 'webpack';
import validate from 'webpack-validate';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base.js';

export default validate(merge(baseConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    '../src/render.js'
  ],

  output: {
    // publicPath: ,d
  },

  module: {
  }
}))
