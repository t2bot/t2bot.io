import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import "./index.css";

const Header = () => (
    <div style={{
        background: '#428cf4',
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
                }}>t2bot.io</Link>
            </h1>
            <div style={{
                float: "right",
                marginTop: "0.6rem"
            }}>
                <div className="nav-link"><a href="https://status.t2bot.io">status.t2bot.io</a></div>
                <div className="nav-link"><a href="https://matrix.to/#/#help:t2bot.io">#help:t2bot.io</a></div>
            </div>
        </div>
    </div>
);

const TemplateWrapper = ({children}) => (
    <div>
        <Helmet title="t2bot.io" meta={[
            {
                name: 'description',
                content: 'Public bridges, bots, and integrations. Visit #help:t2bot.io for more information.'
            },
            {
                name: 'keywords',
                content: 'matrix, homeserver, bridges, bots, integrations, public'
            },
        ]}/>
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
