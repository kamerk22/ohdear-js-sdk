import { Client } from './Client'

const baseURL: string = 'https://ohdear.app/api/'

export default class OhDear {
	public apiKey: string
	public client: any

	constructor(apiKey: string, client?: Client) {
		console.log(apiKey)
		this.apiKey = apiKey
		this.client = client
			? client
			: new Client({
					baseURL: baseURL,
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer ${this.apiKey}`,
						'Content-Type': 'application/json'
					},
					timeout: 15000
			  })
	}
}
