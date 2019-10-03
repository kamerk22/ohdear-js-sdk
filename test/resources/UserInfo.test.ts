import OhDear from '../../src/OhDear'
import User from '../../src/resources/User'
import Team from '../../src/resources/Team'
import { userInfoResponse } from '../mock/success'
const nock = require('nock')

describe('Test UserInfo Module', () => {
	it('should return a user', async () => {
		nock('https://ohdear.app')
			.get('/api/me')
			.reply(200, userInfoResponse)

		let user = await new OhDear('asd').UserInfo.me()

		expect(user).toBeInstanceOf(User)
		expect(user.teams[0]).toBeInstanceOf(Team)
	})
})
