import { Client } from '../Client'
import OhDear from '../OhDear'

/**
 * Base ApiService.
 *
 * @export
 * @class ApiService
 */
export class ApiService {
	/**
	 * The axios client.
	 *
	 * @type {Client}
	 * @memberof ApiService
	 */
	public client: Client
	/**
	 * The OhDear client.
	 *
	 * @type {OhDear}
	 * @memberof ApiService
	 */
	public ohDear: OhDear

	/**
	 * Creates an instance of ApiService.
	 *
	 * @param {OhDear} ohDear
	 * @memberof ApiService
	 */
	constructor(ohDear: OhDear) {
		this.client = ohDear.client
		this.ohDear = ohDear
	}
}
