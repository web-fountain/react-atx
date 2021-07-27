import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';

import rootConfig from './rootConfig';
import devConfig from './dev.config';
import prodConfig from './prod.config';


export default (env: any, arg: Configuration): Configuration  => {
  const envConfig = arg.mode === 'production'
    ? prodConfig
    : devConfig;


  // console.log(JSON.stringify(webpackMerge(rootConfig, envConfig)));

  return webpackMerge(rootConfig, envConfig);
};


/**
 * Webpack 4 optimization - predictable long term caching
 * https://github.com/tpai/tpai.github.io/issues/93
 */
