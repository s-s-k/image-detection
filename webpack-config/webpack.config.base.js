/**
 *Base webpack config used across other spedific configs
 *
 */

import path from 'path';
import validate from 'webpack-validator';

export default validate({
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  output: {
    path: path.join(__dirname,'../build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions:['', '.js', '.jsx']
  },

  plugins:[],

  postcss: function(){
    return {
      defaults: [precss,autoprefixer],
      cleaner: [autoprefixer({browswer:[]})]
    }
  }
})
