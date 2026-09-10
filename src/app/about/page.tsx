"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Diamond, Award, Users, Gem } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";
import { Card } from "@/components/Card";

export default function About() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
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
              <Card 
                className={styles.statCard}
                title={<h3 className={styles.statCardNumber}>250+</h3>}
                description={<p className={styles.statCardLabel}>Happy Clients</p>}
              />
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
            <Card 
              variants={staggerItem}
              imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400"
              imageAlt="Our Mission"
              title={<h3 style={{ textAlign: 'center' }}>Our Mission</h3>}
              description={<p>To deliver innovative and reliable IT solutions that empower businesses and create lasting value. We are committed to solving complex challenges with intuitive technology, ensuring our clients stay ahead in an ever-evolving digital landscape.</p>}
            />
            
            <Card 
              variants={staggerItem}
              imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400"
              imageAlt="Our Vision"
              title={<h3 style={{ textAlign: 'center' }}>Our Vision</h3>}
              description={<p>To be a leading IT solutions provider, recognized for innovation, trust and customer success. We envision a future where technology seamlessly bridges the gap between ambition and achievement for organizations worldwide.</p>}
            />

            <Card 
              variants={staggerItem}
              imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400"
              imageAlt="Our Values"
              title={<h3 style={{ textAlign: 'center' }}>Our Values</h3>}
              description={
                <ul className={styles.valuesList}>
                  <li><Award size={16} className={styles.valueIcon} /> Integrity in everything we do</li>
                  <li><Award size={16} className={styles.valueIcon} /> Customer success is our priority</li>
                  <li><Award size={16} className={styles.valueIcon} /> Innovation for a better tomorrow</li>
                  <li><Award size={16} className={styles.valueIcon} /> Commitment to excellence</li>
                  <li><Award size={16} className={styles.valueIcon} /> Building long-term relationships</li>
                </ul>
              }
            />
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
              <strong>100%</strong>
              <span>Client Satisfaction</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
