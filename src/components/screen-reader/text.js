import React from 'react';

export const ScreenReaderText = (props) => (
  <span
    style={{
      border: 0,
      clip: `rect(0, 0, 0, 0)`,
      height: 1,
      margin: -1,
      overflow: `hidden`,
      padding: 0,
      position: `absolute`,
      whiteSpace: `nowrap`,
      width: 1,
    }}
    {...props}
  />
);
