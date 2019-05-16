import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function renderItem(i) {
    return (
        <div className='infrastructure-item' key={i}>
            <h4>{i.name}</h4>
            <p>{i.description}</p>
            <div className='infrastructure-metrics'>
                <div className='infrastructure-metric'>
                    <span className='infrastructure-metric-number'>{i.cores}</span>
                    <span className='infrastructure-metric-title'>CPU Cores</span>
                </div>
                <div className='infrastructure-metric'>
                    <span className='infrastructure-metric-number'>{i.memory} GB</span>
                    <span className='infrastructure-metric-title'>Memory</span>
                </div>
                <div className='infrastructure-metric'>
                    <span className='infrastructure-metric-number'>{i.storage} GB</span>
                    <span className='infrastructure-metric-title'>Storage</span>
                </div>
            </div>
        </div>
    );
}

const InfrastructurePage = ({ _body, servers }) => (
  <Fragment>
      {_body}
      <div className='infrastructure-items'>
        {servers.map(s => renderItem(s))}
      </div>
  </Fragment>
);

export default InfrastructurePage;
