import OhDear from '../../src/OhDear'
import { downtimeResponse } from '../mock/success'
import { Downtime } from '../../src/resources/Downtime'
const nock = require('nock')

describe('Test Downtime Module', () => {
	it('should return downtime of site', async () => {
		nock('https://ohdear.app')
			.get(
				'/api/sites/1/downtime?filter[started_at]=20180101150000&filter[ended_at]=20180101160000'
			)
			.reply(200, downtimeResponse)

		let downtime = await new OhDear('Test').Downtime.downtime(1, '20180101150000', '20180101160000')
		downtime.forEach(i => {
			expect(i).toBeInstanceOf(Downtime)
		})
	})
})
