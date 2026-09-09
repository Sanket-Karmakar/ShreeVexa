"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Cloud, HardDrive, Mail, LayoutGrid, Monitor, FileText, Lock, Briefcase } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";

const softwareList = [
  { name: "Microsoft 365", desc: "Productivity tools for modern work.", icon: LayoutGrid, color: "#e87a25" },
  { name: "Microsoft Azure", desc: "Cloud solutions for a scalable future.", icon: Cloud, color: "#0078d4" },
  { name: "Windows Licensing", desc: "Secure. Reliable. Always up to date.", icon: Monitor, color: "#00a4ef" },
  { name: "Microsoft Office", desc: "Essential tools for every business.", icon: FileText, color: "#d83b01" },
  { name: "Google Workspace", desc: "Collaborate smarter, together.", icon: Briefcase, color: "#ea4335" },
  { name: "Adobe Creative Cloud", desc: "Create. Design. Bring your ideas to life.", icon: LayoutGrid, color: "#ff0000" },
  { name: "VMware", desc: "Virtualization for a flexible IT environment.", icon: HardDrive, color: "#607078" },
  { name: "Autodesk", desc: "Design. Build. Innovate.", icon: LayoutGrid, color: "#0696d7" },
  { name: "Antivirus Solutions", desc: "Protection for a safer tomorrow.", icon: Shield, color: "#10b981" },
  { name: "Backup Solutions", desc: "Secure your data. Ensure business continuity.", icon: Cloud, color: "#3b82f6" },
  { name: "Endpoint Security", desc: "Stronger security for every device.", icon: Lock, color: "#0ea5e9" },
  { name: "Email Security", desc: "Safer communication for your business.", icon: Mail, color: "#6366f1" }
];

export default function Licensing() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
  return (
    <div className={styles.licensing}>
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
              <span className={styles.heroTag}>SOFTWARE LICENSING</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Genuine Software.<br />
              Greater Productivity.<br />
              <span className={styles.accent}>A Smarter Tomorrow.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              Get genuine software licenses from leading global providers to empower your business with secure, reliable and future-ready solutions.
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
              src="/licensing-hero-image.jpg" 
              alt="Software Licensing Solutions" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
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
              <span>Genuine Licenses from Global Providers</span>
            </motion.div>
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Enquiry Based Licensing Only</span>
            </motion.div>
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Wide Range of Software</span>
            </motion.div>
            <motion.div className={styles.trustItem} variants={staggerItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Dedicated Support</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Licensing Grid */}
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
                <span className={styles.sectionTag}>OUR SOFTWARE LICENSING SOLUTIONS</span>
                <span className={styles.heroLine}></span>
              </div>
              <h2 className="section-title">Leading Software. Endless Possibilities.</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc}>
                All licenses are available on enquiry basis. Contact us for the best pricing and options.
              </p>
            </div>
          </div>

          <motion.div 
            className={styles.licenseGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {softwareList.map((sw, idx) => {
              const Icon = sw.icon;
              return (
                <motion.div 
                  key={idx} 
                  className={styles.licenseCard}
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                >
                  <div className={styles.cardIcon} style={{ color: sw.color }}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3>{sw.name}</h3>
                  <p>{sw.desc}</p>
                  <Link href="/contact" className={styles.btnOutlineBlue}>
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container" style={{ maxWidth: '1350px' }}>
          <div className={styles.processHeader}>
            <div className={styles.heroTagContainer} style={{ justifyContent: 'center' }}>
              <span className={styles.sectionTag}>OUR PROCESS</span>
              <span className={styles.heroLine}></span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Simple Steps to<br/>Get Your Software License.</h2>
          </div>
          
          <motion.div 
            className={styles.processSteps}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.div className={styles.step} variants={staggerItem}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepContent}>
                <h4>Share Your Requirement</h4>
              </div>
            </motion.div>
            <div className={styles.stepArrow}></div>
            <motion.div className={styles.step} variants={staggerItem}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepContent}>
                <h4>Get Best Options</h4>
              </div>
            </motion.div>
            <div className={styles.stepArrow}></div>
            <motion.div className={styles.step} variants={staggerItem}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepContent}>
                <h4>Receive Quotation</h4>
              </div>
            </motion.div>
            <div className={styles.stepArrow}></div>
            <motion.div className={styles.step} variants={staggerItem}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepContent}>
                <h4>License Activation</h4>
              </div>
            </motion.div>
          </motion.div>
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
              <span className={styles.ctaTag}>LET&apos;S FIND THE RIGHT LICENSE FOR YOU</span>
              <h2>Get in Touch for Software Licensing.</h2>
              <p>Our team will help you with the best licensing options based on your business requirements.</p>
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
