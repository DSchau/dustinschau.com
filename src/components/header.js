import React from 'react'

import styles from './header.module.css'

import useMatchMedia from '../hooks/useMatchMedia'

function Header({ compressed = true }) {
  const [prefersReducedMotion] = useMatchMedia('(prefers-reduced-motion: reduce)')
  React.useEffect(() => {
    const loadDeps = async () => {
      const [particlesModule, particlesConfigModule] = await Promise.all([
        import('tsparticles'),
        import('../assets/particles-config-square')
      ])

      let config = Object.assign({}, particlesConfigModule.default)
      if (prefersReducedMotion) {
        config.particles.move.enable = false
      }

      particlesModule.particlesJS('header', config)
    }

    loadDeps()
  }, [prefersReducedMotion])
  return (
    <header id="header" className={[styles.header].concat(compressed ? styles.compressed : []).join(' ')}>
      <span className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.firstName}>Dustin</span>
          <span className={styles.lastName}>Schau</span>
        </h1>
      </span>
    </header>
  )
}

export default Header
