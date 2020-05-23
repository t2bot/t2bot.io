import React, { Fragment } from 'react';

const FeaturedIntegration = ({ _ID, _relativeURL, _body, name, icon, target }) => (
  <Fragment>
    <div className='featured-integration'>
        <img src={_relativeURL( `/assets/img/${icon}`, _ID )} title={name} />
        <span>{name}</span>
        <div className='description'>
            {_body}
        </div>
        <a href={target} title="Learn more">Learn more</a>
    </div>
  </Fragment>
);

export default FeaturedIntegration;
