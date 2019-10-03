import OhDear from '../../src/OhDear'
import { addStatusPageUpdateResponse, statusPageUpdateResponse } from '../mock/success'
import { StatusPageSeverity } from '../../src/enums/StatusPageEnum'
import { StatusPageUpdate } from '../../src/resources/StatusPageUpdate'
const nock = require('nock')
const client = new OhDear('Test')

describe('Test Status Page Update Module', () => {
	it('should return all status page updates', async () => {
		nock('https://ohdear.app')
			.get('/api/status-pages/1/updates')
			.reply(200, statusPageUpdateResponse)

		let statusPage = await client.StatusPageUpdate.updates(1)
		statusPage.forEach(i => {
			expect(i).toBeInstanceOf(StatusPageUpdate)
		})
	})

	it('should updates of given status page', async () => {
		nock('https://ohdear.app')
			.post('/api/status-page-updates')
			.reply(200, addStatusPageUpdateResponse)

		let statusPageUpdate = await client.StatusPageUpdate.postUpdate({
			status_page_id: 1,
			title: 'Our site is down',
			text: 'We are working on it!',
			severity: StatusPageSeverity.high,
			time: '2019-09-16 10:24',
			pinned: true
		})
		expect(statusPageUpdate).toBeInstanceOf(StatusPageUpdate)
	})

	it('should delete update on status page', async () => {
		nock('https://ohdear.app')
			.delete('/api/status-page-updates/1')
			.reply(204)

		let statusPage = await client.StatusPageUpdate.deleteUpdate(1)
		expect(statusPage).toBe('')
	})
})
