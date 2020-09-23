import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { Configuration, EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common.config';

const config: Configuration = merge(common, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
  output: {
    publicPath: '/',
  },
});

export default config;
