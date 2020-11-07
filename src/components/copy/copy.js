import React from 'react';
import PropTypes from 'prop-types';

import { ScreenReaderText } from '../screen-reader';
import { copyToClipboard } from '../../utils';
import styles from './copy.module.css';

const delay = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));

function Copy({
  className,
  content,
  duration = 5000,
  fileName = '',
  trim = false,
}) {
  const [copied, setCopied] = React.useState(false);

  const label = copied
    ? `${fileName ? fileName + ` ` : ``}copied to clipboard`
    : `${fileName ? fileName + `: ` : ``}copy code to clipboard`;

  return (
    <button
      name={label}
      className={[styles.button].concat(className).join(' ')}
      disabled={copied}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content);

        setCopied(true);

        await delay(duration);

        setCopied(false);
      }}
    >
      {copied ? `Copied` : `Copy`}
      <ScreenReaderText aria-roledescription="status">{label}</ScreenReaderText>
    </button>
  );
}

Copy.propTypes = {
  content: PropTypes.string.isRequired,
  duration: PropTypes.number,
  trim: PropTypes.bool,
};

export { Copy };
