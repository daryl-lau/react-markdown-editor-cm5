const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.min.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      { test: /(\.tsx|\.ts)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.min.css',
    }),
    // new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'highlight.js': {
      root: 'highlight.js',
      commonjs2: 'highlight.js',
      commonjs: 'highlight.js',
      amd: 'highlight.js',
    },
    jquery: 'jquery',
    lodash: 'lodash',
    // 'rc-trigger': 'rc-trigger',
    // 'markdown-it': {
    //   commonjs: 'markdown-it',
    //   commonjs2: 'markdown-it',
    // },
    // 'markdown-it-emoji': {
    //   commonjs: 'markdown-it-emoji',
    //   commonjs2: 'markdown-it-emoji',
    // },
  },
};
