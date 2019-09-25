import { Downtime } from './../resources/Downtime'
import { ApiService } from './ApiService'

export class ManageDowntimeService extends ApiService {
	public async downtime(
		siteId: number,
		startedAt: string,
		endedAt: string
	): Promise<Downtime[] | undefined> {
		try {
			const res = await this.client.get(
				`sites/${siteId}/downtime?filter[started_at]=${startedAt}&filter[ended_at]=${endedAt}`
			)

			return res.data.map((i: any) => new Downtime(i))
		} catch (error) {
			console.log(error)
		}
	}
}
