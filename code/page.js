import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page layout component
 */
const Page = ({ title, stylesheet, header, main, footer, script, _relativeURL, _ID }) => (
	<html>
	<head>
		<title>t2bot.io - { title }</title>
		<meta charSet="utf-8" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:title" content={
			title == "Homepage"
			? "t2bot.io"
			: `t2bot.io - ${title}`
		} />
		<meta property="og:description" content={
			title == "Homepage" || title.startsWith("Docs")
			? "Public bridges, bots, and integrations. Visit #help:t2bot.io for more information."
			: `Learn how to set up t2bot.io's ${title}`
		} />
		<meta name="description" content={
			title == "Homepage" || title.startsWith("Docs")
			? "Public bridges, bots, and integrations. Visit #help:t2bot.io for more information."
			: `Learn how to set up t2bot.io's ${title}`
		} />
		<meta property="og:image" content="https://www.t2host.io/assets/img/t2bot-stacked.png" />


		<link rel="stylesheet" href={ _relativeURL( `/assets/css/site.css`, _ID ) } />
		{
			stylesheet != undefined
				? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
				: null
		}
	</head>
	<body>
		<div className={"top page_" + _ID}>
			<header role="banner">
				{ header }
			</header>

			<main>
				{ main }
			</main>
		</div>

		<footer>
			{ footer }
		</footer>

		{
			script != undefined
				? ( <script src={ _relativeURL( `/assets/js/${ script }.js`, _ID ) } /> )
				: null
		}
	</body>
	</html>
);

Page.propTypes = {
/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
