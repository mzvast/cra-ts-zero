const overrideFunc = require('../config-overrides').webpack;
module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/preset-create-react-app',
            options: {
                craOverrides: {
                    fileLoaderExcludes: ['less']
                }
            }
        }
    ],
    // https://stackoverflow.com/questions/58186680/how-disable-eslint-loader-of-storybooks-webpack
    webpackFinal: config => {
        config = overrideFunc(config);
        // absolute import
        config.resolve.modules.push(process.cwd() + '/src');

        return {
            ...config,
            plugins: config.plugins.filter(plugin => {
                if (plugin.constructor.name === 'ESLintWebpackPlugin') {
                    return false;
                }
                return true;
            })
        };
    }
};
