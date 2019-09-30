import { StatusPageSeverity } from '../enums/StatusPageEnum'
import OhDear from '../OhDear'
import { CreateStatusPageUpdateInput } from '../interfaces/CreateStatusPageUpdateInput'

/**
 * StatusPageUpdate resource.
 *
 * @export
 * @class StatusPageUpdate
 */
export class StatusPageUpdate {
	/**
	 * The OhDear class instance
	 *
	 * @protected
	 * @type {OhDear}
	 * @memberof Site
	 */
	protected ohDear: OhDear
	/**
	 * The id of status page update.
	 *
	 * @type {number}
	 * @memberof StatusPageUpdate
	 */
	public id: number
	/**
	 * The title of status page update.
	 *
	 * @type {string}
	 * @memberof StatusPageUpdate
	 */
	public title: string
	/**
	 * The text of status page update.
	 *
	 * @type {string}
	 * @memberof StatusPageUpdate
	 */
	public text: string
	/**
	 * Whether this status page message should be pinned to the very top of the page
	 *
	 * @type {Boolean}
	 * @memberof StatusPageUpdate
	 */
	public pinned: Boolean
	/**
	 * Serverity of the update.
	 *
	 * @type {StatusPageSeverity}
	 * @memberof StatusPageUpdate eg: informational, warning, high or resolved
	 */
	public severity: StatusPageSeverity
	/**
	 * Date at which the status is posted.
	 *
	 * @type {string}
	 * @memberof StatusPageUpdate
	 */
	public time: string

	/**
	 * Creates an instance of StatusPageUpdate.
	 *
	 * @param {*} statusPageUpdate
	 * @memberof StatusPageUpdate
	 */
	constructor(statusPageUpdate: any, ohDear: OhDear) {
		this.ohDear = ohDear
		this.id = statusPageUpdate.id
		this.title = statusPageUpdate.title
		this.text = statusPageUpdate.text
		this.pinned = statusPageUpdate.pinned
		this.severity = statusPageUpdate.severity
		this.time = statusPageUpdate.time
	}

	/**
	 * Retrive all updates of given status page id.
	 *
	 * @returns {Promise<StatusPageUpdate[]>}
	 * @memberof StatusPageUpdate
	 */
	public statusPageUpdates(): Promise<StatusPageUpdate[]> {
		return this.ohDear.StatusPage.statusPageUpdates(this.id)
	}

	/**
	 * Post a status update.
	 *
	 * @param {CreateStatusPageUpdateInput} data
	 * @returns {Promise<StatusPageUpdate>}
	 * @memberof StatusPageUpdate
	 */
	public postStatusPageUpdate(data: CreateStatusPageUpdateInput): Promise<StatusPageUpdate> {
		return this.ohDear.StatusPage.postStatusPageUpdate(data)
	}

	/**
	 * Delete a status update
	 *
	 * @returns {Promise<void>}
	 * @memberof StatusPageUpdate
	 */
	public deleteStatusPageUpdate(): Promise<void> {
		return this.ohDear.StatusPage.deleteStatusPageUpdate(this.id)
	}
}
