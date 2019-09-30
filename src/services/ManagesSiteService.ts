import { CreateSiteInput } from './../interfaces/CreateSiteInput'
import { ApiService } from './ApiService'
import { Site } from '../resources/Site'

/**
 * Manages site service.
 *
 * @export
 * @class ManagesSiteService
 * @extends {ApiService}
 */
export class ManagesSiteService extends ApiService {
	/**
	 * Retrive all available sites.
	 *
	 * @returns {Promise<Site[]>}
	 * @memberof ManagesSiteService
	 */
	public async sites(): Promise<Site[]> {
		const res = await this.client.get('sites')
		return res.data.map((i: any) => new Site(i, this.ohDear))
	}

	/**
	 * Retrive a single site.
	 *
	 * @param {number} siteId
	 * @returns {Promise<Site>}
	 * @memberof ManagesSiteService
	 */
	public async site(siteId: number): Promise<Site> {
		const res = await this.client.get(`sites/${siteId}`)
		return new Site(res, this.ohDear)
	}

	/**
	 * Retrive a single site by url.
	 *
	 * @param {string} siteUrl
	 * @returns {Promise<Site>}
	 * @memberof ManagesSiteService
	 */
	public async siteByUrl(siteUrl: string): Promise<Site> {
		const res = await this.client.get(`sites/url/${siteUrl}`)
		return new Site(res, this.ohDear)
	}

	/**
	 * Create a new site
	 *
	 * @param {CreateSiteInput} data
	 * @returns {Promise<Site>}
	 * @memberof ManagesSiteService
	 */
	public async createSite(data: CreateSiteInput): Promise<Site> {
		const res = await this.client.post('sites', data)
		return new Site(res, this.ohDear)
	}

	/**
	 * Delete the given site.
	 *
	 * @param {number} siteId
	 * @returns {Promise<Site>}
	 * @memberof ManagesSiteService
	 */
	public async deleteSite(siteId: number): Promise<Site> {
		const res = await this.client.delete(`sites/${siteId}`)
		return new Site(res, this.ohDear)
	}
}
