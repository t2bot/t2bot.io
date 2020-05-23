import React, { Fragment } from 'react';

function renderItem(i) {
    if (i.storage > 9000) {
        i.storage = `${i.storage / 1000} TB`;
    } else {
        i.storage = `${i.storage} GB`;
    }
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
                    <span className='infrastructure-metric-number'>{i.storage}</span>
                    <span className='infrastructure-metric-title'>{i.storageType} Storage</span>
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
