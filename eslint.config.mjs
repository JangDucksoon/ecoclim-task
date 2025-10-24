import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,

    {
        plugins: {
            import: importPlugin
        },
        rules: {
            'prettier/prettier': 'error',

            semi: ['error', 'always'],

            'import/order': [
                'error',
                {
                    'newlines-between': 'always'
                }
            ]
        },
        parserOptions: {
            project: './tsconfig.json'
        }
    },

    prettierConfig,

    //ignore
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'tailwind.config.js', 'src/components/ui/**'])
]);

export default eslintConfig;
