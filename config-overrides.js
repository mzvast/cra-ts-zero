/**
 * @file [config-overrides]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2018-03-15 03:28:17
 */
/* eslint-disable */

const path = require('path');

const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const rewireStyledComponents = require('react-app-rewire-styled-components');
module.exports = {
    // The Webpack config to use when compiling your react app for development or production.
    webpack: function(config, env) {
        if (env !== 'production') {
            config = rewireStyledComponents(config, env);
            config.plugins.push(new ProgressBarPlugin());
        }
        // BUILD ONLY
        if (env === 'production') {
            config.plugins.push(new ProgressBarPlugin());
        }

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
