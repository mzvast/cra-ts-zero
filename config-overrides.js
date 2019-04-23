/**
 * @file [config-overrides]
 * @author [wangyang65]
 * @email [wangyang65@baidu.com]
 * @create date 2018-03-15 03:28:17
 */
/* eslint-disable */

const path = require('path');
// const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {injectBabelPlugin} = require('react-app-rewired');
// const rewireInlinSource = require('react-app-rewire-inline-source');
// const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin');
// const rewireCompressionPlugin = require('react-app-rewire-compression-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const rewireStyledComponents = require('react-app-rewire-styled-components');
module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
        // config.resolve = {
        //     ...config.resolve,
        //     alias: {
        //         '@': path.resolve(__dirname, 'src')
        //     }
        // };
        // COMMON Plugins
        // config = injectBabelPlugin(
        //     'babel-plugin-transform-decorators-legacy',
        //     config
        // );

        // config = injectBabelPlugin('babel-plugin-syntax-dynamic-import', config);

        // DEV ONLY
        // if (env !== 'production') {
        //     config = rewireReactHotLoader(config, env);
        // }
        if (env !== 'production') {
            config = rewireStyledComponents(config, env);
            // config.plugins.push(new DashboardPlugin());
            config.plugins.push(new ProgressBarPlugin());
        }
        // BUILD ONLY
        if (env === 'production') {
            config = rewireImageminPlugin(config, env, {
                // disable: process.env.NODE_ENV !== 'production',
                // maxFileSize: 10000,
                maxConcurrency: Infinity,
                pngquant: {
                    quality: '95-100',
                    // speed: 11,
                    verbose: true
                },
                jpegtran: {progressive: true},
                svgo: null
            });
            config.plugins.push(new ProgressBarPlugin());
            // config = rewireCompressionPlugin(config, env, {
            //     // Compress generated js files
            //     test: /\.js(\?.*)?$/i,
            //     cache: true
            // });
        }
        // if (config.entry instanceof Array) {
        //     config.entry.splice(0, 0, '@babel/polyfill');
        // }
        // console.log(JSON.stringify(config.entry));
        // console.log('process.env', process.env);
        // return;

        return config;
    },
    // The Jest config to use when running your jest tests - note that the normal rewires do not
    // work here.
    jest: function(config) {
        // ...add your jest config customisation...
        // Example: enable/disable some tests based on environment variables in the .env file.
        if (!config.testPathIgnorePatterns) {
            config.testPathIgnorePatterns = [];
        }
        if (!process.env.RUN_COMPONENT_TESTS) {
            config.testPathIgnorePatterns.push(
                '<rootDir>/src/components/*.test.js'
            );
        }
        // if (!process.env.RUN_REDUCER_TESTS) {
        //     config.testPathIgnorePatterns.push(
        //         '<rootDir>/src/reducers/**/*.test.js'
        //     );
        // }
        config.setupFiles = ['<rootDir>/.jest/register-context.js'];
        // config = injectBabelPlugin('babel-plugin-require-context-hook', config);

        // console.log(JSON.stringify(config));

        // return;
        return config;
    }
};
