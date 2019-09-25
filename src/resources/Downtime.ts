export class Downtime {
	public startedAt: string
	public endedAt: string

	constructor(downtime: any) {
		this.startedAt = downtime.started_at
		this.endedAt = downtime.ended_at
	}
}
