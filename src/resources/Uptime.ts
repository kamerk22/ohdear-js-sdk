/**
 * Uptime resource.
 *
 * @export
 * @class Uptime
 */
export class Uptime {
	/**
	 * The start of the period.
	 *
	 * @type {string}
	 * @memberof Uptime
	 */
	public dateTime: string
	/**
	 * A float representing the percentage of time the site was up.
	 *
	 * @type {number}
	 * @memberof Uptime
	 */
	public uptimePercentage: number

	/**
	 * Creates an instance of Uptime.
	 *
	 * @param {*} uptime
	 * @memberof Uptime
	 */
	constructor(uptime: any) {
		this.dateTime = uptime.datetime
		this.uptimePercentage = uptime.uptime_percentage
	}
}

export default Uptime
