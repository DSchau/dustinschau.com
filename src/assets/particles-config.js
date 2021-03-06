const config = {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: '#FFFFFF',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FFFFFF',
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  retina_detect: true,
}

export default config
