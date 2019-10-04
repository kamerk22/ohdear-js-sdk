import { CheckTypeEnum } from '../enums/CheckEnum'

/**
 * Create site input interface
 *
 * @export
 * @interface CreateSiteInput
 */
export interface CreateSiteInput {
	/**
	 * Url to use for monitor.
	 *
	 * @type {string}
	 * @memberof CreateSiteInput
	 */
	url: string
	/**
	 * The team id where this site should be added.
	 *
	 * @type {number}
	 * @memberof CreateSiteInput
	 */
	team_id: number
	/**
	 * To enable checks
	 *
	 * @type {CheckTypeEnum[]}
	 * @memberof CreateSiteInput
	 */
	checks?: CheckTypeEnum[]
	[key: string]: any
}
