import { User } from '../resources/User'
import { ApiService } from './ApiService'

export class ManagesUserService extends ApiService {
	static PATH: string = 'sites'
	public async me(): Promise<User> {
		const res = await this.client.get(ManagesUserService.PATH)
		return new User(res)
	}
}

export default ManagesUserService
