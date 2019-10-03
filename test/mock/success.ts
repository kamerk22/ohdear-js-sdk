export const allSiteResponse = {
	data: [
		{
			id: 1,
			url: 'http://yoursite.tld',
			sort_url: 'yoursite.tld',
			label: 'your-site',
			team_id: 1,
			latest_run_date: '2019-09-16 07:29:02',
			summarized_check_result: 'succeeded',
			created_at: '20171106 07:40:49',
			updated_at: '20171106 07:40:49',
			checks: [
				{
					id: 100,
					type: 'uptime',
					label: 'Uptime',
					enabled: true,
					latest_run_ended_at: '2019-09-16 07:29:02',
					latest_run_result: 'succeeded'
				},
				{
					id: 101,
					type: 'broken_links',
					label: 'Broken links',
					enabled: true,
					latest_run_ended_at: '2019-09-16 07:29:05',
					latest_run_result: 'succeeded'
				}
			]
		},
		{
			id: 2,
			url: 'https://yourothersite.tld',
			sort_url: 'yourothersite.tld',
			label: 'my-site',
			team_id: 1,
			latest_run_date: '2019-09-16 07:29:02',
			summarized_check_result: 'failed',
			created_at: '20171108 07:40:16',
			updated_at: '20171108 07:40:16',
			checks: [
				{
					id: 1,
					type: 'uptime',
					label: 'Uptime',
					enabled: true,
					latest_run_ended_at: '2019-09-16 07:29:02',
					latest_run_result: 'succeeded'
				},
				{
					id: 2,
					type: 'broken_links',
					label: 'Broken links',
					enabled: true,
					latest_run_ended_at: '2019-09-16 07:29:05',
					latest_run_result: 'failed'
				},
				{
					id: 3,
					type: 'mixed_content',
					label: 'Mixed content',
					enabled: true,
					latest_run_ended_at: '2019-09-16 07:29:05',
					latest_run_result: 'succeeded'
				},
				{
					id: 4,
					type: 'certificate_health',
					label: 'Certificate health',
					enabled: true,
					latest_run_ended_at: '2019-09-16 07:29:02',
					latest_run_result: 'failed'
				},
				{
					id: 5,
					type: 'certificate_transparency',
					label: 'Certificate transparency',
					enabled: true,
					latest_run_ended_at: null,
					latest_run_result: null
				}
			]
		}
	]
}

export const singleSiteResponse = {
	id: 1,
	url: 'http://yoursite.tld',
	sort_url: 'yoursite.tld',
	label: 'your-site',
	team_id: 1,
	latest_run_date: '2019-09-16 07:29:02',
	summarized_check_result: 'succeeded',
	created_at: '20171106 07:40:49',
	updated_at: '20171106 07:40:49',
	checks: [
		{
			id: 100,
			type: 'uptime',
			label: 'Uptime',
			enabled: true,
			latest_run_ended_at: '2019-09-16 07:29:02',
			latest_run_result: 'succeeded'
		},
		{
			id: 101,
			type: 'broken_links',
			label: 'Broken links',
			enabled: true,
			latest_run_ended_at: '2019-09-16 07:29:05',
			latest_run_result: 'succeeded'
		}
	]
}

export const addSiteResponse = {
	id: 173,
	url: 'https://mybrandnewsite.tld',
	sort_url: 'mybrandnewsite.tld',
	team_id: 1,
	checks: [
		{
			id: 560,
			type: 'certificate_health',
			enabled: true
		},
		{
			id: 561,
			type: 'mixed_content',
			enabled: true
		}
	]
}

export const brokenLinkResponse = {
	data: [
		{
			crawled_url: 'https://example.com/broken',
			status_code: 404,
			found_on_url: 'https://example.com'
		}
	]
}

export const mixedContentResponse = {
	data: [
		{
			element_name: 'img',
			mixed_content_url: 'http://example.com/image.jpg',
			found_on_url: 'https://example.com'
		}
	]
}

export const uptimeResponse = [
	{ datetime: '2018-01-01 00:00:00', uptime_percentage: 100 },
	{ datetime: '2018-01-01 01:00:00', uptime_percentage: 99.76 },
	{ datetime: '2018-01-01 02:00:00', uptime_percentage: 100 },
	{ datetime: '2018-01-01 03:00:00', uptime_percentage: 98.34 },
	{ datetime: '2018-01-01 23:00:00', uptime_percentage: 100 }
]

export const downtimeResponse = {
	data: [{ started_at: '2018-01-01 15:00:00', ended_at: '2018-01-01 15:07:00' }]
}

export const userInfoResponse = {
	id: 1,
	name: 'Firstname Lastname',
	email: 'you@domain.tld',
	photo_url: 'https://www.gravatar.com/avatar/...jpg',
	teams: [
		{
			id: 1,
			name: 'Your Team Name'
		}
	]
}

export const checkEnableResponse = {
	id: 405,
	type: 'uptime',
	enabled: true
}

export const checkDisableResponse = {
	id: 405,
	type: 'uptime',
	enabled: false
}

export const singleCheckResponse = {
	id: 100,
	type: 'uptime',
	label: 'Uptime',
	enabled: true,
	latest_run_ended_at: '2019-09-16 07:29:02',
	latest_run_result: 'succeeded'
}

export const certificateHealthResponse = {
	certificate_details: {
		issuer: "Let's Encrypt Authority X3",
		valid_from: '2019-09-10 15:16:01',
		valid_until: '2019-12-09 15:16:01'
	},
	certificate_checks: [
		{
			type: 'notFound',
			label: 'Certificate present',
			passed: true
		},
		{
			type: 'expiresSoon',
			label: 'Will not expire in the next 14 days',
			passed: true
		},
		{
			type: 'invalidChain',
			label: 'Has a valid chain',
			passed: true
		},
		{
			type: 'coversWrongDomain',
			label: 'Covers the right domain',
			passed: true
		},
		{
			type: 'doesNotConnectWithRootCertificate',
			label: 'Connects with a root certificate',
			passed: true
		},
		{
			type: 'notYetActive',
			label: 'Is currently active',
			passed: true
		},
		{
			type: 'isSelfSigned',
			label: 'Is not self signed',
			passed: true
		},
		{
			type: 'usesInvalidHash',
			label: 'Uses valid hash',
			passed: true
		},
		{
			type: 'hasExpired',
			label: 'Has not expired',
			passed: true
		},
		{
			type: 'hasChanged',
			label: 'Unchanged since last checked',
			passed: true
		}
	],
	certificate_chain_issuers: [
		"US, Let's Encrypt, Let's Encrypt Authority X3",
		'Digital Signature Trust Co., DST Root CA X3'
	]
}

export const statusPageResponse = {
	data: [
		{
			id: 1,
			team: {
				id: 1,
				name: 'Your Team Name'
			},
			title: 'Your Status Page Title',
			domain: 'status.your-domain.tld',
			slug: 'autem-quos-accusantium-esse-ex-numquam-odio',
			full_url: 'https://ohdear.app/status-page/autem-quos-accusantium-esse-ex-numquam-odio',
			timezone: 'Europe/Brussels',
			summarized_status: 'up',
			sites: [
				{
					id: 1,
					url: 'https://site1.tld'
				},
				{
					id: 7,
					url: 'https://site2.tld'
				}
			],
			created_at: '2019-09-13 07:06:51',
			updated_at: '2019-09-13 07:06:51'
		}
	],
	links: {
		first: 'https://ohdear.app/api/status-pages?page%5Bnumber%5D=1',
		last: 'https://ohdear.app/api/status-pages?page%5Bnumber%5D=1',
		prev: null,
		next: null
	},
	meta: {
		current_page: 1,
		from: 1,
		last_page: 1,
		path: 'https://ohdear.app/api/status-pages',
		per_page: 200,
		to: 2,
		total: 2
	}
}

export const statusPageUpdateResponse = {
	data: [
		{
			id: 65,
			title: '3rd party API issue resolved',
			text:
				'We have contacted our API provider and they have resolved the situation, everything is back to normal. We apologize for the inconvenience!',
			pinned: false,
			severity: 'resolved',
			time: '2019-09-16 08:24:00'
		},
		{
			id: 64,
			title: 'We are experiencing an outage on our service',
			text:
				'Due to errors in our 3rd party API provider, we are experiencing an outage of our website. Our team is working on getting it resolved ASAP.',
			pinned: false,
			severity: 'high',
			time: '2019-09-16 08:11:00'
		}
	]
}

export const addStatusPageUpdateResponse = {
	id: 66,
	title: 'Our site is down',
	text: 'We are working on it!',
	pinned: true,
	severity: 'high',
	time: '2019-09-16 08:24:00'
}
