import { StatusPageUpdate } from './StatusPageUpdate'

import { CreateStatusPageUpdateInput } from '../interfaces/CreateStatusPageUpdateInput'
import OhDear from '../OhDear'

/**
 * StatusPage resource.
 *
 * @export
 * @class StatusPage
 */
export class StatusPage {
	/**
	 * The OhDear class instance
	 *
	 * @protected
	 * @type {OhDear}
	 * @memberof Site
	 */
	protected ohDear: OhDear
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
	constructor(statusPage: any, ohDear: OhDear) {
		this.ohDear = ohDear
		this.id = statusPage.id
		this.title = statusPage.title
		this.domain = statusPage.domain
		this.slug = statusPage.slug
		this.fullUrl = statusPage.full_url
		this.timezone = statusPage.timezone
		this.summarizedStatus = statusPage.summarized_status
	}

	/**
	 * Retrive all updates of given status page id.
	 *
	 * @returns {Promise<StatusPageUpdate[]>}
	 * @memberof StatusPageUpdate
	 */
	public updates(): Promise<StatusPageUpdate[]> {
		return this.ohDear.StatusPageUpdate.updates(this.id)
	}

	/**
	 * Post a status update.
	 *
	 * @param {CreateStatusPageUpdateInput} data
	 * @returns {Promise<StatusPageUpdate>}
	 * @memberof StatusPageUpdate
	 */
	public postUpdate(data: CreateStatusPageUpdateInput): Promise<StatusPageUpdate> {
		return this.ohDear.StatusPageUpdate.postUpdate(data)
	}

	/**
	 * Delete a status update
	 *
	 * @returns {Promise<void>}
	 * @memberof StatusPageUpdate
	 */
	public deleteUpdate(): Promise<void> {
		return this.ohDear.StatusPageUpdate.deleteUpdate(this.id)
	}
}
