import resolve from 'rollup-plugin-node-resolve'
import builtins from 'rollup-plugin-node-builtins'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('./package.json')
const dependencies = Object.keys(pkg.dependencies)

const year = new Date().getFullYear()

function banner(pluginFilename) {
	return `/*!
  *
  * OhDear-js-sdk${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright (c) ${year} ${pkg.author}
  * Licensed under MIT https://github.com/kamerk22/ohdear-js-sdk/blob/master/LICENSE)
  * 
  * 
  */
 
  `
}

const libraryName = 'OhDear'
const globals = {
	axios: 'axios'
}

const commonPlugin = [
	json(),
	typescript({ useTsconfigDeclarationDir: true }),
	babel({
		exclude: 'node_modules/**'
	}),
	commonjs(),
	resolve({ browser: true })
]
const rollupConfig = [
	{
		input: `src/${libraryName}.ts`,
		output: [
			{
				banner,
				file: pkg.browser,
				name: libraryName,
				format: 'iife',
				sourcemap: true,
				globals
			},
			{
				banner,
				file: pkg.main,
				name: libraryName,
				format: 'cjs',
				sourcemap: true,
				globals
			}
		],
		external: dependencies,
		watch: {
			include: 'src/**'
		},
		plugins: [...commonPlugin, sourceMaps(), builtins()]
	},
	{
		input: `src/${libraryName}.ts`,
		output: [
			{
				banner,
				footer: banner,
				file: pkg.browser_min,
				name: `${libraryName}.js`,
				format: 'iife',
				sourcemap: true,
				globals
			}
		],
		external: dependencies,
		watch: {
			include: 'src/**'
		},
		plugins: [...commonPlugin, sourceMaps(), builtins(), uglify()]
	}
]

module.exports = rollupConfig
