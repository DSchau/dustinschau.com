import React from 'react';

import styles from './seperator.module.css';

function Seperator(props) {
  return <hr className={styles.seperator} {...props} />;
}

export { Seperator };
