"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Laptop, Monitor, Keyboard, Mouse, Headphones, Camera, Printer, Scan, BatteryCharging, Projector, Tv, Network, HardDrive, Server, Cctv, Fingerprint, Lock, Barcode, CreditCard, Presentation, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { 
  EASING,
  fadeUp,
  staggerContainer,
  staggerItem,
  heroContainer,
  heroItem,
  cardHover,
  VIEWPORT,
  buttonInteraction 
} from "@/lib/motion";

const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "Desktop Computers", icon: Monitor },
  { name: "Workstations", icon: Server },
  { name: "Monitors", icon: Tv },
  { name: "Keyboards", icon: Keyboard },
  { name: "Mouse", icon: Mouse },
  { name: "Headsets", icon: Headphones },
  { name: "Webcams", icon: Camera },
  { name: "Printers", icon: Printer },
  { name: "Scanners", icon: Scan },
  { name: "UPS", icon: BatteryCharging },
  { name: "Projectors", icon: Projector },
  { name: "Interactive Displays", icon: Presentation },
  { name: "Networking", icon: Network },
  { name: "Storage", icon: HardDrive },
  { name: "Servers", icon: Server },
  { name: "CCTV & Surveillance", icon: Cctv },
  { name: "Biometric Attendance Systems", icon: Fingerprint },
  { name: "Access Control Systems", icon: Lock },
  { name: "Barcode Scanners", icon: Barcode },
  { name: "POS Machines", icon: CreditCard },
  { name: "Smart Meeting Room Solutions", icon: Presentation },
];

export default function Products() {
  return (
    <div className={styles.products}>
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
              <span className={styles.heroTag}>OUR PRODUCTS</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Explore Our <span className={styles.accent}>Product</span><br />
              <span className={styles.accent}>Range</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              From everyday essentials to advanced enterprise solutions, we offer a complete range of IT products to meet your business needs.
            </motion.p>
            <motion.div variants={heroItem} className={styles.heroActions}>
              <Link href="/contact">
                <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Get a Quote <ArrowRight size={18} />
                </motion.div>
              </Link>
              <Link href="/brands">
                <motion.div className={styles.btnOutlineDark} variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Explore Brands
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <motion.img 
              src="/products-hero-image.jpg" 
              alt="Products Range" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#f8fafc' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <motion.div 
            className={styles.categoriesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div 
                  key={index} 
                  className={styles.categoryCard}
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={36} strokeWidth={1.5} className={styles.categoryIcon} />
                  </div>
                  <h3>{cat.name}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
