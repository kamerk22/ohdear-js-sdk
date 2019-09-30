import { Downtime } from '../resources/Downtime'
import { ApiService } from './ApiService'

/**
 * Manages downtime service.
 *
 * @export
 * @class ManagesDowntimeService
 * @extends {ApiService}
 */
export class ManagesDowntimeService extends ApiService {
	/**
	 * To get the downtime of given site.
	 *
	 * @param {number} siteId
	 * @param {string} startedAt  Must be in format Ymdhis
	 * @param {string} endedAt  Must be in format Ymdhis
	 * @returns {Promise<Downtime[]>}
	 * @memberof ManagesDowntimeService
	 */
	public async downtime(siteId: number, startedAt: string, endedAt: string): Promise<Downtime[]> {
		const res = await this.client.get(
			`sites/${siteId}/downtime?filter[started_at]=${startedAt}&filter[ended_at]=${endedAt}`
		)
		return res.data.map((i: any) => new Downtime(i))
	}
}
