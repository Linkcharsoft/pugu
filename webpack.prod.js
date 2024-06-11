const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const publicPath = process.env.PUBLIC_PATH || '/'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: publicPath
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    }
  },
  mode: 'production', // Cambiar a modo producción
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }, {
        test: /\.(css|s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.png/,
        type: 'asset/resource'
      },  {
        test: /\.gif/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }, {
        test: /\.jpg/,
        use:  'url-loader?limit=100000'
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: 'assets'
        }
      ]
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true
  }
}