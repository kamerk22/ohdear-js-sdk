import { StatusPageSeverity } from '../enums/StatusPageEnum'

/**
 * StatusPageUpdate resource.
 *
 * @export
 * @class StatusPageUpdate
 */
export class StatusPageUpdate {
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
	constructor(statusPageUpdate: any) {
		this.id = statusPageUpdate.id
		this.title = statusPageUpdate.title
		this.text = statusPageUpdate.text
		this.pinned = statusPageUpdate.pinned
		this.severity = statusPageUpdate.severity
		this.time = statusPageUpdate.time
	}
}
