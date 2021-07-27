import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

import rootPaths from './rootPaths';


const {
  srcDirectory, esLintConfig, babelConfig,
  appEntry, outputDirectory, scripts, resolve,
  tsConfig, publicURL } = rootPaths;

const rootConfig: webpack.Configuration = {
  experiments: {layers: true},
  context: srcDirectory,

  entry: {
    reactVendors: ['react', 'react-dom'],
    app: {
      import: appEntry,
      dependOn: 'reactVendors',
      layer: 'main-app'
    }
  },

  output: {
    chunkFilename: 'chunk.[name].[chunkhash:4].js',
    clean: true,
    filename: '[name].[contenthash:4].js',
    path: outputDirectory,
    pathinfo: true,
    publicPath: publicURL
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        include: scripts.directory,
        use: [{
          loader: 'babel-loader',
          options: {
            configFile: babelConfig,
            cacheDirectory: true,
            cacheCompression: true
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      meta: {
        mymeta: 'Barebones foundation to quickly start building your web applications'
      },
      inject: 'body',
      cache: true,
      showErrors: true,
      chunksSortMode: 'auto',
      minify: true,
      scriptLoading: 'defer'
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: tsConfig
      },
      logger: {
        infrastructure: 'webpack-infrastructure',
        issues: 'console',
        devServer: true
      }
    }),
    new ESLintPlugin({
      overrideConfigFile: esLintConfig,
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: {
      // @ts-ignore
      name: entrypoint => `runtimechunk~${entrypoint.name}`
    }
  },

  performance: {
    maxEntrypointSize: 250000,
    maxAssetSize: 250000
  },

  resolve: {
    alias: resolve.aliasPaths,
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    enforceExtension: false,
    modules: resolve.aliasModules
  }
};


export default rootConfig;
