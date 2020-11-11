import React from 'react';

function Grid({ className, children, wrapper: Wrapper = 'div', ...props }) {
  return (
    <Wrapper className={`grid lg:grid-cols-2 ${className}`} {...props}>
      {children}
    </Wrapper>
  );
}

export { Grid };
