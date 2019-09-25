import { ManageUptimeService } from './Services/ManageUptimeService'
import { ManageDowntimeService } from './Services/ManageDowntimeService'
import { ManagesMixedContentService } from './Services/ManageMixedContentService'
import { ManagesBrokenLinksService } from './Services/ManageBrokenLinksService'
import { ManageSiteService } from './Services/ManageSiteService'
import { ManageUserService } from './Services/ManageUserService'
import { ManageCertificateHealthService } from './Services/ManageCertificateHealthService'
import { Client } from './Client'

const baseURL: string = 'https://ohdear.app/api/'

export default class OhDear {
	public apiKey: string
	public client: Client
	public UserInfo: ManageUserService
	public Site: ManageSiteService
	public BrokenLink: ManagesBrokenLinksService
	public MixedContent: ManagesMixedContentService
	public Uptime: ManageUptimeService
	public Downtime: ManageDowntimeService
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

		this.UserInfo = new ManageUserService(this)
		this.Site = new ManageSiteService(this)
		this.BrokenLink = new ManagesBrokenLinksService(this)
		this.MixedContent = new ManagesMixedContentService(this)
		this.Uptime = new ManageUptimeService(this)
		this.Downtime = new ManageDowntimeService(this)
		this.CertificateHealth = new ManageCertificateHealthService(this)
	}
}
