/**
 * Site check type enum.
 *
 * @export
 * @enum {number}
 */
export enum CheckTypeEnum {
	uptime,
	broken_links,
	certificate_health,
	mixed_content,
	certificate_transparency
}

/**
 * Site check result enum.
 *
 * @export
 * @enum {number}
 */
export enum CheckResultEnum {
	succeeded,
	warning,
	failed,
	pending
}
