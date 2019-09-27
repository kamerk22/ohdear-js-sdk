import { StatusPageSeverity } from '../enums/StatusPageEnum'

export class StatusPageUpdate {
	public id: number
	public title: string
	public text: string
	public pinned: Boolean
	public severity: StatusPageSeverity
	public time: string

	constructor(statusPageUpdate: any) {
		this.id = statusPageUpdate.id
		this.title = statusPageUpdate.title
		this.text = statusPageUpdate.text
		this.pinned = statusPageUpdate.pinned
		this.severity = statusPageUpdate.severity
		this.time = statusPageUpdate.time
	}
}
