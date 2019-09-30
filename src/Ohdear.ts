import { ManagesCheckService } from './services/ManagesChecksService'
import { ManagesUptimeService } from './services/ManagesUptimeService'
import { ManagesDowntimeService } from './services/ManagesDowntimeService'
import { ManagesMixedContentService } from './services/ManagesMixedContentService'
import { ManagesBrokenLinksService } from './services/ManagesBrokenLinksService'
import { ManagesSiteService } from './services/ManagesSiteService'
import { ManagesUserService } from './services/ManagesUserService'
import { ManageCertificateHealthService } from './services/ManagesCertificateHealthService'
import { Client } from './Client'
import { ManagesStatusPageService } from './services/ManagesStatusPageService'

const baseURL: string = 'https://ohdear.app/api/'

/**
 * OhDear SDK
 *
 * @export
 * @class OhDear
 */
export class OhDear {
	/**
	 * An api token generated from https://ohdear.app/user-settings/api
	 *
	 * @type {string}
	 * @memberof OhDear
	 */
	public apiKey: string
	/**
	 * An Axios client
	 *
	 * @type {Client}
	 * @memberof OhDear
	 */
	public client: Client
	/**
	 * UserInfo resource.
	 *
	 * @type {ManagesUserService}
	 * @memberof OhDear
	 */
	public UserInfo: ManagesUserService
	/**
	 * Site resource.
	 *
	 * @type {ManagesSiteService}
	 * @memberof OhDear
	 */
	public Site: ManagesSiteService
	/**
	 * Check resource.
	 *
	 * @type {ManagesCheckService}
	 * @memberof OhDear
	 */
	public Check: ManagesCheckService
	/**
	 * BrokenLink resource.
	 *
	 * @type {ManagesBrokenLinksService}
	 * @memberof OhDear
	 */
	public BrokenLink: ManagesBrokenLinksService
	/**
	 * MixedContent resource.
	 *
	 * @type {ManagesMixedContentService}
	 * @memberof OhDear
	 */
	public MixedContent: ManagesMixedContentService
	/**
	 * Uptime resource.
	 *
	 * @type {ManagesUptimeService}
	 * @memberof OhDear
	 */
	public Uptime: ManagesUptimeService
	/**
	 * Downtime resource
	 *
	 * @type {ManagesDowntimeService}
	 * @memberof OhDear
	 */
	public Downtime: ManagesDowntimeService
	/**
	 * CertificateHealth resource.
	 *
	 * @type {ManageCertificateHealthService}
	 * @memberof OhDear
	 */
	public CertificateHealth: ManageCertificateHealthService
	/**
	 * StatusPage resource.
	 *
	 * @type {ManagesStatusPageService}
	 * @memberof OhDear
	 */
	public StatusPage: ManagesStatusPageService

	/**
	 * Creates an instance of OhDear.
	 *
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

		this.UserInfo = new ManagesUserService(this)
		this.Site = new ManagesSiteService(this)
		this.Check = new ManagesCheckService(this)
		this.BrokenLink = new ManagesBrokenLinksService(this)
		this.MixedContent = new ManagesMixedContentService(this)
		this.Uptime = new ManagesUptimeService(this)
		this.Downtime = new ManagesDowntimeService(this)
		this.CertificateHealth = new ManageCertificateHealthService(this)
		this.StatusPage = new ManagesStatusPageService(this.client)
	}
}

export default OhDear
