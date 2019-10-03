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

const year = new Date().getFullYear()

function getBanner(pluginFilename) {
	return `/*!
  * OhDear-js-sdk${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2019-${year} ${pkg.author}
  * Licensed under MIT https://github.com/kamerk22/ohdear-js-sdk/blob/master/LICENSE)
  */`
}

const BUNDLE = process.env.BUNDLE === 'true'
const ESM = process.env.ESM === 'true'

const libraryName = 'OhDear'

const globals = {
	axios: 'axios'
}

const commonPlugin = [
	// Allow json resolution
	json(),
	// Compile TypeScript files
	typescript({ useTsconfigDeclarationDir: true }),
	// Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
	// commonjs(),
	// Allow node_modules resolution, so you can use 'external' to control
	// which external modules to include in the bundle
	// https://github.com/rollup/rollup-plugin-node-resolve#usage
	resolve({ browser: true }),

	// Resolve source maps to the original source
	sourceMaps()
]

let fileDest = `${libraryName}${ESM ? '.esm' : ''}`

if (BUNDLE) {
	fileDest += '.bundle'
	// Remove last entry in external array to bundle Popper
	dependencies.pop()
	delete globals['axios']
}

const rollupConfig = {
	input: `src/${libraryName}.ts`,
	output: {
		getBanner,
		file: pkg.main,
		name: camelCase(libraryName),
		format: ESM ? 'esm' : 'umd',
		sourcemap: true,
		exports: 'named',
		globals
	},
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

if (!ESM) {
	rollupConfig.output.name = libraryName
}
module.exports = rollupConfig
