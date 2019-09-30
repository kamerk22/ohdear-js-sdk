import { User } from '../resources/User'
import { ApiService } from './ApiService'

/**
 * Manages user services.
 *
 * @export
 * @class ManagesUserService
 * @extends {ApiService}
 */
export class ManagesUserService extends ApiService {
	/**
	 * Get all information of current user.
	 *
	 * @returns {Promise<User>}
	 * @memberof ManagesUserService
	 */
	public async me(): Promise<User> {
		const res = await this.client.get('me')
		return new User(res)
	}
}
