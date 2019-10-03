import { StatusPageUpdate } from './../../src/resources/StatusPageUpdate'
import OhDear from '../../src/OhDear'
import {
	statusPageResponse,
	statusPageUpdateResponse,
	addStatusPageUpdateResponse
} from '../mock/success'
import { StatusPage } from '../../src/resources/StatusPage'
import { StatusPageSeverity } from '../../src/enums/StatusPageEnum'
const nock = require('nock')
const client = new OhDear('Test')

describe('Test Status Page Module', () => {
	it('should return all status page', async () => {
		nock('https://ohdear.app')
			.get('/api/status-pages')
			.reply(200, statusPageResponse)

		let statusPage = await client.StatusPage.statusPages()
		statusPage.forEach(i => {
			expect(i).toBeInstanceOf(StatusPage)
		})
	})

	it('should return single status page', async () => {
		nock('https://ohdear.app')
			.get('/api/status-pages/1')
			.reply(200, statusPageResponse.data[0])

		let statusPage = await client.StatusPage.statusPage(1)
		expect(statusPage).toBeInstanceOf(StatusPage)
	})

	it('should delete single status page', async () => {
		nock('https://ohdear.app')
			.delete('/api/status-pages/1')
			.reply(204)

		let statusPage = await client.StatusPage.deleteStatusPage(1)
		expect(statusPage).toBe('')
	})

	it('should run method updates on StatusPage instance', async () => {
		nock('https://ohdear.app')
			.get('/api/status-pages')
			.reply(200, statusPageResponse)

		let statusPage = await client.StatusPage.statusPages()

		nock('https://ohdear.app')
			.get('/api/status-pages/1/updates')
			.reply(200, statusPageUpdateResponse)

		let statusUpdate = await statusPage[0].updates()
		statusUpdate.forEach(i => {
			expect(i).toBeInstanceOf(StatusPageUpdate)
		})
	})

	it('should run method post update on StatusPage instance', async () => {
		nock('https://ohdear.app')
			.get('/api/status-pages')
			.reply(200, statusPageResponse)

		let statusPage = await client.StatusPage.statusPages()

		nock('https://ohdear.app')
			.post('/api/status-page-updates')
			.reply(200, addStatusPageUpdateResponse)

		let statusPageUpdate = await statusPage[0].postUpdate({
			status_page_id: 1,
			title: 'Our site is down',
			text: 'We are working on it!',
			severity: StatusPageSeverity.high,
			time: '2019-09-16 10:24',
			pinned: true
		})

		expect(statusPageUpdate).toBeInstanceOf(StatusPageUpdate)
	})

	it('should run method delete update on StatusPage instance', async () => {
		nock('https://ohdear.app')
			.get('/api/status-pages')
			.reply(200, statusPageResponse)

		let statusPage = await client.StatusPage.statusPages()

		nock('https://ohdear.app')
			.delete('/api/status-page-updates/1')
			.reply(204)

		let statusPageUpdate = await statusPage[0].deleteUpdate()
		expect(statusPageUpdate).toBe('')
	})
})
