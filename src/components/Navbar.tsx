"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
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
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>About Us</Link>
          <Link href="/products" className={`${styles.navLink} ${pathname === '/products' ? styles.active : ''}`}>Products</Link>
          <Link href="/brands" className={`${styles.navLink} ${pathname === '/brands' ? styles.active : ''}`}>Brands</Link>
          <Link href="/licensing" className={`${styles.navLink} ${pathname === '/licensing' ? styles.active : ''}`}>Software Licensing</Link>
          <Link href="/solutions" className={`${styles.navLink} ${pathname === '/solutions' ? styles.active : ''}`}>Solutions</Link>
          <Link href="/services" className={`${styles.navLink} ${pathname === '/services' ? styles.active : ''}`}>Services</Link>
          <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={20} />
          </button>
          <Link href="/contact" className="btn-primary">
            Get in Touch <span className={styles.arrow}>→</span>
          </Link>
          <button className={styles.mobileMenuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className="container">
          <nav className={styles.mobileNavLinks}>
            <Link href="/" className={`${styles.mobileNavLink} ${pathname === '/' ? styles.active : ''}`} onClick={closeMobileMenu}>Home</Link>
            <Link href="/about" className={`${styles.mobileNavLink} ${pathname === '/about' ? styles.active : ''}`} onClick={closeMobileMenu}>About Us</Link>
            <Link href="/products" className={`${styles.mobileNavLink} ${pathname === '/products' ? styles.active : ''}`} onClick={closeMobileMenu}>Products</Link>
            <Link href="/brands" className={`${styles.mobileNavLink} ${pathname === '/brands' ? styles.active : ''}`} onClick={closeMobileMenu}>Brands</Link>
            <Link href="/licensing" className={`${styles.mobileNavLink} ${pathname === '/licensing' ? styles.active : ''}`} onClick={closeMobileMenu}>Software Licensing</Link>
            <Link href="/solutions" className={`${styles.mobileNavLink} ${pathname === '/solutions' ? styles.active : ''}`} onClick={closeMobileMenu}>Solutions</Link>
            <Link href="/services" className={`${styles.mobileNavLink} ${pathname === '/services' ? styles.active : ''}`} onClick={closeMobileMenu}>Services</Link>
            <Link href="/contact" className={`${styles.mobileNavLink} ${pathname === '/contact' ? styles.active : ''}`} onClick={closeMobileMenu}>Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
