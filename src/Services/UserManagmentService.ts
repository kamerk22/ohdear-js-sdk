import { User } from '../resources/User'
import { ApiService } from './ApiService'

export class UserManagmentService extends ApiService {
	public async me(): Promise<User | undefined> {
		try {
			const res = await this.client.get('me')
			return new User(res)
		} catch (error) {
			console.log(error)
		}
	}
}
