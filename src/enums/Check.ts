export enum CheckType {
	uptime,
	broken_links,
	certificate_health,
	mixed_content,
	certificate_transparency
}

export enum CheckResult {
	succeeded,
	warning,
	failed,
	pending
}
