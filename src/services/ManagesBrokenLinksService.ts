import { ApiService } from './ApiService'
import { BrokenLink } from '../resources/BrokenLink'

/**
 * Manages broken links service.
 *
 * @export
 * @class ManagesBrokenLinksService
 * @extends {ApiService}
 */
export class ManagesBrokenLinksService extends ApiService {
	/**
	 * Get the broken links of site.
	 *
	 * @param {number} siteId
	 * @returns {Promise<BrokenLink[]>}
	 * @memberof ManagesBrokenLinksService
	 */
	public async brokenLinks(siteId: number): Promise<BrokenLink[]> {
		const res = await this.client.get(`broken-links/${siteId}`)
		return res.data.map((i: any) => new BrokenLink(i))
	}
}
