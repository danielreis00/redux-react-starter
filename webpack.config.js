var webpack = require('webpack')

const env = process.env.NODE_ENV;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './main.jsx',
    './src/styles/main.scss'
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader'
    }
  ],
    query: {
     presets: [ 'es2015', 'react' ]
   }
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: process.env.NODE_ENV === 'production'
      ? __dirname + '/build'
      : __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env),
      }
    })
  ]
};


// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//
// const env = process.env.NODE_ENV;
// const devEntry = [
//   'webpack-dev-server/client?http://localhost:8080',
//   'webpack/hot/dev-server',
// ];
//
// module.exports = {
//   entry: [
//     './main.js',
//   ].concat(env === 'production' ? [] : devEntry),
//
//   module: {
//     loaders: [
//       {
//         test: /\.json$/,
//         loader: 'json-loader',
//       },
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.scss$/,
//         loaders: ['style', 'css', 'sass'],
//       },
//       {
//         test: /\.png$/,
//         loader: 'url-loader?limit=100000',
//       },
//       {
//         test: /\.jpg$/,
//         loader: 'file-loader',
//       },
//     ],
//     query: {
//       presets: ['es2015', 'react'],
//     },
//   },
//
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//   },
//
//   output: {
//     path: process.env.NODE_ENV === 'production'
//       ? __dirname + '/build'
//       : __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//
//   devServer: {
//     contentBase: './dist',
//     hot: true,
//     historyApiFallback: {
//       index: 'index.html'
//     }
//   },
//
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.IgnorePlugin(/jsdom$/),
//     new HtmlWebpackPlugin(),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify(env),
//       },
//     }),
//     new webpack.optimize.UglifyJsPlugin(),
//   ],
// };
