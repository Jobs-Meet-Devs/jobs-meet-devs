export const textAnimate = {
  hide: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

export const imageAnimate = {
  hide: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.5,
    },
  },
};

export const headerAnimate = {
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.5,
    },
  },
};

export const wordAnimate = {
  hide: {
    opacity: 0.1,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};
