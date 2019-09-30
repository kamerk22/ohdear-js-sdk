/**
 * StatusPage resource.
 *
 * @export
 * @class StatusPage
 */
export class StatusPage {
	/**
	 * The id of the status page.
	 *
	 * @type {number}
	 * @memberof StatusPage
	 */
	public id: number
	/**
	 * The title of status page.
	 *
	 * @type {string}
	 * @memberof StatusPage
	 */
	public title: string
	/**
	 * The domain of status page.
	 *
	 * @type {string}
	 * @memberof StatusPage
	 */
	public domain: string
	/**
	 * The slug of status page.
	 *
	 * @type {string}
	 * @memberof StatusPage
	 */
	public slug: string
	/**
	 * The full url of status page.
	 *
	 * @type {string}
	 * @memberof StatusPage
	 */
	public fullUrl: string
	/**
	 * The timezone of status page.
	 *
	 * @type {string}
	 * @memberof StatusPage
	 */
	public timezone: string
	/**
	 * The summarized status of status page.
	 *
	 * @type {string}
	 * @memberof StatusPage
	 */
	public summarizedStatus: string

	/**
	 * Creates an instance of StatusPage.
	 *
	 * @param {*} statusPage
	 * @memberof StatusPage
	 */
	constructor(statusPage: any) {
		this.id = statusPage.id
		this.title = statusPage.title
		this.domain = statusPage.domain
		this.slug = statusPage.slug
		this.fullUrl = statusPage.full_url
		this.timezone = statusPage.timezone
		this.summarizedStatus = statusPage.summarized_status
	}
}
