export class BrokenLink {
	public statusCode: number
	public crawledUrl: string
	public foundOnUrl: string

	constructor(brokenLinkData: any) {
		this.statusCode = brokenLinkData.status_code
		this.crawledUrl = brokenLinkData.crawled_url
		this.foundOnUrl = brokenLinkData.found_on_url
	}
}
