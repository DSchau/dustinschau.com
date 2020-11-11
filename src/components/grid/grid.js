import React from 'react';

function Grid({ className, children, ...props }) {
  return <div className={`grid lg:grid-cols-2 ${className}`}>{children}</div>;
}

export { Grid };
