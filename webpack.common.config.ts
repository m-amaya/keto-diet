import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  target: 'web',
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      app: resolve('./src/app'),
      assets: resolve('./src/assets'),
      store: resolve('./src/store'),
      utils: resolve('./src/utils'),
    },
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    namedChunks: true,
    namedModules: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: './src/assets',
          from: '**/*',
          to: 'assets/',
        },
      ],
    }),
    new DotenvWebpackPlugin({
      path: './.env',
    }),
    new CircularDependencyPlugin({ exclude: /node_modules/ }),
  ],
};

export default config;
