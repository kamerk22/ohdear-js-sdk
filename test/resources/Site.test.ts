import { BrokenLink } from '../../src/resources/BrokenLink'
import OhDear from '../../src/OhDear'
import {
	allSiteResponse,
	singleSiteResponse,
	addSiteResponse,
	uptimeResponse,
	downtimeResponse,
	brokenLinkResponse,
	mixedContentResponse,
	certificateHealthResponse
} from '../mock/success'
import Site from '../../src/resources/Site'
import { CheckTypeEnum } from '../../src/enums/CheckEnum'
import Uptime from '../../src/resources/Uptime'
import { Downtime } from '../../src/resources/Downtime'
import MixedContent from '../../src/resources/MixedContent'
import CertificateHealth from '../../src/resources/CertificateHealth'
const nock = require('nock')
const client = new OhDear('Test')

describe('Test Site Module', () => {
	it('should return all sites', async () => {
		nock('https://ohdear.app')
			.get('/api/sites')
			.reply(200, allSiteResponse)

		let sites = await client.Site.sites()

		sites.forEach(i => {
			expect(i).toBeInstanceOf(Site)
		})
	})

	it('should return single site', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)
		expect(sites).toBeInstanceOf(Site)
	})

	it('should return single site by url', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/url/https://test.tld')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.siteByUrl('https://test.tld')
		expect(sites).toBeInstanceOf(Site)
	})

	it('should add new site', async () => {
		nock('https://ohdear.app')
			.post('/api/sites')
			.reply(200, addSiteResponse)

		let sites = await client.Site.createSite({
			url: 'https://yourbrandnewsite.tld',
			team_id: 1,
			checks: [CheckTypeEnum.uptime, CheckTypeEnum.mixed_content]
		})
		expect(sites).toBeInstanceOf(Site)
	})

	it('should delete a site', async () => {
		nock('https://ohdear.app')
			.delete('/api/sites/1')
			.reply(200)

		let sites = await client.Site.deleteSite(1)
		expect(sites).toBe('')
	})

	it('should run method broken link on site instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)

		nock('https://ohdear.app')
			.get('/api/broken-links/1')
			.reply(200, brokenLinkResponse)

		let brokenLinks = await sites.brokenLinks()
		brokenLinks.forEach(i => {
			expect(i).toBeInstanceOf(BrokenLink)
		})
	})

	it('should run method mixed content on site instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)

		nock('https://ohdear.app')
			.get('/api/mixed-content/1')
			.reply(200, mixedContentResponse)

		let mixedContent = await sites.mixedContent()
		mixedContent.forEach(i => {
			expect(i).toBeInstanceOf(MixedContent)
		})
	})

	it('should run method delete on site instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)

		nock('https://ohdear.app')
			.delete('/api/sites/1')
			.reply(200)

		let deleteSite = await sites.delete()
		expect(deleteSite).toBe('')
	})

	it('should run method uptime on site instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)

		nock('https://ohdear.app')
			.get(
				'/api/sites/1/uptime?filter[started_at]=20180101000000&filter[ended_at]=20180101235959&split=month'
			)
			.reply(200, uptimeResponse)

		let uptime = await sites.uptime('20180101000000', '20180101235959')
		uptime.forEach(i => {
			expect(i).toBeInstanceOf(Uptime)
		})

		nock('https://ohdear.app')
			.get(
				'/api/sites/1/uptime?filter[started_at]=20180101000000&filter[ended_at]=20180101235959&split=day'
			)
			.reply(200, uptimeResponse)

		let uptimeDay = await sites.uptime('20180101000000', '20180101235959', 'day')
		uptimeDay.forEach(i => {
			expect(i).toBeInstanceOf(Uptime)
		})
	})

	it('should run method downtime on site instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)

		nock('https://ohdear.app')
			.get(
				'/api/sites/1/downtime?filter[started_at]=20180101150000&filter[ended_at]=20180101160000'
			)
			.reply(200, downtimeResponse)

		let downtime = await sites.downtime('20180101150000', '20180101160000')
		downtime.forEach(i => {
			expect(i).toBeInstanceOf(Downtime)
		})
	})

	it('should run method certificate health site instance', async () => {
		nock('https://ohdear.app')
			.get('/api/sites/1')
			.reply(200, singleSiteResponse)

		let sites = await client.Site.site(1)
		nock('https://ohdear.app')
			.get('/api/certificate-health/1')
			.reply(200, certificateHealthResponse)

		let certificateHealth = await sites.certificateHealth()
		expect(certificateHealth).toBeInstanceOf(CertificateHealth)
	})
})
