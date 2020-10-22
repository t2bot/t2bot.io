import React, { Fragment } from 'react';

const PublicKeys = ({ _ID, _relativeURL, _body, icon, displayName, userId, sessionName, sessionId, sessionKey }) => (
  <Fragment>
    <div className='public-key'>
        <img src={_relativeURL( `/assets/img/${icon}`, _ID )} title={`${displayName} (${userId})`} />
        <div>
            <strong className='public-key-displayName'>{displayName}</strong>
            <span className='public-key-userId'>({userId})</span>
            <div>
                <strong>Session Name:</strong>
                <code className='public-key-sessionName'>{sessionName}</code>
            </div>
            <div>
                <strong>Session ID:</strong>
                <code className='public-key-sessionId'>{sessionId}</code>
            </div>
            <div>
                <strong>Session Key:</strong>
                <code className='public-key-sessionKey'>{sessionKey}</code>
            </div>
        </div>
    </div>
  </Fragment>
);

export default PublicKeys;
