module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: [
    'node_modules/*',
    'public/mockServiceWorker.js',
    'generators/*',
  ],
  extends: ['eslint:recommended', 'next/core-web-vitals'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
        'import/resolver': {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
      ],
      rules: {
        '@next/next/no-img-element': 'off',
        'import/no-restricted-paths': [
          'error',
          {
            zones: [
              // disables cross-feature imports:
              // eg. src/features/auth should not import from src/features/customize-shirt, etc.
              {
                target: './src/features/auth',
                from: './src/features',
                except: ['./auth'],
              },
              {
                target: './src/features/customize-shirt',
                from: './src/features',
                except: ['./customize-shirt'],
              },
              {
                target: './src/features/users',
                from: './src/features',
                except: ['./users'],
              },
              // enforce unidirectional codebase:

              // e.g. src/app can import from src/features but not the other way around
              {
                target: './src/features',
                from: './src/app',
              },

              // e.g src/features and src/app can import from these shared modules but not the other way around
              {
                target: [
                  './src/components',
                  './src/hooks',
                  './src/lib',
                  './src/types',
                  './src/utils',
                ],
                from: ['./src/features', './src/app'],
              },
            ],
          },
        ],
        'import/no-cycle': 'error',
        'linebreak-style': 'off',
        'react/prop-types': 'off',
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
            ],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        'prettier/prettier': ['warn', { endOfLine: 'auto' }],
      },
    },
    {
      plugins: ['check-file'],
      files: ['src/**/*'],
      rules: {
        'check-file/filename-naming-convention': [
          'error',
          {
            '**/*.{ts,tsx}': 'KEBAB_CASE',
          },
          {
            ignoreMiddleExtensions: true,
          },
        ],
        'check-file/folder-naming-convention': [
          'error',
          {
            '!(src/app)/**/*': 'KEBAB_CASE',
            '!(**/__tests__)/**/*': 'KEBAB_CASE',
          },
        ],
      },
    },
  ],
};
