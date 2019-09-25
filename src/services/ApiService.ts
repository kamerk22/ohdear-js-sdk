import { Client } from '../Client'
import OhDear from '../OhDear'

export class ApiService {
	public client: Client
	public ohDear: OhDear

	constructor(ohDear: OhDear) {
		this.client = ohDear.client
		this.ohDear = ohDear
	}
}
