export class MixedContent {
	public elementName: number
	public mixedContentUrl: string
	public foundOnUrl: string

	constructor(mixedContent: any) {
		this.elementName = mixedContent.element_name
		this.mixedContentUrl = mixedContent.mixed_content_url
		this.foundOnUrl = mixedContent.found_on_url
	}
}
