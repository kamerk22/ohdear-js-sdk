// https://github.com/brybrophy/axios-core-api/blob/master/index.ts

import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

/**
 * Input object interface
 *
 * @export
 * @interface IObject
 */
export interface IObject {
	[key: string]: string | number
}

/**
 * Axios client for calling API.
 *
 * @export
 * @class Client
 */
export class Client {
	/**
	 * Axios request config.
	 *
	 * @private
	 * @type {AxiosRequestConfig}
	 * @memberof Client
	 */
	private _apiConfig: AxiosRequestConfig
	/**
	 * Axios instance.
	 *
	 * @private
	 * @type {AxiosInstance}
	 * @memberof Client
	 */
	private _AXIOS: AxiosInstance

	/**
	 * Creates an instance of Client.
	 *
	 * @param {AxiosRequestConfig} apiConfig
	 * @memberof Client
	 */
	constructor(apiConfig: AxiosRequestConfig) {
		this._apiConfig = apiConfig
		this._AXIOS = this._generateAxiosInstance(this._apiConfig)
	}

	/**
	 * DELETE request.
	 *
	 * @param {string} url
	 * @returns {Promise<AxiosResponse['data']>}
	 * @memberof Client
	 */
	public async delete(url: string): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.delete(url)

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	/**
	 * GET request.
	 *
	 * @param {string} url
	 * @param {IObject} [params]
	 * @returns {Promise<AxiosResponse['data']>}
	 * @memberof Client
	 */
	public async get(url: string, params?: IObject): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.get(url, { params })

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	/**
	 * POST request.
	 *
	 * @param {string} url
	 * @param {IObject} data
	 * @returns {Promise<AxiosResponse['data']>}
	 * @memberof Client
	 */
	public async post(url: string, data: IObject): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.post(url, data)

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	/**
	 * PUT request.
	 *
	 * @param {string} url
	 * @param {IObject} data
	 * @returns {Promise<AxiosResponse['data']>}
	 * @memberof Client
	 */
	public async put(url: string, data: IObject): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.put(url, data)

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	/**
	 * Generate Axios instance.
	 *
	 * @private
	 * @param {AxiosRequestConfig} apiConfig
	 * @returns {AxiosInstance}
	 * @memberof Client
	 */
	private _generateAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
		return axios.create(apiConfig)
	}

	/**
	 * Handle errors while making request.
	 *
	 * @private
	 * @param {AxiosError} error
	 * @returns {void}
	 * @memberof Client
	 */
	private _errorhandler(error: AxiosError): void {
		if (error.response) {
			console.error(error.response.data)
			console.error(error.response.status)
			console.error(error.response.headers)
		} else if (error.request) {
			console.error(error.request)
		} else {
			console.error('Api Core Error', error.message)
		}

		return console.error(error.config)
	}
}

export default Client
