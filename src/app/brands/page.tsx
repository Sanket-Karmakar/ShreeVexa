"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShoppingCart, Info } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";

const brands = [
  "Dell", "HP", "Lenovo", "ASUS", "Acer", "Apple", "Logitech", "Microsoft", 
  "Google", "Cisco", "APC", "Samsung", "LG", "Epson", "Canon", "Brother", 
  "Hikvision", "Dahua", "Honeywell", "Zebra", "Seagate", "Western Digital", 
  "Kingston", "SanDisk", "Intel", "AMD", "NVIDIA"
];

export default function Brands() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
  return (
    <div className={styles.brands}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <motion.div 
            className={styles.heroContent}
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItem} className={styles.heroTagContainer}>
              <span className={styles.heroTag}>OUR BRANDS</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Trusted Global<br />
              Brands for a<br />
              <span className={styles.accent}>Stronger Tomorrow.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              Explore a wide range of leading global IT brands available for resale to meet your business and technology needs.
            </motion.p>
            <motion.div variants={heroItem} className={styles.heroActions}>
              <Link href="/contact">
                <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Request a Quote <ArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <motion.img 
              src="/brands-hero-image.jpg" 
              alt="Global IT Brands" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <motion.section 
        className={styles.trustBanner}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <motion.div 
            className={styles.trustGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Wide Range of Global Brands</span>
            </motion.div>
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Quality Products</span>
            </motion.div>
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Competitive Pricing</span>
            </motion.div>
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <ShoppingCart className={styles.trustIcon} size={24} />
              <span>Corporate Procurement Orders</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Brands Grid */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#f8fafc' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.heroTagContainer}>
                <span className={styles.sectionTag}>OUR BRANDS</span>
                <span className={styles.heroLine}></span>
              </div>
              <h2 className="section-title">Leading Brands. Endless Possibilities.</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc}>
                We offer a wide range of global IT brands available for resale. Explore our trusted brands to find the right fit for your business needs.
              </p>
            </div>
          </div>

          <motion.div 
            className={styles.brandGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {brands.map((brand, idx) => (
              <motion.div 
                key={idx} 
                className={styles.brandCard} 
                variants={staggerItem}
                whileHover={logoHover.hover}
              >
                <span className={styles.brandName}>{brand}</span>
              </motion.div>
            ))}
            <motion.div className={styles.brandCardAction} variants={staggerItem} whileHover={{ scale: 1.03 }}>
              <span>Many More Brands Available on Request.</span>
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>
          
          <div className={styles.disclaimer}>
            <Info size={20} className={styles.infoIcon} />
            <p>
              All brand names and logos are the property of their respective owners and are used here for identification purposes only. These brands are available for resale through Shreevexa IT Solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className={styles.cta}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaTag}>LET&apos;S BUILD TOGETHER</span>
              <h2>Find the Right Products for Your Business.</h2>
              <p>Get in touch with our team for product availability, pricing and bulk orders.</p>
            </div>
            <div className={styles.ctaActions}>
              <motion.a href="#" className="btn-primary" style={{ background: '#25D366' }} variants={buttonInteraction} whileHover="hover" whileTap="tap">Chat on WhatsApp</motion.a>
              <Link href="/contact">
                <motion.div className="btn-primary" style={{ background: 'white', color: 'var(--text-main)' }} variants={buttonInteraction} whileHover="hover" whileTap="tap">Request a Quote</motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
