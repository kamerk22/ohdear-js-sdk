import { Client } from '../Client'
import OhDear from '../OhDear'

/**
 * Base Api Service
 *
 * @export
 * @class ApiService
 */
export class ApiService {
	/**
	 * Axios cleint
	 *
	 * @type {Client}
	 * @memberof ApiService
	 */
	public client: Client
	/**
	 * OhDear class instance
	 *
	 * @type {OhDear}
	 * @memberof ApiService
	 */
	public ohDear: OhDear

	/**
	 *Creates an instance of ApiService.
	 * @param {OhDear} ohDear
	 * @memberof ApiService
	 */
	constructor(ohDear: OhDear) {
		this.client = ohDear.client
		this.ohDear = ohDear
	}
}
