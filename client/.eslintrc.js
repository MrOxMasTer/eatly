module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: '*/client/tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'react',
        'prettier',
        'import',
    ],
    settings: {
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    extends: [
        'next/core-web-vitals',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:tailwindcss/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'prettier',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
        browser: true,
        es2021: true,
    },
    ignorePatterns: [
        '*.config.ts',
        '*.config.js',
        'public/*',
        'build/*',
        'node_modules/*',
    ],
    rules: {
        //
        'jsx-a11y/no-distracting-elements': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'tailwindcss/no-custom-classname': 0,
        'no-duplicate-imports': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        '@typescript-eslint/no-unused-vars': 'off', // "no-unused-vars": "off",
        // "unused-imports/no-unused-imports": "error",
        // "unused-imports/no-unused-vars": [
        //     "warn",
        //     {
        //         "vars": "all",
        //         "varsIgnorePattern": "^_",
        //         "args": "after-used",
        //         "argsIgnorePattern": "^_"
        //     }
        // ],
        'array-callback-return': 0,
        'jsx-a11y/alt-text': 1,
        'react/jsx-props-no-spreading': 0,
        strict: ['warn', 'safe'],
        'no-nested-ternary': 0,
        'arrow-body-style': ['warn', 'as-needed'],
        // Не содержит фигурные скобки вокруг тела функции там, где можно их опустить
        'no-param-reassign': 0,
        'no-unused-vars': ['warn'],
        'spaced-comment': ['warn'],
        //! импорты
        'import/no-duplicates': ['error', { 'prefer-inline': true }],
        'import/no-named-as-default': ['warn'],
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        // "import/prefer-default-export": [
        //     "warn",
        //     {
        //         "target": "single"
        //     }
        // ],
        // Сортировка импорта и свойств
        'import/order': [
            'warn',
            {
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        //!react
        'react/require-default-props': [
            1,
            {
                functions: 'defaultArguments',
            },
        ],
        //"react/react-in-jsx-scope": 0,
        // Писать import React или нет
        'react/function-component-definition': 0,
        // в виде какой функции будут компоненты react
        'react/state-in-constructor': ['warn', 'never'],
        // Писать state строго в конструкторе или нет
        'react/prop-types': ['warn'],
        'react/destructuring-assignment': [
            'warn',
            'always',
            {
                destructureInSignature: 'always',
            },
        ],
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        //! prettier
        // Автоматически устанавливает отступы между переменными например и return
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
    },
};
