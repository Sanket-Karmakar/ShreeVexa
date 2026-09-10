"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import styles from './Navbar.module.css';
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/brands', label: 'Brands' },
  { path: '/licensing', label: 'Software Licensing' },
  { path: '/solutions', label: 'Solutions' },
  { path: '/services', label: 'Services' },
];

export default function Navbar() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navShadow = useTransform(scrollY, [0, 50], ["none", "0 10px 30px rgba(0,0,0,0.4)"]);
  const navBg = useTransform(scrollY, [0, 50], ["rgba(11, 17, 32, 1)", "rgba(11, 17, 32, 0.9)"]);
  const navBlur = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(12px)"]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header 
        className={styles.header}
        variants={navReveal}
        initial="hidden"
        animate="visible"
        style={{
          boxShadow: navShadow,
          backgroundColor: navBg,
          backdropFilter: navBlur,
        }}
      >
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <div className={styles.hex}>
                <div className={styles.hexInner}>S</div>
              </div>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoBrand}>SHREE<span className={styles.logoAccent}>VEXA</span></span>
              <span className={styles.logoSub}>IT SOLUTIONS</span>
            </div>
          </Link>

          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}>
                {link.label}
                {pathname === link.path && (
                  <motion.div layoutId="navUnderline" className={styles.activeUnderline} />
                )}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconBtn} aria-label="Search">
              <Search size={20} />
            </button>
            <Link href="/contact">
              <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                Get in Touch <span className={styles.arrow}>→</span>
              </motion.div>
            </Link>
            <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMobileMenu}
            />
            <motion.div 
              className={styles.mobileDrawer}
              variants={drawerReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="container">
                <motion.nav 
                  className={styles.mobileNavLinks}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.path} variants={staggerItem}>
                      <Link 
                        href={link.path} 
                        className={`${styles.mobileNavLink} ${pathname === link.path ? styles.active : ''}`} 
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
