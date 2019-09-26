import { ApiService } from './ApiService'
import { BrokenLink } from '../resources/BrokenLink'

export class ManagesBrokenLinksService extends ApiService {
	static PATH: string = 'broken-links'
	public async brokenLinks(siteId: number): Promise<BrokenLink[]> {
		const res = await this.client.get(`${ManagesBrokenLinksService.PATH}/${siteId}`)
		return res.data.map((i: any) => new BrokenLink(i))
	}
}
