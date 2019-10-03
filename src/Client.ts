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
		// Error 😨
		if (error.response) {
			/*
			 * The request was made and the server responded with a
			 * status code that falls out of the range of 2xx
			 */
			if (error.response.status === 422 || error.response.status === 400) {
				throw new Error(error.response.data)
			}
			if (error.response.status === 404) {
				throw new Error('The resource you are looking for could not be found.')
			}
		} else if (error.request) {
			/*
			 * The request was made but no response was received, `error.request`
			 * is an instance of XMLHttpRequest in the browser and an instance
			 * of http.ClientRequest in Node.js
			 */
			throw new Error(error.request)
		} else {
			// Something happened in setting up the request and triggered an Error
			throw new Error(error.message)
		}
	}
}

export default Client
