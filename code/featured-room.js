import React, { Fragment } from 'react';

const FeaturedRoom = ({ _ID, _relativeURL, _body, name, icon, target }) => (
  <Fragment>
    <div className='featured-room'>
        <img src={_relativeURL( `/assets/img/${icon}`, _ID )} title={name} />
        <div>
          <a href={target} title={name}>{name}</a>
          {_body}
        </div>
    </div>
  </Fragment>
);

export default FeaturedRoom;
