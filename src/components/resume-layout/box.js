import React from 'react'

import * as styles from './box.module.css'

export default function Box({ children, className, ...rest }) {
  return (
    <h3 className={[styles.box, className].filter(Boolean).join(' ')} {...rest}>{children}</h3>
  )
}
