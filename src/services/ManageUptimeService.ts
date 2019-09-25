import { Uptime } from './../resources/Uptime'
import { ApiService } from './ApiService'

export class ManageUptimeService extends ApiService {
	public async uptime(
		siteId: number,
		startedAt: string,
		endedAt: string,
		split: string = 'month'
	): Promise<Uptime[] | undefined> {
		try {
			const res = await this.client.get(
				`sites/${siteId}/uptime?filter[started_at]=${startedAt}&filter[ended_at]=${endedAt}&split=${split}`
			)
			return res.map((i: any) => new Uptime(i))
		} catch (error) {
			console.log(error)
		}
	}
}
