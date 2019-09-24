import { Client } from './Client'
import { UserManagmentService } from './Services/UserManagmentService'

const baseURL: string = 'https://ohdear.app/api/'

export default class OhDear {
	public apiKey: string
	public client: any
	public UserInfo: UserManagmentService

	constructor(apiKey: string, client?: Client) {
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

		this.UserInfo = new UserManagmentService(this.client)
	}
}
