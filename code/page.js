import PropTypes from 'prop-types';
import React from 'react';


function isInstructional(title) {
	if (title === "Homepage" || title.startsWith("Docs") || title.startsWith("Blog") || title.startsWith("Go -")) {
		return false;
	}

	return true;
}

/**
 * The page layout component
 */
const Page = ({ title, stylesheet, header, banners, siteBanners, goMeta, main, footer, script, _relativeURL, _ID }) => (
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
			!isInstructional(title)
			? "Public bridges, bots, and integrations. Visit #help:t2bot.io for more information."
			: `Learn how to set up t2bot.io's ${title}`
		} />
		<meta name="description" content={
			!isInstructional(title)
			? "Public bridges, bots, and integrations. Visit #help:t2bot.io for more information."
			: `Learn how to set up t2bot.io's ${title}`
		} />
		<meta property="og:image" content="https://www.t2host.io/assets/img/t2bot-stacked.png" />
		<meta name="keywords" content="matrix, homeserver, bridges, bots, integrations, public"/>
		{
			!!goMeta
			? <meta name="go-import" content={goMeta} />
			: ""
		}

		<link rel="apple-touch-icon" sizes="57x57" href="/assets/img/favicon/apple-icon-57x57.png"/>
		<link rel="apple-touch-icon" sizes="60x60" href="/assets/img/favicon/apple-icon-60x60.png"/>
		<link rel="apple-touch-icon" sizes="72x72" href="/assets/img/favicon/apple-icon-72x72.png"/>
		<link rel="apple-touch-icon" sizes="76x76" href="/assets/img/favicon/apple-icon-76x76.png"/>
		<link rel="apple-touch-icon" sizes="114x114" href="/assets/img/favicon/apple-icon-114x114.png"/>
		<link rel="apple-touch-icon" sizes="120x120" href="/assets/img/favicon/apple-icon-120x120.png"/>
		<link rel="apple-touch-icon" sizes="144x144" href="/assets/img/favicon/apple-icon-144x144.png"/>
		<link rel="apple-touch-icon" sizes="152x152" href="/assets/img/favicon/apple-icon-152x152.png"/>
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicon/apple-icon-180x180.png"/>
		<link rel="icon" type="image/png" sizes="192x192" href="/assets/img/favicon/android-icon-192x192.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="96x96" href="/assets/img/favicon/favicon-96x96.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon/favicon-16x16.png"/>
		<link rel="manifest" href="/assets/img/favicon/manifest.json"/>
		<meta name="msapplication-TileColor" content="#ffffff"/>
		<meta name="msapplication-TileImage" content="/assets/img/favicon/ms-icon-144x144.png"/>
		<meta name="theme-color" content="#ffffff"/>


		<link rel="stylesheet" href={ _relativeURL( `/assets/css/site.css`, _ID ) } />
		{
			stylesheet != undefined
				? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
				: null
		}
	</head>
	<body>
		<div className={"top pagebody page_" + _ID}>
			<header role="banner">
				{ header }
			</header>

			<div className='banners site'>
				{ siteBanners }
			</div>

			<main>
				<div className='banners'>
					{ banners }
				</div>
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
