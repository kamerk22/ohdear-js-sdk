import { ApiService } from './ApiService'
import { MixedContent } from '../resources/MixedContent'

/**
 * Manages mixed content sercvice.
 *
 * @export
 * @class ManagesMixedContentService
 * @extends {ApiService}
 */
export class ManagesMixedContentService extends ApiService {
	/**
	 * To get the mixed content of given site.
	 *
	 * @param {number} siteId
	 * @returns {Promise<MixedContent[]>}
	 * @memberof ManagesMixedContentService
	 */
	public async mixedContent(siteId: number): Promise<MixedContent[]> {
		const res = await this.client.get(`mixed-content/${siteId}`)
		return res.data.map((i: any) => new MixedContent(i))
	}
}
