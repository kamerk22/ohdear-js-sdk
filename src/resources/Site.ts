import { Downtime } from './Downtime'
import { Check } from './Check'
import { CheckResultEnum } from '../enums/CheckEnum'
import OhDear from '../OhDear'
import { BrokenLink } from './BrokenLink'
import { Uptime } from './Uptime'

/**
 * Site Resource.
 *
 * @export
 * @class Site
 */
export class Site {
	/**
	 * The id of the site.
	 *
	 * @type {number}
	 * @memberof Site
	 */
	public id: number
	/**
	 * The url of the site.
	 *
	 * @type {string}
	 * @memberof Site
	 */
	public url: string
	/**
	 * The label of the site.
	 *
	 * @type {string}
	 * @memberof Site
	 */
	public label: string
	/**
	 * The sort url of the site.
	 *
	 * @type {string}
	 * @memberof Site
	 */
	public sortUrl: string
	/**
	 * The last run date of the site.
	 *
	 * @type {Date}
	 * @memberof Site
	 */
	public latestRunDate: Date
	/**
	 * The result of the check.
	 *
	 * @type {CheckResultEnum}
	 * @memberof Site
	 */
	public checkResult: CheckResultEnum
	/**
	 * The checks of the site.
	 *
	 * @type {Check[]}
	 * @memberof Site
	 */
	public checks: Check[]
	/**
	 * The created at date of the site.
	 *
	 * @type {Date}
	 * @memberof Site
	 */
	public createdAt: Date
	/**
	 * The updated at date of the site.
	 *
	 * @type {Date}
	 * @memberof Site
	 */
	public updatedAt: Date
	/**
	 * The OhDear class instance
	 *
	 * @protected
	 * @type {OhDear}
	 * @memberof Site
	 */
	protected ohDear: OhDear

	/**
	 * Creates an instance of Site.
	 *
	 * @param {*} site
	 * @param {OhDear} ohDear
	 * @memberof Site
	 */
	constructor(site: any, ohDear: OhDear) {
		this.ohDear = ohDear
		this.id = site.id
		this.url = site.url
		this.label = site.label
		this.sortUrl = site.sort_url
		this.latestRunDate = site.latest_run_date
		this.checkResult = site.summarized_check_result
		this.checks = site.checks.map((i: any) => new Check(i, this.ohDear))
		this.createdAt = site.created_at
		this.updatedAt = site.updated_at
	}

	/**
	 * Delete the given site.
	 *
	 * @returns {Promise<Site>}
	 * @memberof Site
	 */
	public delete(): Promise<Site> {
		return this.ohDear.Site.deleteSite(this.id)
	}

	/**
	 * Get the broken links for this site.
	 *
	 * @returns {Promise<BrokenLink[]>}
	 * @memberof Site
	 */
	public brokenLinks(): Promise<BrokenLink[]> {
		return this.ohDear.BrokenLink.brokenLinks(this.id)
	}

	/**
	 * Get the uptime percentages for a site.
	 *
	 * @param {string} startedAt Must be in format Ymdhis
	 * @param {string} endedAt Must be in format Ymdhis
	 * @param {string} split Use hour, day or month
	 * @returns {Promise<Uptime[]>}
	 * @memberof Site
	 */
	public uptime(startedAt: string, endedAt: string, split: string): Promise<Uptime[]> {
		return this.ohDear.Uptime.uptime(this.id, startedAt, endedAt, split)
	}

	/**
	 * Get the uptime percentages for a site.
	 *
	 * @param {string} startedAt
	 * @param {string} endedAt
	 * @returns {Promise<Downtime[]>}
	 * @memberof Site
	 */
	/**
	 * Get the downtime periods for a site.
	 *
	 * @param {string} startedAt Must be in format Ymdhis
	 * @param {string} endedAt Must be in format Ymdhis
	 * @returns {Promise<Downtime[]>}
	 * @memberof Site
	 */
	public downtime(startedAt: string, endedAt: string): Promise<Downtime[]> {
		return this.ohDear.Downtime.downtime(this.id, startedAt, endedAt)
	}
}

export default Site
