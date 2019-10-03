import { ApiService } from './ApiService'
import { StatusPage } from '../resources/StatusPage'

/**
 * Manages status page service.
 *
 * @export
 * @class ManagesStatusPageService
 * @extends {ApiService}
 */
export class ManagesStatusPageService extends ApiService {
	/**
	 * Retrive all status pages.
	 *
	 * @returns {Promise<StatusPage[]>}
	 * @memberof ManagesStatusPageService
	 */
	public async statusPages(): Promise<StatusPage[]> {
		const res = await this.client.get('status-pages')
		return res.data.map((i: any) => new StatusPage(i, this.ohDear))
	}

	/**
	 * Retrive a single status page.
	 *
	 * @param {number} statusPagId
	 * @returns {Promise<StatusPage>}
	 * @memberof ManagesStatusPageService
	 */
	public async statusPage(statusPagId: number): Promise<StatusPage> {
		const res = await this.client.get(`status-pages/${statusPagId}`)
		return new StatusPage(res, this.ohDear)
	}

	/**
	 * Delete status page of given id.
	 *
	 * @param {number} statusPagId
	 * @returns {Promise<void>}
	 * @memberof ManagesStatusPageService
	 */
	public async deleteStatusPage(statusPagId: number): Promise<void> {
		return this.client.delete(`status-pages/${statusPagId}`)
	}
}
