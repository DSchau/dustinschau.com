import React from 'react';

import { Navigation } from '../navigation';
import { convertToRoman } from '../../utils/';

import * as styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={[styles.footer].join(' ')}>
      &copy; {convertToRoman(2015)} - {convertToRoman(new Date().getFullYear())}{' '}
      Dustin Schau
      <Navigation className={styles.navigation} />
    </footer>
  );
}
