import { CheckTypeEnum, CheckResultEnum } from '../enums/CheckEnum'
import OhDear from '../OhDear'

export class Check {
	public id: number
	public type: CheckTypeEnum
	public label: string
	public enabled: boolean
	public lastRunEndedAt: Date | null
	public lastRunResult: CheckResultEnum
	protected ohDear: OhDear

	constructor(check: any, ohDear: OhDear) {
		this.ohDear = ohDear
		this.id = check.id
		this.type = check.type
		this.label = check.label
		this.enabled = check.enabled
		this.lastRunEndedAt = check.latest_run_ended_at
		this.lastRunResult = check.latest_run_result
	}

	public async enable(): Promise<void> {
		const updatedCheck = await this.ohDear.Check.enableCheck(this.id)
		this.enabled = updatedCheck.enabled
	}

	public async disable(): Promise<void> {
		const updatedCheck = await this.ohDear.Check.disableCheck(this.id)
		this.enabled = updatedCheck.enabled
	}

	public async requestRun(): Promise<void> {
		await this.ohDear.Check.requestRun(this.id)
	}
}
