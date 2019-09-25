export class Uptime {
	public dateTime: Date
	public uptimePercentage: number

	constructor(uptime: any) {
		this.dateTime = uptime.datetime
		this.uptimePercentage = uptime.uptime_percentage
	}
}
