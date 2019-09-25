import { ApiService } from './ApiService'
import { MixedContent } from '../resources/MixedContent'

export class ManagesMixedContentService extends ApiService {
	static PATH: string = 'mixed-content'
	public async mixedContent(siteId: number): Promise<MixedContent[] | undefined> {
		try {
			const res = await this.client.get(`${ManagesMixedContentService.PATH}/${siteId}`)
			return res.data.map((i: any) => new MixedContent(i))
		} catch (error) {
			console.log(error)
		}
	}
}
