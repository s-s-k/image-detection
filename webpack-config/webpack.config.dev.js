var webpack =require( 'webpack');
var path = require('path');

module.exports ={
  debug: true,
  devtool: 'source-map',
  entry: [
    './src/render.js'
  ],

  output: {
    path: path.join(__dirname,'..', 'build'),
    filename: 'bundle.js'
    // publicPath: ,d
  },
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  resolve: {
    root: path.resolve(__dirname, '..', 'src'),
    extensions:['', '.js', '.jsx']
  },

  plugins:[],

  postcss: function(){
    return [require('autoprefixer'), require('precss')];
  }

}
