"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Diamond, Award, Users, Gem } from "lucide-react";
import styles from "./page.module.css";
import { 
  EASING,
  fadeUp,
  staggerContainer,
  staggerItem,
  heroContainer,
  heroItem,
  VIEWPORT,
  buttonInteraction 
} from "@/lib/motion";

export default function About() {
  return (
    <div className={styles.about}>
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
              <span className={styles.heroTag}>ABOUT US</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Driven by<br />
              <span className={styles.accent}>Innovation.</span><br />
              Built on <span className={styles.accent}>Trust.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              At Shreevexa IT Solutions, we believe in the power of technology to transform businesses, create opportunities and build a smarter tomorrow.
            </motion.p>
            <motion.div variants={heroItem} className={styles.heroActions}>
              <Link href="/about">
                <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Our Journey <ArrowRight size={18} />
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div className={styles.btnOutlineDark} variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Get in Touch
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <motion.img 
              src="/about-hero-image.jpg" 
              alt="About Shreevexa" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#ffffff' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <motion.div 
            className={styles.introGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.introText} variants={staggerItem}>
              <div className={styles.heroTagContainer}>
                <span className={styles.sectionTag}>WHO WE ARE</span>
                <span className={styles.heroLine}></span>
              </div>
              <h2 className={styles.sectionTitleLarge}>A Trusted IT Partner<br/>for a Digital Tomorrow.</h2>
              <p className={styles.introDesc}>
                Shreevexa IT Solutions is a forward-thinking technology company providing reliable IT products, innovative solutions and end-to-end services to businesses, institutions and organizations. We combine expertise, innovation and a customer-first approach to help our clients grow, scale and stay ahead in a constantly evolving digital world.
              </p>
              <Link href="/services">
                <motion.div className="btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }} variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Discover More <ArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div className={styles.introStatsWrapper} variants={staggerItem}>
              <div className={styles.statCard}>
                <h3 className={styles.statCardNumber}>250+</h3>
                <p className={styles.statCardLabel}>Happy Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Vision Values */}
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
            className={styles.mvvGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.mvvCard} variants={staggerItem}>
              <div className={styles.cardIconWrapper} style={{ background: '#f0f5ff' }}>
                <Target size={24} color="#3b82f6" />
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDesc}>To deliver innovative and reliable IT solutions that empower businesses and create lasting value.</p>
            </motion.div>
            
            <motion.div className={styles.mvvCard} variants={staggerItem}>
              <div className={styles.cardIconWrapper} style={{ background: '#ecfdf5' }}>
                <Eye size={24} color="#10b981" />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDesc}>To be a leading IT solutions provider, recognized for innovation, trust and customer success.</p>
            </motion.div>

            <motion.div className={styles.mvvCard} variants={staggerItem}>
              <div className={styles.cardIconWrapper} style={{ background: '#f5f3ff' }}>
                <Diamond size={24} color="#a855f7" />
              </div>
              <h3 className={styles.cardTitle}>Our Values</h3>
              <ul className={styles.valuesList}>
                <li><Award size={16} className={styles.valueIcon} /> Integrity in everything we do</li>
                <li><Award size={16} className={styles.valueIcon} /> Customer success is our priority</li>
                <li><Award size={16} className={styles.valueIcon} /> Innovation for a better tomorrow</li>
                <li><Award size={16} className={styles.valueIcon} /> Commitment to excellence</li>
                <li><Award size={16} className={styles.valueIcon} /> Building long-term relationships</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.statsRow}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.statItem} variants={staggerItem}>
              <div className={styles.statIcon}><Users size={20} /></div>
              <strong>250+</strong>
              <span>Happy Clients</span>
            </motion.div>
            <motion.div className={styles.statItem} variants={staggerItem}>
              <div className={styles.statIcon}><Target size={20} /></div>
              <strong>500+</strong>
              <span>Projects Completed</span>
            </motion.div>
            <motion.div className={styles.statItem} variants={staggerItem}>
              <div className={styles.statIcon}><Award size={20} /></div>
              <strong>5+</strong>
              <span>Years of Experience</span>
            </motion.div>
            <motion.div className={styles.statItem} variants={staggerItem}>
              <div className={styles.statIcon}><Gem size={20} /></div>
              <strong>99%</strong>
              <span>Client Satisfaction</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
