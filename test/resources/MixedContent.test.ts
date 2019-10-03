import OhDear from '../../src/OhDear'
import { mixedContentResponse } from '../mock/success'
import MixedContent from '../../src/resources/MixedContent'
const nock = require('nock')

describe('Test MixedContent Module', () => {
	it('should return mixed content of site', async () => {
		nock('https://ohdear.app')
			.get('/api/mixed-content/1')
			.reply(200, mixedContentResponse)

		let mixedContent = await new OhDear('Test').MixedContent.mixedContent(1)
		mixedContent.forEach(i => {
			expect(i).toBeInstanceOf(MixedContent)
		})
	})
})
