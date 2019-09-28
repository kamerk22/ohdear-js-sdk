/**
 * BrokenLink resource.
 *
 * @export
 * @class BrokenLink
 */
export class BrokenLink {
	/**
	 * The status code the site responded with
	 *
	 * @type {number}
	 * @memberof BrokenLink
	 */
	public statusCode: number
	/**
	 * The url that is broken.
	 *
	 * @type {string}
	 * @memberof BrokenLink
	 */
	public crawledUrl: string
	/**
	 * The url where the broken url was found.
	 *
	 * @type {string}
	 * @memberof BrokenLink
	 */
	public foundOnUrl: string

	/**
	 * Creates an instance of BrokenLink.
	 *
	 * @param {*} brokenLinkData
	 * @memberof BrokenLink
	 */
	constructor(brokenLinkData: any) {
		this.statusCode = brokenLinkData.status_code
		this.crawledUrl = brokenLinkData.crawled_url
		this.foundOnUrl = brokenLinkData.found_on_url
	}
}

export default BrokenLink
