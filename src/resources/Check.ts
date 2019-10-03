import { CheckTypeEnum, CheckResultEnum } from '../enums/CheckEnum'
import OhDear from '../OhDear'

/**
 * Check resource.
 *
 * @export
 * @class Check
 */
export class Check {
	/**
	 * The id of the check.
	 *
	 * @type {number}
	 * @memberof Check
	 */
	public id: number
	/**
	 * The type of the check.
	 *
	 * @type {CheckTypeEnum} eg. uptime, broken_links, certificate_health, mixed_content and certificate_transparency
	 * @memberof Check
	 */
	public type: CheckTypeEnum
	/**
	 * The label of the check.
	 *
	 * @type {string}
	 * @memberof Check
	 */
	public label: string
	/**
	 * Check is enabled or not.
	 *
	 * @type {boolean}
	 * @memberof Check
	 */
	public enabled: boolean
	/**
	 * The last check run at.
	 *
	 * @type {(string | null)}
	 * @memberof Check
	 */
	public lastRunEndedAt: string | null
	/**
	 * The result of last run,
	 *
	 * @type {CheckResultEnum} eg. succeeded, warning, failed, pending
	 * @memberof Check
	 */
	public lastRunResult: CheckResultEnum
	/**
	 * The OhDear class instance
	 *
	 * @protected
	 * @type {OhDear}
	 * @memberof Check
	 */
	protected ohDear: OhDear

	/**
	 * Creates an instance of Check.
	 *
	 * @param {*} check
	 * @param {OhDear} ohDear
	 * @memberof Check
	 */
	constructor(check: any, ohDear: OhDear) {
		this.ohDear = ohDear
		this.id = check.id
		this.type = check.type
		this.label = check.label
		this.enabled = check.enabled
		this.lastRunEndedAt = check.latest_run_ended_at
		this.lastRunResult = check.latest_run_result
	}

	/**
	 * Enable the check for given id
	 *
	 * @returns {Promise<void>}
	 * @memberof Check
	 */
	public async enable(): Promise<Check> {
		return this.ohDear.Check.enableCheck(this.id)
	}

	/**
	 * Disable the check of given id
	 *
	 * @returns {Promise<void>}
	 * @memberof Check
	 */
	public async disable(): Promise<Check> {
		return this.ohDear.Check.disableCheck(this.id)
	}

	/**
	 * Rerun the check of given id
	 *
	 * @returns {Promise<Check>}
	 * @memberof Check
	 */
	public requestRun(): Promise<Check> {
		return this.ohDear.Check.requestRun(this.id)
	}
}

export default Check
