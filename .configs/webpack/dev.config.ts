import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

import devServerConfig from './devServer';


interface DevConfiguration extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration;
}

const config: DevConfiguration = {
  mode: 'development',
  devtool: 'eval',
  devServer: devServerConfig(false),
  module: {},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimize: false,
    emitOnErrors: false,
    moduleIds: 'named',
    chunkIds: 'named',
    nodeEnv: 'development',
    mangleWasmImports: false,

    // contrast w/ production
    removeAvailableModules: false,
    removeEmptyChunks: false,
    mergeDuplicateChunks: false,
    flagIncludedChunks: false,
    providedExports: false,
    usedExports: 'global',
    concatenateModules: false,
    sideEffects: 'flag',
    portableRecords: false,
    mangleExports: false,
    innerGraph: false,
    realContentHash: false
  },
  performance: {
    hints: 'warning'
  }
};

export default config;
