"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Wrench, Headphones, Network, Shield, Printer, Database, Lightbulb, Blocks, CheckCircle2, Clock, HeartHandshake } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";

const services = [
  { 
    name: "IT Setup & Deployment", 
    desc: "Hassle-free installation and configuration of IT infrastructure.", 
    icon: Settings, 
    color: "#3b82f6",
    features: ["Laptops & Desktops", "Servers & Networking", "Office IT Setup"]
  },
  { 
    name: "IT AMC & Maintenance", 
    desc: "Keep your systems running smoothly with our AMC services.", 
    icon: Wrench, 
    color: "#10b981",
    features: ["Preventive Maintenance", "Regular Health Checks", "Reduced Downtime"]
  },
  { 
    name: "Technical Support", 
    desc: "Quick and reliable support for your day-to-day IT issues.", 
    icon: Headphones, 
    color: "#8b5cf6",
    features: ["Remote & Onsite Support", "Hardware & Software", "Troubleshooting"]
  },
  { 
    name: "Network Setup & Management", 
    desc: "Design, setup and manage secure network infrastructure.", 
    icon: Network, 
    color: "#f59e0b",
    features: ["LAN & Wi-Fi Setup", "Network Security", "Performance Monitoring"]
  },
  { 
    name: "Security & Surveillance", 
    desc: "Secure your premises with advanced surveillance solutions.", 
    icon: Shield, 
    color: "#ef4444",
    features: ["CCTV Installation", "Access Control Systems", "Biometric Attendance"]
  },
  { 
    name: "Printing & Scanning Solutions", 
    desc: "Setup and support for efficient document management.", 
    icon: Printer, 
    color: "#6366f1",
    features: ["Printer Installation", "Scanner Setup", "AMC & Support"]
  },
  { 
    name: "Data Backup & Recovery", 
    desc: "Protect your business data with reliable backup solutions.", 
    icon: Database, 
    color: "#0ea5e9",
    features: ["Backup Setup", "Data Recovery Support", "Cloud & Local Backup"]
  },
  { 
    name: "IT Consulting Services", 
    desc: "Expert advice to help you make the right technology decisions.", 
    icon: Lightbulb, 
    color: "#ec4899",
    features: ["IT Infrastructure Planning", "Technology Upgrades", "Cost Optimization"]
  },
  { 
    name: "Custom IT Services", 
    desc: "Tailored IT services to match your unique business needs.", 
    icon: Blocks, 
    color: "#14b8a6",
    features: ["Software Installation", "System Configuration", "Ongoing Assistance"]
  }
];

export default function Services() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            className={styles.heroContent}
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={heroItem} className={styles.heroTagContainer}>
              <span className={styles.heroTag}>OUR SERVICES</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Reliable IT Services<br />
              for a <span className={styles.accent}>Smarter<br />Tomorrow.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              From setup to support, we deliver end-to-end IT services to keep your business running smoothly, securely and efficiently.
            </motion.p>
            <motion.div variants={heroItem} className={styles.heroActions}>
              <Link href="/contact">
                <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Talk to Our Team <ArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <motion.img 
              src="/services-hero-image.jpg" 
              alt="Reliable IT Services" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              <span className={styles.sectionTag}>OUR IT SERVICES</span>
              <h2 className="section-title">Comprehensive IT Services<br/>to Keep Your Business Ahead.</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc} style={{ marginBottom: '1.5rem' }}>
                We offer a wide range of IT services designed to ensure seamless operations, minimal downtime and maximum productivity.
              </p>
              <Link href="/contact">
                <motion.div className="btn-outline" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Need a Custom Service? <ArrowRight size={16} />
                </motion.div>
              </Link>
            </div>
          </div>

          <motion.div 
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div 
                  key={idx} 
                  className={styles.serviceCard}
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon} style={{ color: srv.color }}>
                      <Icon size={36} strokeWidth={1.5} />
                    </div>
                    <h3>{srv.name}</h3>
                  </div>
                  <p className={styles.cardDesc}>{srv.desc}</p>
                  
                  <ul className={styles.featureList}>
                    {srv.features.map((feat, fidx) => (
                      <li key={fidx}>
                        <CheckCircle2 size={16} color={srv.color} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact" className={styles.cardLink} style={{ color: srv.color }}>
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Our Services */}
      <motion.section 
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag}>WHY CHOOSE OUR SERVICES</span>
              <h2 className="section-title">Service Excellence<br/>You Can Trust.</h2>
            </div>
            <motion.div 
              className={styles.whyFeatures}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><CheckCircle2 size={24} /></div>
                <div>
                  <h4>Skilled Professionals</h4>
                  <p>Experienced & certified team.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Clock size={24} /></div>
                <div>
                  <h4>Quick Response</h4>
                  <p>Fast and reliable support.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Settings size={24} /></div>
                <div>
                  <h4>Cost Effective</h4>
                  <p>Maximize value for your investment.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><HeartHandshake size={24} /></div>
                <div>
                  <h4>Long-Term Support</h4>
                  <p>We&apos;re with you at every step.</p>
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
            <div className={styles.ctaContent}>
              <span className={styles.ctaTag}>LET&apos;S WORK TOGETHER</span>
              <h2>Get Reliable IT Services Today.</h2>
              <p>Partner with Shreevexa IT Solutions for seamless IT services and continuous support.</p>
            </div>
            <div className={styles.ctaActions}>
              <motion.a href="#" className="btn-primary" style={{ background: '#25D366' }} variants={buttonInteraction} whileHover="hover" whileTap="tap">Chat on WhatsApp</motion.a>
              <motion.a href="tel:+919876543210" className="btn-primary" style={{ background: 'white', color: 'var(--text-main)' }} variants={buttonInteraction} whileHover="hover" whileTap="tap">Request a Call</motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
