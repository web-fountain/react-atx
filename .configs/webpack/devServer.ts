import webpackDevServer from 'webpack-dev-server';
import rootPaths from './rootPaths';


const { srcDirectory, assetsDirectory, publicURL } = rootPaths;

const simpleConfig: webpackDevServer.Configuration = {
  historyApiFallback: true,
  port: 8000,
  open: false,
  hot: true
};

const myConfig = {
  host: 'localhost',
  port: 8000,

  open: false,                      // Open the page in browser
  publicPath: '/',                  // public URL of the output directory when referenced in a browser
  contentBase: assetsDirectory,     // Content not bundled with webpack is served from here (e.g. mp3)
  contentBasePublicPath: publicURL,

  historyApiFallback: true,
  compress: true,
  hot: true,
  hotOnly: true,                    // Don't refresh if hot loading fails. Good while implementing the client interface.
  inline: true,                     // A script will be inserted in your bundle to take care of live reloading, and build messages will appear in the browser console. Recommended for Hot Module Replacement
  overlay: true,                    // Capturing compilation related warnings and errors

  // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
  stats: {
    assets: true,
    builtAt: true,                  // Add build date and time information
    cached: true,                   // Add information about cached (not built) modules
    cachedAssets: true,             // Show cached assets (setting this to `false` only shows emitted files)
    children: true,
    chunks: false,
    colors: true,
    depth: false,                   // Display the distance from the entry point for each module
    entrypoints: false,             // Display the entry points with the corresponding bundles
    errors: true,
    errorDetails: true,             // depends on {errors: true}
    hash: true,
    modules: false,
    moduleTrace: true,
    performance: true,
    providedExports: true,
    publicPath: true,
    reasons: true,
    source: true,
    usedExports: false,
    timings: true,
    version: true,
    warnings: true
  }
};

const explictConfig: webpackDevServer.Configuration = {
  bonjour: false,
  clientLogLevel: 'info',
  compress: true,
  contentBase: srcDirectory,
  contentBasePublicPath: '/',
  disableHostCheck: false,
  filename: '',
  headers: {},
  historyApiFallback: true,
  host: 'localhost',
  hot: true,
  hotOnly: true,
  http2: false,
  https: false,
  index: '',
  injectClient: false,
  injectHot: false,
  inline: true,
  lazy: false,
  liveReload: false,
  mimeTypes: {},
  noInfo: false,
  open: false,
  overlay: {
    warnings: true,
    errors: true,
  },
  port: 8000,
  publicPath: '/',
  quiet: false,
  serveIndex: true,
  staticOptions: {},
  // --progress - [assets, children, chunks, colors, errors, hash, timings, version, warnings]
  stats: {
    assets: true,
    assetsSort: 'name',
    builtAt: true,

    // see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43232
    // @ts-ignore
    assetsSpace: 15,
    moduleAssets: true,
    chunkModulesSpace: 10,
    nestedModulesSpace: 10,
    cachedModules: true,
    runtimeModules: true,
    dependentModules: true,
    groupAssetsByChunk: true,
    groupAssetsByEmitStatus: true,
    groupAssetsByInfo: false,
    groupModulesByAttributes: false,
    cachedAssets: true,
    children: true,
    chunks: true,
    chunkGroups: true,
    chunkModules: true,
    chunkOrigins: true,
    chunksSort: 'name',
    colors: true,
    depth: true,
    entrypoints: true,
    env: true,
    orphanModules: true,
    errors: true,
    errorDetails: true,
    errorStack: true,
    hash: true,
    logging: true,
    loggingTrace: true,
    modules: true,
    modulesSort: 'name',
    moduleTrace: true,
    outputPath: true,
    performance: true,
    preset: false,
    providedExports: true,
    errorsCount: true,
    warningsCount: true,
    publicPath: true,
    reasons: true,
    relatedAssets: true,
    source: true,
    timings: true,
    ids: true,
    usedExports: true,
    version: true,
    chunkGroupAuxiliary: true,
    chunkGroupChildren: true,
    chunkGroupMaxAssets: 5,
    warnings: true,
    chunkRelations: true
  },
  useLocalIp: false,
  watchContentBase: false,
  watchOptions: {},
  writeToDisk: false
};

function devServerConfig(isExplicit: boolean = false): webpackDevServer.Configuration {
  return isExplicit ? explictConfig: simpleConfig;
}


export default devServerConfig;
