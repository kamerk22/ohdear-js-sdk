import { Check } from './../../src/resources/Check'
import {
	checkEnableResponse,
	checkDisableResponse,
	singleCheckResponse,
	singleSiteResponse
} from './../mock/success'
import OhDear from '../../src/OhDear'
const nock = require('nock')
const client = new OhDear('Test')

describe('Test Check Module', () => {
	it('should enable check', async () => {
		nock('https://ohdear.app')
			.post('/api/checks/1/enable')
			.reply(200, checkEnableResponse)

		let check = await client.Check.enableCheck(1)
		expect(check).toBeInstanceOf(Check)
		expect(check.enabled).toBe(true)
	})

	it('should disable check', async () => {
		nock('https://ohdear.app')
			.post('/api/checks/1/disable')
			.reply(200, checkDisableResponse)

		let check = await client.Check.disableCheck(1)
		expect(check).toBeInstanceOf(Check)
		expect(check.enabled).toBe(false)
	})

	it('should request to re-run check', async () => {
		nock('https://ohdear.app')
			.post('/api/checks/1/request-run')
			.reply(200, singleCheckResponse)

		let check = await client.Check.requestRun(1)
		expect(check).toBeInstanceOf(Check)
	})

	it('should run enable method on checks instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		nock('https://ohdear.app')
			.post('/api/checks/100/enable')
			.reply(200, checkEnableResponse)

		let sites = await client.Site.site(1)
		let check = await sites.checks[0].enable()
		expect(check).toBeInstanceOf(Check)
		expect(check.enabled).toBe(true)
	})

	it('should run disable method on checks instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

			.post('/api/checks/100/disable')
			.reply(200, checkDisableResponse)

		let sites = await client.Site.site(1)
		let check = await sites.checks[0].disable()
		expect(check).toBeInstanceOf(Check)
		expect(check.enabled).toBe(false)
	})

	it('should request rerun method on checks instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		nock('https://ohdear.app')
			.post('/api/checks/100/request-run')
			.reply(200, singleCheckResponse)

		let sites = await client.Site.site(1)
		let check = await sites.checks[0].requestRun()

		expect(check).toBeInstanceOf(Check)
	})
})
