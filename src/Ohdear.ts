import { Client } from './Client'
import { ManagesUserService } from './services/ManagesUserService'
import { ManagesSiteService } from './services/ManagesSiteService'
import { ManagesCheckService } from './services/ManagesChecksService'
import { ManagesUptimeService } from './services/ManagesUptimeService'
import { ManagesDowntimeService } from './services/ManagesDowntimeService'
import { ManagesBrokenLinksService } from './services/ManagesBrokenLinksService'
import { ManagesMixedContentService } from './services/ManagesMixedContentService'
import { ManageCertificateHealthService } from './services/ManagesCertificateHealthService'
import { ManagesStatusPageService } from './services/ManagesStatusPageService'

const baseURL: string = 'https://ohdear.app/api/'

/**
 * OhDear Class
 *
 * @export
 * @class OhDear
 */
export default class OhDear {
	/**
	 * Api token from ohdear.app
	 *
	 * @type {string}
	 * @memberof OhDear
	 */
	public apiKey: string
	/**
	 * Axios client.
	 *
	 * @type {*}
	 * @memberof OhDear
	 */
	public client: any
	public Site: ManagesSiteService
	public Check: ManagesCheckService
	public Uptime: ManagesUptimeService
	public Downtime: ManagesDowntimeService
	public BrokenLink: ManagesBrokenLinksService
	public MixedContent: ManagesMixedContentService
	public CertificateHealth: ManageCertificateHealthService
	public UserInfo: ManagesUserService
	public StatusPage: ManagesStatusPageService

	/**
	 *Creates an instance of OhDear.
	 * @param {string} apiKey
	 * @param {Client} [client]
	 * @memberof OhDear
	 */
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

		this.Site = new ManagesSiteService(this.client)
		this.Check = new ManagesCheckService(this.client)
		this.Uptime = new ManagesUptimeService(this.client)
		this.Downtime = new ManagesDowntimeService(this.client)
		this.BrokenLink = new ManagesBrokenLinksService(this.client)
		this.MixedContent = new ManagesMixedContentService(this.client)
		this.CertificateHealth = new ManageCertificateHealthService(this.client)
		this.UserInfo = new ManagesUserService(this.client)
		this.StatusPage = new ManagesStatusPageService(this.client)
	}
}
