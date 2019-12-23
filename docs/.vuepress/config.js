const API = require('./api-sidebar.json')
const SEO = require('./seo')

module.exports = {
	title: 'Oh Dear! Javascript SDK',
	description: 'Javascript SDK to work with the Oh Dear API.',
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e32929' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
		['meta', { name: 'msapplication-TileColor', content: '#e32929' }],
		['meta', { name: 'theme-color', content: '#e32929' }]
	],
	plugins: [
		['autometa', SEO],
		['@vuepress/back-to-top', true],
		[
			('@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true
			})
		]
	],
	smoothScroll: true,
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'API', link: '/api/' },
			{ text: 'Oh Dear!', link: 'https://ohdear.app' }
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
			children: [['', 'Introduction'], 'getting-started']
		},
		{
			title: groupB,
			collapsable: false,
			children: [
				'sites',
				'checks',
				'uptime',
				'downtime',
				'broken-links',
				'mixed-content',
				'certificate-health',
				['user-info', 'User Info'],
				'status-pages',
				['status-page-update', 'Status Page Update']
			]
		}
	]
}
