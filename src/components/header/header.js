import React from 'react';
import { Link } from 'gatsby';

import { Navigation } from './navigation';
import useMatchMedia from '../../hooks/use-match-media';

import styles from './header.module.css';

const getParticlesConfig = (particlesConfig, options) => {
  let config = Object.assign({}, particlesConfig);
  if (options.prefersReducedMotion) {
    config.particles.move.enable = false;
  }

  if (options.compressed) {
    config.particles.size.value = 50;
    config.particles.number.value = 10;
    config.particles.number.density.value_area = 100;
  }
  return config;
};

export function Header({ compressed = true }) {
  const prefersReducedMotion = useMatchMedia(
    '(prefers-reduced-motion: reduce)'
  );
  React.useEffect(() => {
    const loadDeps = async () => {
      const [particlesModule, particlesConfigModule] = await Promise.all([
        import('tsparticles'),
        import('../../assets/particles-config-square'),
      ]);

      const config = getParticlesConfig(particlesConfigModule.default, {
        prefersReducedMotion,
        compressed,
      });

      particlesModule.particlesJS('header', config);
    };

    loadDeps();
  }, [compressed, prefersReducedMotion]);
  return (
    <header
      id="header"
      className={[styles.header]
        .concat(compressed ? styles.compressed : [])
        .join(' ')}
    >
      {!compressed && <Navigation className={styles.navigation} />}
      <span className={styles.content}>
        <h1 className={styles.title}>
          <Link to="/" className={styles.link}>
            <span className={styles.firstName}>Dustin</span>
            <span className={styles.lastName}>Schau</span>
          </Link>
        </h1>

        {!compressed && (
          <h2 className={styles.subTitle}>
            Product Leader <span className={styles.ampersand}>&amp;</span>{' '}
            Engineer
          </h2>
        )}
      </span>
    </header>
  );
}
