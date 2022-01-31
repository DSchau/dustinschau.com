import React from 'react'
import format from 'date-fns/format'

import * as styles from './experience.module.css'

export default function Experience({ className, jobTitle, dates, employer, description, items }) {
  let formattedDates = dates.map(date => format(new Date(date), 'MMM yyyy'))

  if (formattedDates.length === 1) {
    formattedDates = formattedDates.concat('Present')
  }
  return (
    <section className={[styles.container, className].filter(Boolean).join(' ')}>
      <h4 className={styles.employer}>{employer}</h4>
      <h3 className={styles.title}>{jobTitle} <span className={styles.date}>{formattedDates[0]} &mdash; {formattedDates[1]}</span></h3>
      <p className={styles.description}>{description}</p>
      {items && items.length > 0 ? (
        <ul className={styles.list}>
          {
            items.map((item, index) => <li className={styles.item} key={`${item}-${index}`}>{item}</li>)
          }
        </ul>
      ) : null}
    </section>
  )
}
