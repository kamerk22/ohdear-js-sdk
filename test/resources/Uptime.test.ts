import OhDear from '../../src/OhDear'
import { uptimeResponse } from '../mock/success'
import Uptime from '../../src/resources/Uptime'
const nock = require('nock')

describe('Test Uptime Module', () => {
	it('should return uptime of site', async () => {
		nock('https://ohdear.app')
			.get(
				'/api/sites/1/uptime?filter[started_at]=20180101000000&filter[ended_at]=20180101235959&split=month'
			)
			.reply(200, uptimeResponse)

		let uptime = await new OhDear('Test').Uptime.uptime(1, '20180101000000', '20180101235959')
		uptime.forEach(i => {
			expect(i).toBeInstanceOf(Uptime)
		})
	})
})
