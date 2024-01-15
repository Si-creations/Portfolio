export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.3, //oneskorenie medzi animáciami pre rôzne deti alebo prvky
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: -200 },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const footerAnim = {
  hidden: { y: 200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const leftIncoming = {
  hidden: { x: -200, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const rightIncoming = {
  hidden: { x: 200, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const scrollReveal2 = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const rightIncomingx = {
  hidden: { x: 200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    x: -400,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1, ease: "easeOut" } },
  exit: { width: "0%", transition: { duration: 1 } },
};

export const pull = {
  hidden: { opacity: 0, y: -200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.75 },
  },
  exit: {
    
    y: 100,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};