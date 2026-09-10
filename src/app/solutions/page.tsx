"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Server, Shield, MonitorSmartphone, Printer, CreditCard, HardDrive, Presentation, Lightbulb, Building2, GraduationCap, Stethoscope, Store, Factory, Landmark, Target, Settings, Users, Star } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";
import { Card } from "@/components/Card";

const solutions = [
  { name: "End-user Computing Solutions", desc: "Reliable and high-performance devices for modern workplaces.", icon: Laptop, color: "#3b82f6", image: "/images/services_detailed/end_user_computing_1789019994914.jpg" },
  { name: "IT Infrastructure Solutions", desc: "Build a strong foundation for your business.", icon: Server, color: "#10b981", image: "/images/services_detailed/it_infrastructure_1789020319662.jpg" },
  { name: "Security & Surveillance Solutions", desc: "Safer workplaces with smarter security.", icon: Shield, color: "#f59e0b", image: "/images/services_detailed/security_1789021283629.jpg" },
  { name: "Collaboration Solutions", desc: "Enable better communication and teamwork.", icon: MonitorSmartphone, color: "#8b5cf6", image: "/images/services_detailed/conference_room_1789020355470.jpg" },
  { name: "Printing & Document Management", desc: "Efficient and cost-effective document solutions.", icon: Printer, color: "#64748b", image: "/images/services_detailed/printing_1789021320875.jpg" },
  { name: "POS & Retail Solutions", desc: "Smart solutions for modern retail businesses.", icon: CreditCard, color: "#ec4899", image: "/images/services_detailed/service_offering_1789020369593.jpg" },
  { name: "Storage & Data Solutions", desc: "Store, manage and protect your valuable data.", icon: HardDrive, color: "#0ea5e9", image: "/images/services_detailed/data_backup_1789021339071.jpg" },
  { name: "Smart Classroom Solutions", desc: "Technology-enabled learning environments.", icon: Presentation, color: "#14b8a6", image: "/images/services_detailed/it_consulting_1789021538083.jpg" },
  { name: "Custom IT Solutions", desc: "Tailored solutions to match your unique needs.", icon: Lightbulb, color: "#eab308", image: "/images/services_detailed/custom_it_1789021644380.jpg" }
];

const industries = [
  { name: "Corporate", icon: Building2, image: "/images/services_detailed/conference_room_1789020355470.jpg" },
  { name: "Education", icon: GraduationCap, image: "/images/services_detailed/it_consulting_1789021538083.jpg" },
  { name: "Healthcare", icon: Stethoscope, image: "/images/services_detailed/tech_support_1789021017319.jpg" },
  { name: "Retail", icon: Store, image: "/images/services_detailed/service_offering_1789020369593.jpg" },
  { name: "Manufacturing", icon: Factory, image: "/images/services_detailed/it_amc_1789020909347.jpg" },
  { name: "Government", icon: Landmark, image: "/images/services_detailed/security_1789021283629.jpg" }
];

export default function Solutions() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
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
                <Card 
                  key={idx} 
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                  imageSrc={sol.image}
                  imageAlt={sol.name}
                  imageRatio="service"
                  icon={<Icon size={32} />}
                  iconStyle={{ background: `${sol.color}15`, color: sol.color }}
                  title={<h3>{sol.name}</h3>}
                  description={<p>{sol.desc}</p>}
                  className={styles.solutionCardGroup}
                >
                  <div className={styles.cardArrow}>
                    <ArrowRight size={20} color={sol.color} />
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Our Solutions */}
      <motion.section 
        className="section"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)' }}
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
              <Card 
                variants={staggerItem} 
                style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }}
                icon={<Target size={24} />}
                iconStyle={{ background: '#dbeafe', color: '#2563eb' }}
                title={<h4>Business Focused</h4>}
                description={<p>Solutions aligned with your goals.</p>}
              />
              <Card 
                variants={staggerItem} 
                style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}
                icon={<Settings size={24} />}
                iconStyle={{ background: '#dcfce7', color: '#16a34a' }}
                title={<h4>Customized Approach</h4>}
                description={<p>Tailored to your needs.</p>}
              />
              <Card 
                variants={staggerItem} 
                style={{ backgroundColor: '#fdf4ff', borderColor: '#fbcfe8' }}
                icon={<Users size={24} />}
                iconStyle={{ background: '#fae8ff', color: '#c026d3' }}
                title={<h4>Reliable & Scalable</h4>}
                description={<p>Ready for today and tomorrow.</p>}
              />
              <Card 
                variants={staggerItem} 
                style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}
                icon={<Star size={24} />}
                iconStyle={{ background: '#fef3c7', color: '#d97706' }}
                title={<h4>Expert Support</h4>}
                description={<p>Dedicated support at every step.</p>}
              />
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
                <Card 
                  key={idx} 
                  variants={staggerItem}
                  whileHover={cardHover.hover}
                  imageSrc={ind.image}
                  imageAlt={ind.name}
                  imageRatio="service"
                  style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                >
                  <div className={styles.industryContent}>
                    <Icon size={40} className={styles.industryIcon} />
                    <h4>{ind.name}</h4>
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
