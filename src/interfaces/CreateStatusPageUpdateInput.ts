import { StatusPageSeverity } from '../enums/StatusPageEnum'

export interface CreateStatusPageUpdateInput {
	status_page_id: number
	title: string
	message: string
	severity: StatusPageSeverity
	time: string
	pinned: Boolean
	[key: string]: any
}
