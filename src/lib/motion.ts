import { Variants } from "framer-motion";

export const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DURATIONS = {
  micro: 0.2,
  hover: 0.25,
  reveal: 0.55,
  staggerDelay: 0.08,
};

export const VIEWPORT = {
  once: true,
  amount: 0.2,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASING,
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASING,
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: DURATIONS.staggerDelay,
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASING,
    }
  }
};

// Sequence: Navbar -> Badge -> Headline -> Description -> Buttons -> Image
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.45,
      ease: EASING,
    }
  }
};

export const navReveal: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASING,
    }
  }
};

export const drawerReveal: Variants = {
  hidden: { y: "100%" },
  visible: { 
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASING,
    }
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.3,
      ease: EASING,
    }
  }
};

export const footerReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // 70ms stagger
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cardHover: any = {
  rest: { y: 0 },
  hover: { 
    y: -4,
    transition: {
      duration: DURATIONS.hover,
      ease: EASING,
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const imageHover: any = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: {
      duration: 0.35,
      ease: EASING,
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buttonInteraction: any = {
  hover: { scale: 1.02, transition: { duration: DURATIONS.micro, ease: EASING } },
  tap: { scale: 0.97, transition: { duration: 0.12, ease: EASING } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logoHover: any = {
  rest: { filter: "grayscale(100%)", opacity: 0.85, scale: 1 },
  hover: { 
    filter: "grayscale(0%)", 
    opacity: 1, 
    scale: 1.03,
    transition: {
      duration: 0.25,
      ease: EASING,
    }
  }
};
