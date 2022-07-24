const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './demo/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:5].bundle.min.js',
    chunkFilename: '[id]-[contenthash:5].chunk.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      { test: /(\.tsx|\.ts)$/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './demo/index.html',
      filename: 'index.html',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // externals: {
  //   react: "react",
  // },
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        jquery: {
          test: /jquery/,
          priority: -5,
          filename: 'jquery-[contenthash:5].min.js',
        },
        lodash: {
          test: /lodash/,
          priority: -5,
          filename: 'lodash-[contenthash:5].min.js',
        },
        codemirror: {
          test: /codemirror/,
          priority: -5,
          filename: 'codemirror-[contenthash:5].min.js',
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 判断引入库是否是node_modules里的
          priority: -10, // 数字越大优先级越高 （-10大于-20）
          // filename: 'vendor.min.js'  // 设置代码分割后的文件名，仅在chunks为initial时能用，否则报错
        },
        default: {
          filename: 'common.bundle.js',
          priority: -20,
          minChunks: 2, // 在拆分之前共享模块的最小块数, 默认为1，表示只要有一个地方引入，就抽离到公共模块，设置为2表示 有两个chunk 引入同一个人文件才进行抽离，设置2更为合理一点
          reuseExistingChunk: true, // 允许在模块完全匹配时重用现有的块，而不是创建新的块
        },
      },
    },
  },
};
