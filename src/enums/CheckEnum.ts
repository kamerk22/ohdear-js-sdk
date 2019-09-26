export enum CheckTypeEnum {
	uptime,
	broken_links,
	certificate_health,
	mixed_content,
	certificate_transparency
}

export enum CheckResultEnum {
	succeeded,
	warning,
	failed,
	pending
}
