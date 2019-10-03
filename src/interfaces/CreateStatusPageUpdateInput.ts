import { StatusPageSeverity } from '../enums/StatusPageEnum'

/**
 * Create status page update input interface.
 *
 * @export
 * @interface CreateStatusPageUpdateInput
 */
export interface CreateStatusPageUpdateInput {
	/**
	 * The id of status page.
	 *
	 * @type {number}
	 * @memberof CreateStatusPageUpdateInput
	 */
	status_page_id: number
	/**
	 * The title of status page update.
	 *
	 * @type {string}
	 * @memberof CreateStatusPageUpdateInput
	 */
	title: string
	/**
	 * The message of status page update.
	 *
	 * @type {string}
	 * @memberof CreateStatusPageUpdateInput
	 */
	message?: string
	/**
	 * Serverity of the update.
	 *
	 * @type {StatusPageSeverity} eg: informational, warning, high or resolved
	 * @memberof CreateStatusPageUpdateInput
	 */
	severity: StatusPageSeverity
	/**
	 *
	 *
	 * @type {string}
	 * @memberof CreateStatusPageUpdateInput
	 */
	time: string
	/**
	 * Date at which the status is posted.
	 *
	 * @type {Boolean}
	 * @memberof CreateStatusPageUpdateInput
	 */
	pinned: Boolean
	[key: string]: any
}
