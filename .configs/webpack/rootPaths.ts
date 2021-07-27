import path from 'path';


const srcDirectory = path.resolve(__dirname, '..', '..', 'src');
const outputDirectory = path.resolve(__dirname, '..', '..', '_webpack-output');

const rootPaths = {
  srcDirectory,
  outputDirectory,
  assetsDirectory: `${outputDirectory}/assets`,
  publicURL: '/',
  appEntry: './index.tsx',

  fonts: {
    directory: [
      srcDirectory,
      `${srcDirectory}/assets/fonts`
    ],
    output: 'assets/fonts/[name].[contenthash:4].[ext]'
  },

  images: {
    directory: [
      srcDirectory,
      `${srcDirectory}/assets/images`
    ],
    output: 'assets/images/[name].[contenthash:4].[ext]',
  },

  css: {
    direcotry: [
      srcDirectory,
      `${srcDirectory}/assets/styles`,
      `${srcDirectory}/assets/fonts`,
      `${srcDirectory}/components`,
      `${srcDirectory}/elements`,
      `${srcDirectory}/pages`,
      `${srcDirectory}/shared`
    ]
  },

  scripts: {
    directory: [
      `${srcDirectory}`,
      `${srcDirectory}/piperouter`,
      `${srcDirectory}/components`,
      `${srcDirectory}/elements`,
      `${srcDirectory}/gateway`,
      `${srcDirectory}/lib`,
      `${srcDirectory}/pages`,
      `${srcDirectory}/reducers`,
      `${srcDirectory}/pipeline`,
      `${srcDirectory}/services`,
      `${srcDirectory}/shared`
    ],
  },

  resolve: {
    aliasPaths: {
      Components: `${srcDirectory}/components`,
      Elements: `${srcDirectory}/elements`,
      Events: `${srcDirectory}/events`,
      Fonts: `${srcDirectory}/assets/fonts`,
      Gateway: `${srcDirectory}/gateway`,
      Images: `${srcDirectory}/assets/images`,
      Lib: `${srcDirectory}/lib`,
      PipeRouter: `${srcDirectory}/piperouter`,
      Pages: `${srcDirectory}/pages`,
      Reducers: `${srcDirectory}/reducers`,
      Sections: `${srcDirectory}/sections`,
      Services: `${srcDirectory}/services`,
      Shared: `${srcDirectory}/components/shared`,
      Store: `${srcDirectory}/configureStore.js`,
      Styles: `${srcDirectory}/assets/styles`
    },
    aliasModules: [
      `${srcDirectory}`,
      'node_modules'
    ]
  },

  esLintConfig: path.resolve(__dirname, '..', 'eslintrc.json'),
  babelConfig: path.resolve(__dirname, '..', 'babelrc.json'),
  tsConfig: path.resolve(__dirname, '..', 'tsconfig.json')
};


export default rootPaths;
// https://www.npmjs.com/package/loader-utils#interpolatename
