import { Check } from './Check'
import { CheckResult } from '../enums/Check'
import OhDear from '../OhDear'

export class Site {
	public id: number
	public url: string
	public label: string
	public sortUrl: string
	public latestRunDate: Date
	public checkResult: CheckResult
	public checks: Check[]
	public createdAt: Date
	public updatedAt: Date
	public ohDear: OhDear

	constructor(site: any, ohDear: OhDear) {
		this.id = site.id
		this.url = site.url
		this.label = site.label
		this.sortUrl = site.sort_url
		this.latestRunDate = site.latest_run_date
		this.checkResult = site.summarized_check_result
		this.checks = site.checks.map((i: any) => new Check(i))
		this.createdAt = site.created_at
		this.updatedAt = site.updated_at
		this.ohDear = ohDear
	}

	public delete() {
		return this.ohDear.Site.deleteSite(this.id)
	}

	public brokenLinks() {
		return this.ohDear.BrokenLink.brokenLinks(this.id)
	}

	public uptime(startedAt: string, endedAt: string, split: string) {
		return this.ohDear.Uptime.uptime(this.id, startedAt, endedAt, split)
	}

	public downtime(startedAt: string, endedAt: string) {
		return this.ohDear.Downtime.downtime(this.id, startedAt, endedAt)
	}
}
