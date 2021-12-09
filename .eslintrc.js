/**
 * @file [.eslintrc]
 * @author [mzvast]
 * @email [mzvast@gmail.com']
 * @create date 2019-04-22 14:24:40
 */
/* eslint-disable max-len,operator-linebreak,space-before-function-paren */
module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
        '@ecomfe/eslint-config/react',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier'
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    plugins: [
        'react',
        'react-hooks',
        'prettier',
        'import',
        'unicorn',
        'folders'
    ],
    rules: {
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true
                },
                ignore: ['UGC', 'PC', 'PDF', 'UA', 'VR', 'VW']
            }
        ],
        'folders/match-regex': [2, '^[a-z0-9-_]+$', '/src/'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['off'],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': ['error'],
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/ban-ts-comment': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'spaced-comment': 'off',
        '@typescript-eslint/ban-types': 'off', // fixme: cannot work if not off
        '@typescript-eslint/member-ordering': 'off',
        'no-console': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        'no-debugger': 'off',
        '@typescript-eslint/prefer-for-of': 'off',
        'init-declarations': 'off',
        'no-constant-condition': 'off',
        '@typescript-eslint/init-declarations': ['off'],
        '@typescript-eslint/no-empty-function': 0,
        'react/display-name': 0,
        'import/order': [
            2,
            {
                'newlines-between': 'always',
                groups: [
                    'builtin',
                    'external',
                    ['internal', 'parent'],
                    'sibling',
                    'index'
                ]
            }
        ]
    },
    settings: {
        react: {
            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

                // use <root>/path/to/folder/tsconfig.json
                project: './tsconfig.json'
            }
        }
    }
};
