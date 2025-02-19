import eslint from '@eslint/js'
import pluginNext from '@next/eslint-plugin-next'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindcss from 'eslint-plugin-tailwindcss'
import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import tseslint, { configs as typescriptConfigs } from 'typescript-eslint'

const ignores = resolveIgnoresFromGitignore()

export default tseslint.config(
  { ignores },
  eslint.configs.recommended,
  typescriptConfigs.recommended,
  neostandard({ ts: true }),
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
      '@stylistic/jsx-sort-props': 'error',

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
    }
  }
)
