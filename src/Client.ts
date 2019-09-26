// https://github.com/brybrophy/axios-core-api/blob/master/index.ts

import axios, { AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

export interface IObject {
	[key: string]: string | number
}

export interface FObject {
	[key: string]: string
}

export class Client {
	private _apiConfig: AxiosRequestConfig
	private _AXIOS: AxiosInstance

	constructor(apiConfig: AxiosRequestConfig) {
		this._apiConfig = apiConfig
		this._AXIOS = this._generateAxiosInstance(this._apiConfig)
	}

	public async delete(url: string): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.delete(url)

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	public async get(url: string, params?: IObject): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.get(url, { params })

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	public async post(url: string, data: IObject): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.post(url, data)

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	public async put(url: string, data: IObject): Promise<AxiosResponse['data']> {
		try {
			const res = await this._AXIOS.put(url, data)

			return res.data
		} catch (error) {
			return this._errorhandler(error)
		}
	}

	private _generateAxiosInstance(apiConfig: AxiosRequestConfig): AxiosInstance {
		return axios.create(apiConfig)
	}

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

// for tests
export const axiosInstance = axios
export default Client
