const SEO = require('./seo')

module.exports = {
	title: 'OhDear Javascript SDK',
	description: 'Just playing around',
	plugins: {
		autometa: SEO
	},
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'Ohdear.app', link: 'https://ohdear,app' }
		],
		sidebar: {
			'/guide/': getGuideSidebar('Guide', 'Resources')
		}
	}
}

function getGuideSidebar(groupA, groupB) {
	return [
		{
			title: groupA,
			collapsable: false,
			children: ['', 'getting-started']
		},
		{
			title: groupB,
			collapsable: false,
			children: [
				'user-info',
				'sites',
				'checks',
				'uptime',
				'downtime',
				'broken-links',
				'mixed-content',
				'certificate-health',
				'status-pages',
				['status-page-update', 'Status Page Update']
			]
		}
	]
}
