import React from 'react'

import * as styles from './box.module.css'

export default function Box({ children }) {
  return (
    <h3 className={styles.box}>{children}</h3>
  )
}
