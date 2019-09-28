/**
 * MixedContent resource.
 *
 * @export
 * @class MixedContent
 */
export class MixedContent {
	/**
	 * The name of the element that was detected as mixed content.
	 *
	 * @type {number}
	 * @memberof MixedContent
	 */
	public elementName: number
	/**
	 * The url of the detected mixed content.
	 *
	 * @type {string}
	 * @memberof MixedContent
	 */
	public mixedContentUrl: string
	/**
	 * The url where the mixed content was found.
	 *
	 * @type {string}
	 * @memberof MixedContent
	 */
	public foundOnUrl: string

	/**
	 * Creates an instance of MixedContent.
	 *
	 * @param {*} mixedContent
	 * @memberof MixedContent
	 */
	constructor(mixedContent: any) {
		this.elementName = mixedContent.element_name
		this.mixedContentUrl = mixedContent.mixed_content_url
		this.foundOnUrl = mixedContent.found_on_url
	}
}

export default MixedContent
