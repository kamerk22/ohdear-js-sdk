/**
 * Downtime resource.
 *
 * @export
 * @class Downtime
 */
export class Downtime {
	/**
	 * The date time when we started detecting downtime
	 *
	 * @type {string}
	 * @memberof Downtime
	 */
	public startedAt: string
	/**
	 * The date time when we detected the site was back up
	 *
	 * @type {string}
	 * @memberof Downtime
	 */
	public endedAt: string

	/**
	 * Creates an instance of Downtime.
	 *
	 * @param {*} downtime
	 * @memberof Downtime
	 */
	constructor(downtime: any) {
		this.startedAt = downtime.started_at
		this.endedAt = downtime.ended_at
	}
}
