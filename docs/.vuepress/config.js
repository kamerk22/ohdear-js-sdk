const SEO = require('./seo')
const API = require('./api-sidebar.json')

module.exports = {
	title: 'Oh Dear! Javascript SDK',
	description: 'Javascript SDK to work with the Oh Dear API.',
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/site.webmanifest' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e32929' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
		['meta', { name: 'msapplication-TileColor', content: '#e32929' }],
		['meta', { name: 'theme-color', content: '#e32929' }]
	],
	plugins: {
		autometa: SEO
	},
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'API', link: '/api/' },
			{ text: 'Oh Dear !', link: 'https://ohdear.app' }
		],
		sidebar: {
			'/guide/': getGuideSidebar('Guide', 'Resources'),
			'/api/': API
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
