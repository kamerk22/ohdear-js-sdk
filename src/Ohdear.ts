import { ManagesCheckService } from './services/ManagesChecksService'
import { ManagesUptimeService } from './services/ManagesUptimeService'
import { ManagesDowntimeService } from './services/ManagesDowntimeService'
import { ManagesMixedContentService } from './services/ManagesMixedContentService'
import { ManagesBrokenLinksService } from './services/ManagesBrokenLinksService'
import { ManagesSiteService } from './services/ManagesSiteService'
import { ManagesUserService } from './services/ManagesUserService'
import { ManageCertificateHealthService } from './services/ManagesCertificateHealthService'
import { Client } from './Client'

const baseURL: string = 'https://ohdear.app/api/'

export default class OhDear {
	public apiKey: string
	public client: Client
	public UserInfo: ManagesUserService
	public Site: ManagesSiteService
	public Check: ManagesCheckService
	public BrokenLink: ManagesBrokenLinksService
	public MixedContent: ManagesMixedContentService
	public Uptime: ManagesUptimeService
	public Downtime: ManagesDowntimeService
	public CertificateHealth: ManageCertificateHealthService

	constructor(apiKey: string, client?: Client) {
		this.apiKey = apiKey
		this.client = client
			? client
			: new Client({
					baseURL: baseURL,
					headers: {
						Accept: 'application/json',
						Authorization: `Bearer ${this.apiKey}`,
						'Content-Type': 'application/json'
					},
					timeout: 15000
			  })

		this.UserInfo = new ManagesUserService(this)
		this.Site = new ManagesSiteService(this)
		this.Check = new ManagesCheckService(this)
		this.BrokenLink = new ManagesBrokenLinksService(this)
		this.MixedContent = new ManagesMixedContentService(this)
		this.Uptime = new ManagesUptimeService(this)
		this.Downtime = new ManagesDowntimeService(this)
		this.CertificateHealth = new ManageCertificateHealthService(this)
	}
}
