import React, { Fragment } from 'react';

const FeaturedIntegrationSection = ({ _ID, _relativeURL, _body, integrations, spacer, footer }) => (
  <Fragment>
    {_body}
    <div className="featured">
        {integrations.map((i, i2) => (
            <div className='featured-integration' key={i2}>
                <img src={_relativeURL( `/assets/img/${i.icon}`, _ID )} title={i.name} />
                <span>{i.name}</span>
                <div className='description'>
                    {i.body}
                </div>
                <a href={i.target} title="Learn more">Learn more</a>
            </div>
        ))}
    </div>
    {footer ? <div dangerouslySetInnerHTML={{__html: footer}}></div> : null}
    {spacer ? <div className="spacer">&nbsp;</div> : null}
  </Fragment>
);

export default FeaturedIntegrationSection;
