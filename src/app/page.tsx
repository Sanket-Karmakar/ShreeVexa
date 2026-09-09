"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { CheckCircle2, Laptop, Server, MonitorSmartphone, Shield, Headphones, Users, ArrowRight, Building2 } from "lucide-react";
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

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <motion.div 
            className={styles.heroContent}
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={heroItem} className={styles.subtitle}>SMART TECHNOLOGY.</motion.span>
            <motion.h1 variants={heroItem} className={styles.title}>
              STRONGER<br />
              BUSINESSES.<br />
              <span className={styles.accent}>BRIGHTER<br />TOMORROW.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              At Shreevexa IT Solutions, we deliver reliable IT products and services that help businesses grow, scale and stay ahead.
            </motion.p>
            
            <motion.div variants={heroItem} className={styles.features}>
              <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> Trusted Partner</div>
              <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> Innovative Solutions</div>
              <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> End-to-End Support</div>
            </motion.div>

            <motion.div variants={heroItem} className={styles.heroActions}>
              <Link href="/contact">
                <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Get in Touch <ArrowRight size={16} />
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div className={styles.btnOutlineHero} variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Explore Our Services
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div variants={heroItem} className={styles.socialProof}>
              <div className={styles.avatars}>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatar}></div>
                <div className={styles.avatarPlus}>+</div>
              </div>
              <div className={styles.proofText}>
                <strong>250+</strong>
                <span>Happy Clients</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}
          >
            <motion.img 
              src="/hero-image.jpg" 
              alt="Smart IT Technology" 
              className={styles.heroImage}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#ffffff' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.sectionTag}>OUR SERVICES</span>
              <h2 className={styles.sectionTitleLarge}>Complete IT Solutions<br/>Under One Roof.</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.sectionDesc}>
                From essential hardware to advanced digital solutions, we provide end-to-end technology for businesses, institutions and organizations.
              </p>
              <Link href="/services" className={styles.linkAccent}>View All Services <ArrowRight size={16} /></Link>
            </div>
          </div>

          <motion.div 
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.serviceCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div className={styles.cardIcon} style={{ background: '#e0f2fe', color: '#0ea5e9' }}><Laptop size={24} /></div>
              <h3>End-user Computing</h3>
              <p>Laptops, desktops, peripherals & more.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </motion.div>
            <motion.div className={styles.serviceCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div className={styles.cardIcon} style={{ background: '#dcfce7', color: '#22c55e' }}><Server size={24} /></div>
              <h3>IT Setup & Infrastructure</h3>
              <p>Servers, networking, cloud & security.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </motion.div>
            <motion.div className={styles.serviceCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div className={styles.cardIcon} style={{ background: '#f3e8ff', color: '#a855f7' }}><MonitorSmartphone size={24} /></div>
              <h3>Conference Room Solutions</h3>
              <p>Video conferencing, collaboration tools.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </motion.div>
            <motion.div className={styles.serviceCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div className={styles.cardIcon} style={{ background: '#ffedd5', color: '#f97316' }}><Headphones size={24} /></div>
              <h3>Service Offering</h3>
              <p>Rentals, AMC, managed print & logistics.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#f8fafc' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag}>WHY CHOOSE SHREEVEXA</span>
              <h2 className={styles.sectionTitleLarge}>More Than Technology.<br/>A Partner in Your Growth.</h2>
            </div>
            <motion.div 
              className={styles.whyFeatures}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Users size={24} /></div>
                <div>
                  <h4>Client-Focused Approach</h4>
                  <p>Your goals, our priority.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Shield size={24} /></div>
                <div>
                  <h4>Transparent Process</h4>
                  <p>Clear communication at every step.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Building2 size={24} /></div>
                <div>
                  <h4>Innovative Solutions</h4>
                  <p>Modern ideas for real results.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Headphones size={24} /></div>
                <div>
                  <h4>Dedicated Support</h4>
                  <p>We&apos;re always here to help.</p>
                </div>
              </motion.div>
            </motion.div>
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
            <div className={styles.ctaLeft}>
              <div className={styles.ctaContent}>
                <span className={styles.ctaTag}>LET&apos;S WORK TOGETHER</span>
                <h2>Ready to Build Something Amazing?</h2>
                <p>Get in touch with us today and take the first step towards your digital success.</p>
              </div>
              <div className={styles.ctaActions}>
                <motion.a href="#" className={styles.btnWhatsApp} variants={buttonInteraction} whileHover="hover" whileTap="tap">Chat on WhatsApp</motion.a>
                <motion.a href="tel:+919876543210" className={styles.btnCall} variants={buttonInteraction} whileHover="hover" whileTap="tap">Call Now</motion.a>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: '24px' }}>
                <motion.img 
                  src="/cta-image.jpg" 
                  alt="IT Collaboration" 
                  className={styles.ctaImage} 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: EASING }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
