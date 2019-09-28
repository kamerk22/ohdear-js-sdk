import { CheckTypeEnum } from '../enums/CheckEnum'

export interface CreateSiteInput {
	url: string
	team_id: number
	checks: CheckTypeEnum[]
	[key: string]: any
}
