export class StatusPage {
	public id: number
	public title: string
	public domain: string
	public slug: string
	public fullUrl: string
	public timezone: string
	public summarizedStatus: string

	constructor(statusPage: any) {
		this.id = statusPage.id
		this.title = statusPage.title
		this.domain = statusPage.domain
		this.slug = statusPage.slug
		this.fullUrl = statusPage.full_url
		this.timezone = statusPage.timezone
		this.summarizedStatus = statusPage.summarized_status
	}
}

export default StatusPage
