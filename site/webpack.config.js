const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/app/index.js'
  },

  output: {
    path: './dist',
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    alias: {
      'app': './src/app'
    }
  },

  module: {
    rules: [
      // JS files
      {
        test: /\.jsx?$/,
        include: 'src',
        loader: 'babel-loader'
      },

      // SCSS files
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                'sourceMap': true,
                'importLoaders': 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    new HtmlWebpackPlugin({
      template: 'src/public/index.html',
      inject: 'body'
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].[hash].css'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      },
      output: {
        comments: false
      }
    }),

    new CopyWebpackPlugin([{
      from: 'src/public'
    }])
  ]
};
