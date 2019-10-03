import OhDear from '../../src/OhDear'
import { brokenLinkResponse } from '../mock/success'
import BrokenLink from '../../src/resources/BrokenLink'
const nock = require('nock')

describe('Test BrokenLinks Module', () => {
	it('should return broken link of site', async () => {
		nock('https://ohdear.app')
			.get('/api/broken-links/1')
			.reply(200, brokenLinkResponse)

		let brokenLinks = await new OhDear('Test').BrokenLink.brokenLinks(1)
		brokenLinks.forEach(i => {
			expect(i).toBeInstanceOf(BrokenLink)
		})
	})
})
