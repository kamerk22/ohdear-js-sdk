import { ApiService } from './ApiService'
import { CreateStatusPageUpdateInput } from '../interfaces/CreateStatusPageUpdateInput'
import { StatusPageUpdate } from '../resources/StatusPageUpdate'

/**
 * Manages status page service.
 *
 * @export
 * @class ManagesStatusPageService
 * @extends {ApiService}
 */
export class ManagesStatusPageUpdateService extends ApiService {
	/**
	 * Retrive all updates of given status page id.
	 *
	 * @param {number} statusPageId
	 * @returns {Promise<StatusPageUpdate[]>}
	 * @memberof ManagesStatusPageService
	 */
	public async updates(statusPageId: number): Promise<StatusPageUpdate[]> {
		const res = await this.client.get(`status-pages/${statusPageId}/updates`)
		return res.data.map((i: any) => new StatusPageUpdate(i))
	}

	/**
	 * Post a status update of given status page id.
	 *
	 * @param {CreateStatusPageUpdateInput} data
	 * @returns {Promise<StatusPageUpdate>}
	 * @memberof ManagesStatusPageService
	 */
	public async postUpdate(data: CreateStatusPageUpdateInput): Promise<StatusPageUpdate> {
		const res = await this.client.post('status-page-updates', data)
		return new StatusPageUpdate(res)
	}

	/**
	 * Delete a status update of given status page id.
	 *
	 * @param {number} statusPagUpdateId
	 * @returns {Promise<void>}
	 * @memberof ManagesStatusPageService
	 */
	public async deleteUpdate(statusPagUpdateId: number): Promise<void> {
		return this.client.delete(`status-page-updates/${statusPagUpdateId}`)
	}
}
