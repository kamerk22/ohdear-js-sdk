import { Client } from '../Client'

export class ApiService {
	public client: Client

	constructor(client: Client) {
		this.client = client
	}
}
