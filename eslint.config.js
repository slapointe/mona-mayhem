import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['dist/**', '.astro/**'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,astro}'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					caughtErrors: 'all',
				},
			],
		},
	},
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/semi': ['error', 'always'],
		},
	},
	{
		files: ['docs/theme-toggle.js'],
		languageOptions: {
			globals: {
				document: 'readonly',
				localStorage: 'readonly',
				window: 'readonly',
			},
		},
	},
);
