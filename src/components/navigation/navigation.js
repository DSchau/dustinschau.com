import React from 'react';
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
} from 'react-icons/io';

import * as styles from './navigation.module.css';

function Navigation({ className, ...props }) {
  return (
    <nav className={[styles.nav].concat(className).join(' ')} {...props}>
      <ul className={styles.links}>
        {[
          ['Github', 'https://github.com/dschau', IoLogoGithub],
          ['LinkedIn', 'https://linkedin.com/dschau', IoLogoLinkedin],
          ['Twitter', 'https://twitter.com/schaudustin', IoLogoTwitter],
          [
            'Facebook',
            'https://www.facebook.com/people/Dustin-Schau/100004599014794',
            IoLogoFacebook,
          ],
          /* TODO: blog, color mode */
        ].map(([text, link, Icon]) => (
          <li key={text}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={text}
            >
              <Icon className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Navigation };
