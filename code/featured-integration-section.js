import React, { Fragment } from 'react';

const FeaturedIntegrationSection = ({ _ID, _relativeURL, _body, integrations, spacer }) => (
  <Fragment>
    {_body}
    <div className="featured">
        {integrations.map(i => (
            <div className='featured-integration'>
                <img src={_relativeURL( `/assets/img/${i.icon}`, _ID )} title={i.name} />
                <span>{i.name}</span>
                <div className='description'>
                    {i.body}
                </div>
                <a href={i.target} title="Learn more">Learn more</a>
            </div>
        ))}
    </div>
    {spacer ? <div className="spacer">&nbsp;</div> : null}
  </Fragment>
);

export default FeaturedIntegrationSection;
