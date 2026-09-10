"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Laptop, Monitor, Keyboard, Mouse, Headphones, Camera, Printer, Scan, BatteryCharging, Projector, Tv, Network, HardDrive, Server, Cctv, Fingerprint, Lock, Barcode, CreditCard, Presentation, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";
import { Card } from "@/components/Card";

const categories = [
  { name: "Laptops", icon: Laptop, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Desktop Computers", icon: Monitor, image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Workstations", icon: Server, image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Monitors", icon: Tv, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Keyboards", icon: Keyboard, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Mouse", icon: Mouse, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Headsets", icon: Headphones, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Webcams", icon: Camera, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Printers", icon: Printer, image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Scanners", icon: Scan, image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "UPS", icon: BatteryCharging, image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Projectors", icon: Projector, image: "https://images.unsplash.com/photo-1579893962635-f09b55db526a?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Interactive Displays", icon: Presentation, image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Networking", icon: Network, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Storage", icon: HardDrive, image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Servers", icon: Server, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "CCTV & Surveillance", icon: Cctv, image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Biometric Attendance Systems", icon: Fingerprint, image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Access Control Systems", icon: Lock, image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Barcode Scanners", icon: Barcode, image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "POS Machines", icon: CreditCard, image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400" },
  { name: "Smart Meeting Room Solutions", icon: Presentation, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600&h=400" },
];

export default function Products() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
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
                <Card 
                  key={index} 
                  className={styles.categoryCard}
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                  imageSrc={cat.image}
                  imageAlt={cat.name}
                  imageRatio="product"
                >
                  <div className={styles.cardInner}>
                    <div className={styles.iconWrapper}>
                      <Icon size={24} strokeWidth={1.5} className={styles.categoryIcon} />
                    </div>
                    <h3 className={styles.categoryTitle}>{cat.name}</h3>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
