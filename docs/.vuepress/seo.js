module.exports = {
	enable: true, // enables/disables everything - control per page using frontmatter
	image: true, // regular meta image used by search engines
	twitter: true, // twitter card
	og: true, // open graph: facebook, pinterest, google+
	schema: true, // schema.org for google

	// -------------------------------------------------------------------------

	// canonical_base is the canonical url base - best to set once in config.js
	// if set it will be used to prepend page path and add it to the following:
	// - twitter:url
	// - og:url
	// - canonical link (not yet supported)

	canonical_base: '',

	// @todo
	//canonical_link: true,
	//
	// having only started with vuepress a few days ago,
	// so far, i couldn't figure out a proper way to extend config head
	// and add <link rel="canonical" href="URL.resolve( canonical_base, $page.path )">
	// feel free to tip-in

	// ---------------------------------------------------------------------------

	author: {
		name: 'Kashyap Merai',
		twitter: 'kamerk22'
	},

	// ---------------------------------------------------------------------------

	site: {
		name: 'Kashyap Merai',
		twitter: 'kamerk22'
	},

	// ---------------------------------------------------------------------------

	// order of what gets the highest priority:
	//
	// 1. frontmatter
	// 2. page excerpt
	// 3. content markdown paragraph
	// 4. content regular html <p>

	description_sources: [
		'frontmatter',
		'excerpt',

		// markdown paragraph regex
		//
		/^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/gim,
		//
		// this excludes blockquotes using `(?!^>)`
		///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

		// html paragraph regex
		/<p(?:.*?)>(.*?)<\/p>/i
	],

	// ---------------------------------------------------------------------------

	// order of what gets the highest priority:
	//
	// 1. frontmatter
	// 2. content markdown image such as `![alt text](http://url)`
	// 3. content regular html img

	image_sources: [
		'frontmatter',

		/!\[.*?\]\((.*?)\)/i, // markdown image regex
		/<img.*?src=['"](.*?)['"]/i // html image regex
	]
}
