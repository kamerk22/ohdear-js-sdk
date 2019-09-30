import { Uptime } from '../resources/Uptime'
import { ApiService } from './ApiService'
import StatusPage from '../resources/StatusPage'
import { CreateStatusPageUpdateInput } from '../interfaces/CreateStatusPageUpdateInput'
import { StatusPageUpdate } from '../resources/StatusPageUpdate'

export class ManagesStatusPageService extends ApiService {
	public async statusPages(): Promise<StatusPage[]> {
		const res = await this.client.get('status-pages')
		return res.data.map((i: any) => new StatusPage(i))
	}

	public async statusPage(statusPagId: number): Promise<StatusPage> {
		const res = await this.client.get(`status-pages/${statusPagId}`)
		return new StatusPage(res)
	}

	public async deleteStatusPage(statusPagId: number): Promise<void> {
		const res = await this.client.delete(`status-pages/${statusPagId}`)
	}

	public async listStatusPageUpdate(statusPagId: number): Promise<StatusPageUpdate[]> {
		const res = await this.client.delete(`status-pages/${statusPagId}/updates`)
		return res.data.map((i: any) => new StatusPageUpdate(i))
	}

	public async postStatusPageUpdate(data: CreateStatusPageUpdateInput): Promise<StatusPageUpdate> {
		const res = await this.client.post('status-page-updates', data)
		return new StatusPageUpdate(res)
	}

	public async deleteStatusPageUpdate(statusPagUpdateId: number): Promise<void> {
		const res = await this.client.delete(`status-page-updates/${statusPagUpdateId}`)
	}
}
