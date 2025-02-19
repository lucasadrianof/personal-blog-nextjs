import eslint from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import importPlugin from 'eslint-plugin-import'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindcss from 'eslint-plugin-tailwindcss'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint from 'typescript-eslint'

const ignores = resolveIgnoresFromGitignore()

export default tseslint.config(
  { ignores },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  neostandard(),
  importPlugin.flatConfigs.recommended,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  tailwindcss.configs['flat/recommended'],
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-relative-packages': 'error',

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { prefix: '@', rootDir: 'src' },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
    },
  }
)
