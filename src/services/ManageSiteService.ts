import { ApiService } from './ApiService'
import { Site } from '../resources/Site'
import { FObject } from '../Client'

export class ManageSiteService extends ApiService {
	static PATH: string = 'sites'

	public async sites(): Promise<Site[] | undefined> {
		try {
			const res = await this.client.get(ManageSiteService.PATH)
			return res.data.map((i: any) => new Site(i, this.ohDear))
		} catch (error) {
			console.log(error)
		}
	}

	public async site(siteId: number): Promise<Site | undefined> {
		try {
			const res = await this.client.get(`${ManageSiteService.PATH}/${siteId}`)
			return new Site(res, this.ohDear)
		} catch (error) {
			console.log(error)
		}
	}

	public async siteByUrl(siteUrl: string): Promise<Site | undefined> {
		try {
			const res = await this.client.get(`${ManageSiteService.PATH}/url/${siteUrl}`)
			return new Site(res, this.ohDear)
		} catch (error) {
			console.log(error)
		}
	}

	public async createSite(data: FObject): Promise<Site | undefined> {
		try {
			const res = await this.client.post(ManageSiteService.PATH, data)
			return new Site(res, this.ohDear)
		} catch (error) {
			console.log(error)
		}
	}

	public async deleteSite(siteId: number): Promise<Site | undefined> {
		try {
			const res = await this.client.delete(`${ManageSiteService.PATH}/${siteId}`)
			return new Site(res, this.ohDear)
		} catch (error) {
			console.log(error)
		}
	}
}
