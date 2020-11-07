import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { CodeBlock } from '../code-block';

const Provider = (props) => (
  <MDXProvider
    components={{
      pre: CodeBlock,
    }}
    {...props}
  />
);

export { Provider as MDXProvider };
