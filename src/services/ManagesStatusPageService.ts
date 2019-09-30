import { Uptime } from '../resources/Uptime'
import { ApiService } from './ApiService'
import StatusPage from '../resources/StatusPage'
import { CreateStatusPageUpdateInput } from '../interfaces/CreateStatusPageUpdateInput'
import { StatusPageUpdate } from '../resources/StatusPageUpdate'

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
		return res.data.map((i: any) => new StatusPage(i))
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
		return new StatusPage(res)
	}

	/**
	 * Delete status page of given id.
	 *
	 * @param {number} statusPagId
	 * @returns {Promise<void>}
	 * @memberof ManagesStatusPageService
	 */
	public async deleteStatusPage(statusPagId: number): Promise<void> {
		await this.client.delete(`status-pages/${statusPagId}`)
	}

	/**
	 * Retrive all updates of given status page id.
	 *
	 * @param {number} statusPagId
	 * @returns {Promise<StatusPageUpdate[]>}
	 * @memberof ManagesStatusPageService
	 */
	public async statusPageUpdates(statusPagId: number): Promise<StatusPageUpdate[]> {
		const res = await this.client.delete(`status-pages/${statusPagId}/updates`)
		return res.data.map((i: any) => new StatusPageUpdate(i, this.ohDear))
	}

	/**
	 * Post a status update of given status page id.
	 *
	 * @param {CreateStatusPageUpdateInput} data
	 * @returns {Promise<StatusPageUpdate>}
	 * @memberof ManagesStatusPageService
	 */
	public async postStatusPageUpdate(data: CreateStatusPageUpdateInput): Promise<StatusPageUpdate> {
		const res = await this.client.post('status-page-updates', data)
		return new StatusPageUpdate(res, this.ohDear)
	}

	/**
	 * Delete a status update of given status page id.
	 *
	 * @param {number} statusPagUpdateId
	 * @returns {Promise<void>}
	 * @memberof ManagesStatusPageService
	 */
	public async deleteStatusPageUpdate(statusPagUpdateId: number): Promise<void> {
		await this.client.delete(`status-page-updates/${statusPagUpdateId}`)
	}
}
