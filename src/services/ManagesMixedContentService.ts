import { ApiService } from './ApiService'
import { MixedContent } from '../resources/MixedContent'

export class ManagesMixedContentService extends ApiService {
	static PATH: string = 'mixed-content'
	public async mixedContent(siteId: number): Promise<MixedContent[]> {
		const res = await this.client.get(`${ManagesMixedContentService.PATH}/${siteId}`)
		return res.data.map((i: any) => new MixedContent(i))
	}
}
