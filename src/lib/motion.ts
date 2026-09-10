"use client";

import { useState, useEffect } from "react";
import { Variants } from "framer-motion";

export const EASING: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const VIEWPORT = { once: true, amount: 0.2 };

// Profiles
const desktopMotion = {
  durations: { reveal: 0.55, staggerDelay: 0.08, hover: 0.25, micro: 0.2 },
  distances: { reveal: 32, hover: -4 },
  scales: { imageHover: 1.03, buttonHover: 1.02, buttonTap: 0.97, logoHover: 1.03 },
  features: { hoverEnabled: true }
};

const tabletMotion = {
  durations: { reveal: 0.45, staggerDelay: 0.05, hover: 0.25, micro: 0.2 },
  distances: { reveal: 24, hover: -2 },
  scales: { imageHover: 1.02, buttonHover: 1.02, buttonTap: 0.97, logoHover: 1.02 },
  features: { hoverEnabled: true }
};

const mobileMotion = {
  durations: { reveal: 0.35, staggerDelay: 0.02, hover: 0, micro: 0.2 },
  distances: { reveal: 16, hover: 0 },
  scales: { imageHover: 1, buttonHover: 1, buttonTap: 0.97, logoHover: 1 },
  features: { hoverEnabled: false }
};

export function useResponsiveMotion() {
  const [profile, setProfile] = useState(desktopMotion);
  
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
    
    const updateProfile = () => {
      if (reducedMotionQuery.matches) {
        setProfile(mobileMotion); // Use fastest/lightest config if reduced motion requested
        return;
      }
      if (mobileQuery.matches) {
        setProfile(mobileMotion);
      } else if (tabletQuery.matches) {
        setProfile(tabletMotion);
      } else {
        setProfile(desktopMotion);
      }
    };
    
    updateProfile(); // Set immediately on mount
    
    reducedMotionQuery.addEventListener("change", updateProfile);
    mobileQuery.addEventListener("change", updateProfile);
    tabletQuery.addEventListener("change", updateProfile);
    
    return () => {
      reducedMotionQuery.removeEventListener("change", updateProfile);
      mobileQuery.removeEventListener("change", updateProfile);
      tabletQuery.removeEventListener("change", updateProfile);
    };
  }, []);

  const p = profile;

  // Build variants based on the active profile
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: p.distances.reveal },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: p.durations.reveal, ease: EASING }
    }
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: p.durations.reveal, ease: EASING }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: p.durations.staggerDelay }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: p.distances.reveal },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: p.durations.reveal, ease: EASING }
    }
  };

  // Sequence: Navbar -> Badge -> Headline -> Description -> Buttons -> Image
  const heroContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const heroItem: Variants = {
    hidden: { opacity: 0, y: p.distances.reveal },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: p.durations.reveal, ease: EASING }
    }
  };

  const navReveal: Variants = {
    hidden: { opacity: 0, y: -24 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: desktopMotion.durations.reveal, ease: EASING }
    }
  };

  const drawerReveal: Variants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0,
      transition: { duration: desktopMotion.durations.reveal, ease: EASING }
    },
    exit: {
      y: "100%",
      transition: { duration: 0.3, ease: EASING }
    }
  };

  const footerReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: p.durations.staggerDelay }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cardHover: any = {
    rest: { y: 0 },
    hover: p.features.hoverEnabled ? { 
      y: p.distances.hover,
      transition: { duration: p.durations.hover, ease: EASING }
    } : { y: 0 }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const imageHover: any = {
    rest: { scale: 1 },
    hover: p.features.hoverEnabled ? { 
      scale: p.scales.imageHover,
      transition: { duration: 0.35, ease: EASING }
    } : { scale: 1 }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buttonInteraction: any = {
    hover: p.features.hoverEnabled ? { scale: p.scales.buttonHover, transition: { duration: p.durations.micro, ease: EASING } } : { scale: 1 },
    tap: { scale: p.scales.buttonTap, transition: { duration: 0.12, ease: EASING } },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logoHover: any = {
    rest: { filter: "grayscale(100%)", opacity: 0.85, scale: 1 },
    hover: p.features.hoverEnabled ? { 
      filter: "grayscale(0%)", 
      opacity: 1, 
      scale: p.scales.logoHover,
      transition: { duration: 0.25, ease: EASING }
    } : { filter: "grayscale(100%)", opacity: 0.85, scale: 1 }
  };

  return {
    fadeUp,
    fadeIn,
    staggerContainer,
    staggerItem,
    heroContainer,
    heroItem,
    navReveal,
    drawerReveal,
    footerReveal,
    cardHover,
    imageHover,
    buttonInteraction,
    logoHover
  };
}
