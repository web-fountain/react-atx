import webpack from 'webpack';


const config: webpack.Configuration = {
  mode: 'production',
  devtool: false,
  output: {
    publicPath: ''
  },

  module: {},
  plugins: [],

  optimization: {
    minimize: false,
    minimizer: [() => ({
      terserOptions: { // https://github.com/terser/terser#minify-options
        ecma: undefined,
        parse: {},
        compress: {
          defaults: true
        },
        mangle: true,
        module: false,
        format: {
          comments: false,
          ecma: 5,
          indent_level: 2,
          quote_style: 0,
          semicolons: true
        },
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_classnames: undefined,
        keep_fnames: false,
        safari10: false,
        extractComments: true
      }
    })],
    emitOnErrors: false,
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    nodeEnv: 'production',
    mangleWasmImports: false,

    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    flagIncludedChunks: true,
    providedExports: true,
    usedExports: true,
    concatenateModules: true,
    sideEffects: true,
    portableRecords: false,
    mangleExports: true,
    innerGraph: true,
    realContentHash: true
  },
  performance: {
    hints: 'error'
  }
};


export default config;
