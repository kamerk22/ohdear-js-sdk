import { User } from '../resources/User'
import { ApiService } from './ApiService'

export class ManageUserService extends ApiService {
	static PATH: string = 'sites'
	public async me(): Promise<User | undefined> {
		try {
			const res = await this.client.get(ManageUserService.PATH)
			return new User(res)
		} catch (error) {
			console.log(error)
		}
	}
}
