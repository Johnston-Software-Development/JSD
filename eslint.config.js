import globals from 'globals'
import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
			},
			parser: vueParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				parser: typescriptParser, // Parser for <script> tags
				extraFileExtensions: ['.vue'],
			},
		},
		files: ['**/*.{js,ts,vue}'],
		plugins: {
			'@typescript-eslint': typescript,
			vue: vue,
		},
		rules: {
			...js.configs.recommended.rules,
			...vue.configs['vue3-recommended'].rules,
			...typescript.configs.recommended.rules,
		},
	},
]
