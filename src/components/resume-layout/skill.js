import React from 'react'

import * as styles from './skill.module.css'

import Box from './box'

export default function Skill({ title, items }) {
  return (
    <div className={styles.container}>
      <Box>{title}</Box>
      <ul>
        {items.map((item, index) => (
          <li className={styles.item} key={`${item}-${item.index}`}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
