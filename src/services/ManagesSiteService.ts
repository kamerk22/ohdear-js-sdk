import { ApiService } from './ApiService'
import { Site } from '../resources/Site'
import { FObject } from '../Client'

export class ManagesSiteService extends ApiService {
	static PATH: string = 'sites'

	public async sites(): Promise<Site[]> {
		const res = await this.client.get(ManagesSiteService.PATH)
		return res.data.map((i: any) => new Site(i, this.ohDear))
	}

	public async site(siteId: number): Promise<Site> {
		const res = await this.client.get(`${ManagesSiteService.PATH}/${siteId}`)
		return new Site(res, this.ohDear)
	}

	public async siteByUrl(siteUrl: string): Promise<Site> {
		const res = await this.client.get(`${ManagesSiteService.PATH}/url/${siteUrl}`)
		return new Site(res, this.ohDear)
	}

	public async createSite(data: FObject): Promise<Site> {
		const res = await this.client.post(ManagesSiteService.PATH, data)
		return new Site(res, this.ohDear)
	}

	public async deleteSite(siteId: number): Promise<Site> {
		const res = await this.client.delete(`${ManagesSiteService.PATH}/${siteId}`)
		return new Site(res, this.ohDear)
	}
}
