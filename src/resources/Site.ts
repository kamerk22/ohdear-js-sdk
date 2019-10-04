import { Downtime } from './Downtime'
import { Check } from './Check'
import { CheckResultEnum } from '../enums/CheckEnum'
import { BrokenLink } from './BrokenLink'
import { Uptime } from './Uptime'
import OhDear from '../OhDear'
import MixedContent from './MixedContent'
import CertificateHealth from './CertificateHealth'

/**
 * Site Resource.
 *
 * @export
 * @class Site
 */
export class Site {
	/**
	 * The OhDear class instance
	 *
	 * @protected
	 * @type {OhDear}
	 * @memberof Site
	 */
	protected ohDear: OhDear
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
	 * @type {string}
	 * @memberof Site
	 */
	public latestRunDate: string
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
	 * @type {string}
	 * @memberof Site
	 */
	public createdAt: string
	/**
	 * The updated at date of the site.
	 *
	 * @type {string}
	 * @memberof Site
	 */
	public updatedAt: string

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
	 * @returns {Promise<void>}
	 * @memberof Site
	 */
	public delete(): Promise<void> {
		return this.ohDear.Site.deleteSite(this.id)
	}

	/**
	 * Get the broken links for the site.
	 *
	 * @returns {Promise<BrokenLink[]>}
	 * @memberof Site
	 */
	public brokenLinks(): Promise<BrokenLink[]> {
		return this.ohDear.BrokenLink.brokenLinks(this.id)
	}

	/**
	 * Get the mixed content for the site.
	 *
	 * @returns {Promise<MixedContent[]>}
	 * @memberof Site
	 */
	public mixedContent(): Promise<MixedContent[]> {
		return this.ohDear.MixedContent.mixedContent(this.id)
	}

	/**
	 * Get the uptime percentages for the site.
	 *
	 * @param {string} startedAt Must be in format Ymdhis
	 * @param {string} endedAt Must be in format Ymdhis
	 * @param {string} split Use hour, day or month
	 * @returns {Promise<Uptime[]>}
	 * @memberof Site
	 */
	public uptime(startedAt: string, endedAt: string, split: string = 'month'): Promise<Uptime[]> {
		return this.ohDear.Uptime.uptime(this.id, startedAt, endedAt, split)
	}

	/**
	 * Get the uptime percentages for the site.
	 *
	 * @param {string} startedAt
	 * @param {string} endedAt
	 * @returns {Promise<Downtime[]>}
	 * @memberof Site
	 */
	/**
	 * Get the downtime periods for the site.
	 *
	 * @param {string} startedAt Must be in format Ymdhis
	 * @param {string} endedAt Must be in format Ymdhis
	 * @returns {Promise<Downtime[]>}
	 * @memberof Site
	 */
	public downtime(startedAt: string, endedAt: string): Promise<Downtime[]> {
		return this.ohDear.Downtime.downtime(this.id, startedAt, endedAt)
	}

	/**
	 * Get the certificate health for the site.
	 *
	 * @returns {Promise<CertificateHealth>}
	 * @memberof Site
	 */
	public certificate(): Promise<CertificateHealth> {
		return this.ohDear.CertificateHealth.certificate(this.id)
	}
}

export default Site
