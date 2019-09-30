import { Uptime } from '../resources/Uptime'
import { ApiService } from './ApiService'

/**
 * Manages uptime service.
 *
 * @export
 * @class ManagesUptimeService
 * @extends {ApiService}
 */
export class ManagesUptimeService extends ApiService {
	/**
	 * To get the uptime of given site.
	 *
	 * @param {number} siteId
	 * @param {string} startedAt Must be in format Ymdhis
	 * @param {string} endedAt Must be in format Ymdhis
	 * @param {string} [split='month']  Use hour, day or month
	 * @returns {Promise<Uptime[]>}
	 * @memberof ManagesUptimeService
	 */
	public async uptime(
		siteId: number,
		startedAt: string,
		endedAt: string,
		split: string = 'month'
	): Promise<Uptime[]> {
		const res = await this.client.get(
			`sites/${siteId}/uptime?filter[started_at]=${startedAt}&filter[ended_at]=${endedAt}&split=${split}`
		)
		return res.map((i: any) => new Uptime(i))
	}
}
