import { ApiService } from './ApiService'
import { Check } from '../resources/Check'

/**
 * Manages check service.
 *
 * @export
 * @class ManagesCheckService
 * @extends {ApiService}
 */
export class ManagesCheckService extends ApiService {
	/**
	 * To enable the check.
	 *
	 * @param {number} checkId
	 * @returns {Promise<Check>}
	 * @memberof ManagesCheckService
	 */
	public async enableCheck(checkId: number): Promise<Check> {
		const res = await this.client.post(`checks/${checkId}/enable`, {})
		return new Check(res, this.ohDear)
	}

	/**
	 * To disable the check.
	 *
	 * @param {number} checkId
	 * @returns {Promise<Check>}
	 * @memberof ManagesCheckService
	 */
	public async disableCheck(checkId: number): Promise<Check> {
		const res = await this.client.post(`checks/${checkId}/disable`, {})
		return new Check(res, this.ohDear)
	}

	/**
	 * Request to re-run given check.
	 *
	 * @param {number} checkId
	 * @returns {Promise<Check>}
	 * @memberof ManagesCheckService
	 */
	public async requestRun(checkId: number): Promise<Check> {
		const res = await this.client.post(`checks/${checkId}/request-run`, {})
		return new Check(res, this.ohDear)
	}
}
