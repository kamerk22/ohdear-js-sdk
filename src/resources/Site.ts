import { Downtime } from './Downtime'
import { Check } from './Check'
import { CheckResultEnum } from '../enums/CheckEnum'
import OhDear from '../OhDear'
import { BrokenLink } from './BrokenLink'
import { Uptime } from './Uptime'

export class Site {
	public id: number
	public url: string
	public label: string
	public sortUrl: string
	public latestRunDate: Date
	public checkResult: CheckResultEnum
	public checks: Check[]
	public createdAt: Date
	public updatedAt: Date
	protected ohDear: OhDear

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

	public async delete(): Promise<Site> {
		return this.ohDear.Site.deleteSite(this.id)
	}

	public async brokenLinks(): Promise<BrokenLink[]> {
		return this.ohDear.BrokenLink.brokenLinks(this.id)
	}

	public async uptime(startedAt: string, endedAt: string, split: string): Promise<Uptime[]> {
		return this.ohDear.Uptime.uptime(this.id, startedAt, endedAt, split)
	}

	public async downtime(startedAt: string, endedAt: string): Promise<Downtime[]> {
		return this.ohDear.Downtime.downtime(this.id, startedAt, endedAt)
	}
}
