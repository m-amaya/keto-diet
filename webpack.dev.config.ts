import { EnvironmentPlugin, HotModuleReplacementPlugin } from 'webpack';
import { Configuration } from 'webpack-dev-server';
import merge from 'webpack-merge';
import common from './webpack.common.config';

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    overlay: true,
    staticOptions: { redirect: false },
    port: 8000,
  },
  watch: true,
  plugins: [
    new HotModuleReplacementPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  output: {
    publicPath: '/',
  },
});

export default config;
