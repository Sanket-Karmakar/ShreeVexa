"use client";

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import { footerReveal, staggerItem, VIEWPORT, buttonInteraction } from '@/lib/motion';

export default function Footer() {
  return (
    <motion.footer 
      className={styles.footer}
      variants={footerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <div className={`container ${styles.footerContainer}`}>
        <motion.div className={styles.brandCol} variants={staggerItem}>
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
          <p className={styles.desc}>
            Your trusted IT partner for innovative solutions, reliable service and a brighter digital future.
          </p>
          <div className={styles.social}>
            {/* Social links removed due to missing icons */}
          </div>
        </motion.div>

        <motion.div className={styles.linksCol} variants={staggerItem}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/brands">Brands</Link></li>
            <li><Link href="/licensing">Software Licensing</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </motion.div>

        <motion.div className={styles.linksCol} variants={staggerItem}>
          <h4 className={styles.colTitle}>Our Solutions</h4>
          <ul className={styles.linkList}>
            <li><Link href="/solutions">End-user Computing</Link></li>
            <li><Link href="/solutions">IT Infrastructure</Link></li>
            <li><Link href="/solutions">Security Solutions</Link></li>
            <li><Link href="/solutions">Printing & Scanning</Link></li>
            <li><Link href="/solutions">Collaboration Solutions</Link></li>
            <li><Link href="/solutions">Smart Meeting Rooms</Link></li>
            <li><Link href="/solutions">Retail & Warehousing</Link></li>
            <li><Link href="/solutions">More Solutions</Link></li>
          </ul>
        </motion.div>

        <motion.div className={styles.contactCol} variants={staggerItem}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>123, Business Park,<br />Your City, Maharashtra, India</span>
            </li>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <span>info@shreevexa.com</span>
            </li>
            <li>
              <Clock size={18} className={styles.contactIcon} />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div className={styles.bottomBar} variants={staggerItem}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>© 2026 Shreevexa IT Solutions. All Rights Reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/terms">Terms & Conditions</Link>
            <span className={styles.separator}>|</span>
            <Link href="/sitemap">Sitemap</Link>
          </div>
          <motion.button 
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            variants={buttonInteraction}
            whileHover="hover"
            whileTap="tap"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </motion.div>
    </motion.footer>
  );
}
