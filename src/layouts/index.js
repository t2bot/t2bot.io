import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "./index.css";

const Header = () => (
    <div style={{
        background: '#29395c',
        marginBottom: '1.2rem',
    }}>
        <div style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
        }}>
            <h1 style={{margin: 0, display: "inline-block"}}>
                <Link to="/" style={{
                    color: 'white',
                    textDecoration: 'none',
                }}>
                    <img src="/img/banner.png" style={{margin: 0}} />
                </Link>
            </h1>
            <div style={{
                float: "right",
                marginTop: "0.6rem"
            }}>
                <div className="nav-link"><a href="https://matrix.to/#/#help:linuxgaming.life">#help:linuxgaming.life</a></div>
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    </div>
);

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet>
            <title>linuxgaming.life</title>
            <meta name="description" content="Public bridges, bots, and integrations. Visit #help:linuxgaming.life for more information."/>
            <meta name="keywords" content="matrix, homeserver, bridges, bots, integrations, public"/>

            <meta property="og:image" content="/img/preview-image.png"/>
            <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />

            <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/img/favicon/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/img/favicon/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
        </Helmet>
        <Header />
        <div style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
        }}>
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper
