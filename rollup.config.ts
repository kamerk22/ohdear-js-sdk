import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

const pkg = require('./package.json')
const dependencies = Object.keys(pkg.dependencies)

const libraryName = 'OhDear'

const commonPlugin = [
	// Allow json resolution
	json(),
	// Compile TypeScript files
	typescript({ useTsconfigDeclarationDir: true }),
	// Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
	commonjs(),
	// Allow node_modules resolution, so you can use 'external' to control
	// which external modules to include in the bundle
	// https://github.com/rollup/rollup-plugin-node-resolve#usage
	resolve(),

	// Resolve source maps to the original source
	sourceMaps()
]

export default [
	// {
	// 	input: `src/${libraryName}.ts`,
	// 	output: {
	// 		file: pkg.browser,
	// 		name: camelCase(libraryName),
	// 		format: 'umd',
	// 		sourcemap: true,
	// 		globals: {
	// 			axios: 'axios'
	// 		}
	// 	},

	// 	// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
	// 	external: ['axios', 'fom-data'],
	// 	watch: {
	// 		include: 'src/**'
	// 	},
	// 	plugins: [
	// 		...commonPlugin,
	// 		babel({
	// 			exclude: 'node_modules/**'
	// 		})
	// 	]
	// },
	// {
	// 	input: `src/${libraryName}.ts`,
	// 	output: {
	// 		file: pkg.browser.replace(/\.js$/, '.min.js'),
	// 		name: camelCase(libraryName),
	// 		format: 'umd',
	// 		sourcemap: true,
	// 		globals: {
	// 			axios: 'axios'
	// 		}
	// 	},

	// 	// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
	// 	external: ['axios', 'fom-data'],
	// 	watch: {
	// 		include: 'src/**'
	// 	},
	// 	plugins: [
	// 		...commonPlugin,
	// 		babel({
	// 			exclude: 'node_modules/**'
	// 		}),
	// 		terser()
	// 	]
	// },
	// {
	// 	input: `src/${libraryName}.ts`,
	// 	output: { file: pkg.module, format: 'es', sourcemap: true },
	// 	// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
	// 	external: ['axios', 'fom-data'],
	// 	watch: {
	// 		include: 'src/**'
	// 	},
	// 	plugins: [
	// 		...commonPlugin,
	// 		babel({
	// 			exclude: 'node_modules/**'
	// 		})
	// 	]
	// },
	{
		input: `src/${libraryName}.ts`,
		output: { file: pkg.main, name: camelCase(libraryName), format: 'cjs', sourcemap: true },
		// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
		external: dependencies,
		watch: {
			include: 'src/**'
		},
		plugins: [
			// Allow json resolution
			...commonPlugin,
			babel({
				exclude: 'node_modules/**',
				babelrc: false,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							useBuiltIns: 'usage',
							targets: 'maintained node versions'
						}
					]
				]
			})
		]
	}
]
