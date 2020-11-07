export default {
  particles: {
    number: {
      value: 5,
      density: {
        enable: true,
        value_area: 250,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'edge',
    },
    opacity: {
      value: 0.0125,
      random: true,
    },
    size: {
      value: 180,
      random: false,
      anim: {
        enable: true,
        speed: 5,
        size_min: 40,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'top',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
  },
  retina_detect: true,
};
