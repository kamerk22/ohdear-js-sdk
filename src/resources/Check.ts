import { CheckType, CheckResult } from './../enums/Check'

export class Check {
	public id: number
	public type: CheckType
	public label: string
	public enabled: boolean
	public lastRunEndedAt: Date | null
	public lastRunResult: CheckResult

	constructor(check: any) {
		this.id = check.id
		this.type = check.type
		this.label = check.label
		this.enabled = check.enabled
		this.lastRunEndedAt = check.latest_run_ended_at
		this.lastRunResult = check.latest_run_result
	}
}
