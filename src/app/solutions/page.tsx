"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Server, Shield, MonitorSmartphone, Printer, CreditCard, HardDrive, Presentation, Lightbulb, Building2, GraduationCap, Stethoscope, Store, Factory, Landmark, Target, Settings, Users, Star } from "lucide-react";
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

const solutions = [
  { name: "End-user Computing Solutions", desc: "Reliable and high-performance devices for modern workplaces.", icon: Laptop, color: "#3b82f6" },
  { name: "IT Infrastructure Solutions", desc: "Build a strong foundation for your business.", icon: Server, color: "#10b981" },
  { name: "Security & Surveillance Solutions", desc: "Safer workplaces with smarter security.", icon: Shield, color: "#f59e0b" },
  { name: "Collaboration Solutions", desc: "Enable better communication and teamwork.", icon: MonitorSmartphone, color: "#8b5cf6" },
  { name: "Printing & Document Management", desc: "Efficient and cost-effective document solutions.", icon: Printer, color: "#64748b" },
  { name: "POS & Retail Solutions", desc: "Smart solutions for modern retail businesses.", icon: CreditCard, color: "#ec4899" },
  { name: "Storage & Data Solutions", desc: "Store, manage and protect your valuable data.", icon: HardDrive, color: "#0ea5e9" },
  { name: "Smart Classroom Solutions", desc: "Technology-enabled learning environments.", icon: Presentation, color: "#14b8a6" },
  { name: "Custom IT Solutions", desc: "Tailored solutions to match your unique needs.", icon: Lightbulb, color: "#eab308" }
];

const industries = [
  { name: "Corporate", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Retail", icon: Store },
  { name: "Manufacturing", icon: Factory },
  { name: "Government", icon: Landmark }
];

export default function Solutions() {
  return (
    <div className={styles.solutions}>
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
              <span className={styles.heroTag}>OUR SOLUTIONS</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Smart IT Solutions<br />
              for a <span className={styles.accent}>Stronger<br />Tomorrow.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              At Shreevexa IT Solutions, we provide end-to-end technology solutions that help businesses, institutions and organizations work smarter, stay secure and achieve their goals.
            </motion.p>
            <motion.div variants={heroItem} className={styles.heroActions}>
              <Link href="/contact">
                <motion.div className="btn-primary" variants={buttonInteraction} whileHover="hover" whileTap="tap">
                  Discuss Your Requirements <ArrowRight size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <motion.img 
              src="/solutions-hero-image.jpg" 
              alt="Smart IT Solutions" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              <span className={styles.sectionTag}>OUR SOLUTIONS</span>
              <h2 className="section-title">Comprehensive IT Solutions for Every Business Need.</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc}>
                From modern workplace to smart meeting spaces, our solutions are designed to improve productivity, collaboration, security and overall business efficiency.
              </p>
            </div>
          </div>

          <motion.div 
            className={styles.solutionsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div 
                  key={idx} 
                  className={styles.solutionCard}
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon} style={{ background: `${sol.color}15`, color: sol.color }}>
                      <Icon size={32} />
                    </div>
                    <h3>{sol.name}</h3>
                  </div>
                  <p>{sol.desc}</p>
                  <div className={styles.cardArrow}>
                    <ArrowRight size={20} color={sol.color} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Our Solutions */}
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
              <span className={styles.sectionTag}>WHY CHOOSE OUR SOLUTIONS</span>
              <h2 className="section-title">Technology Solutions<br/>That Create Real Value.</h2>
            </div>
            <motion.div 
              className={styles.whyFeatures}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Target size={24} /></div>
                <div>
                  <h4>Business Focused</h4>
                  <p>Solutions aligned with your goals.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Settings size={24} /></div>
                <div>
                  <h4>Customized Approach</h4>
                  <p>Tailored to your needs.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Users size={24} /></div>
                <div>
                  <h4>Reliable & Scalable</h4>
                  <p>Ready for today and tomorrow.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={styles.whyIcon}><Star size={24} /></div>
                <div>
                  <h4>Expert Support</h4>
                  <p>Dedicated support at every step.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Industries */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#0b1120', color: 'white' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.processHeader}>
            <span className={styles.sectionTag}>INDUSTRIES WE SERVE</span>
            <h2 className="section-title" style={{ color: 'white' }}>Solutions for<br/>Every Industry.</h2>
          </div>
          <motion.div 
            className={styles.industriesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div 
                  key={idx} 
                  className={styles.industryCard}
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                >
                  <Icon size={40} className={styles.industryIcon} />
                  <h4>{ind.name}</h4>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
