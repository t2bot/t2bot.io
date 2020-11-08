import React, { Fragment } from 'react';

const SmallHero = ({ _ID, _relativeURL, _body }) => (
  <Fragment>
    <div className='hero hero-sm'>
        {_body}
    </div>
  </Fragment>
);

export default SmallHero;
