import React from 'react';

import * as styles from './seperator.module.css';

function Seperator(props) {
  return <hr className={styles.seperator} {...props} />;
}

export { Seperator };
