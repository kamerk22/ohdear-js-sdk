import { ApiService } from './ApiService'
import { Check } from '../resources/Check'

export class ManagesCheckService extends ApiService {
	public async enableCheck(checkId: number): Promise<Check> {
		const res = await this.client.post(`checks/${checkId}/enable`, {})
		return new Check(res, this.ohDear)
	}

	public async disableCheck(checkId: number): Promise<Check> {
		const res = await this.client.post(`checks/${checkId}/disable`, {})
		return new Check(res, this.ohDear)
	}

	public async requestRun(checkId: number): Promise<Check> {
		const res = await this.client.post(`checks/${checkId}/request-run`, {})
		return new Check(res, this.ohDear)
	}
}
