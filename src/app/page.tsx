"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import { CheckCircle2, Laptop, Server, MonitorSmartphone, Shield, Headphones, Users, ArrowRight, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";
import { Card } from "@/components/Card";

const CAROUSEL_SLIDES = [
  {
    id: 1,
    subtitle: "SMART TECHNOLOGY.",
    title: <>STRONGER<br />BUSINESSES.<br /><span className={styles.accent}>BRIGHTER<br />TOMORROW.</span></>,
    desc: "At Shreevexa IT Solutions, we deliver reliable IT products and services that help businesses grow, scale and stay ahead.",
    image: "/images/hero-smart.jpg"
  },
  {
    id: 2,
    subtitle: "END-USER COMPUTING",
    title: <>MODERN DEVICE<br /><span className={styles.accent}>MANAGEMENT.</span></>,
    desc: "Secure, Manage, and Control Every Device from Anywhere with our comprehensive end-user computing solutions.",
    image: "/images/hero-devices.jpg"
  },
  {
    id: 3,
    subtitle: "IT SETUP & INFRASTRUCTURE",
    title: <>ROBUST<br /><span className={styles.accent}>INFRASTRUCTURE.</span></>,
    desc: "Servers, networking, and cloud solutions built to scale securely as your business grows.",
    image: "/images/hero-infrastructure.jpg"
  },
  {
    id: 4,
    subtitle: "CONFERENCE ROOM SOLUTIONS",
    title: <>SEAMLESS<br /><span className={styles.accent}>COLLABORATION.</span></>,
    desc: "Advanced video conferencing and meeting room setups for the modern hybrid workplace.",
    image: "/images/hero-conference.jpg"
  },
  {
    id: 5,
    subtitle: "SOFTWARE LICENSING",
    title: <>COMPLIANT &<br /><span className={styles.accent}>SECURE.</span></>,
    desc: "Simplified software licensing for enterprise tools, ensuring you always have the right access.",
    image: "/images/hero-software.jpg"
  },
  {
    id: 6,
    subtitle: "MANAGED SERVICES",
    title: <>END-TO-END<br /><span className={styles.accent}>SUPPORT.</span></>,
    desc: "Focus on your core business while our experts handle your IT operations seamlessly.",
    image: "/images/hero-support.jpg"
  },
  {
    id: 7,
    subtitle: "SECURITY SOLUTIONS",
    title: <>PROTECT YOUR<br /><span className={styles.accent}>DATA.</span></>,
    desc: "Industry-leading cybersecurity, biometric, and access control solutions.",
    image: "/images/hero-security.jpg"
  },
  {
    id: 8,
    subtitle: "PREMIUM BRANDS",
    title: <>PARTNERED WITH<br /><span className={styles.accent}>THE BEST.</span></>,
    desc: "Delivering top-tier hardware and software from global technology leaders.",
    image: "/images/hero-brands.jpg"
  }
];

export default function Home() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slide = CAROUSEL_SLIDES[currentSlide];

  return (
    <div className={styles.home}>
      {/* Hero Section Carousel */}
      <section className={styles.hero}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className={styles.heroSlide}
          >
            <div className={styles.heroLeft}>
              <motion.div 
                className={styles.heroContent}
                variants={heroContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={heroItem} className={styles.subtitle}>{slide.subtitle}</motion.span>
                <motion.h1 variants={heroItem} className={styles.title}>
                  {slide.title}
                </motion.h1>
                <motion.p variants={heroItem} className={styles.desc}>
                  {slide.desc}
                </motion.p>
                
                {currentSlide === 0 && (
                  <motion.div variants={heroItem} className={styles.features}>
                    <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> Trusted Partner</div>
                    <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> Innovative Solutions</div>
                    <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> End-to-End Support</div>
                  </motion.div>
                )}

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
                
                {currentSlide === 0 && (
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
                )}
              </motion.div>
            </div>
            <div className={styles.heroRight}>
              <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <motion.img 
                  src={slide.image} 
                  alt={slide.subtitle} 
                  className={styles.heroImage}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1.00 }}
                  transition={{ duration: 0.9, ease: EASING }}
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className={styles.carouselControls}>
          <button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </button>
          <button className={styles.arrowBtn} onClick={handleNext} aria-label="Next slide">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className={styles.dots}>
          {CAROUSEL_SLIDES.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Overview */}
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
            <Card
              variants={staggerItem}
              imageSrc="/images/services/end_user_computing_1789019994914.jpg"
              imageAlt="End-user Computing"
              imageRatio="service"
              icon={<Laptop size={24} />}
              iconStyle={{ background: 'white', color: '#0ea5e9' }}
              title={<h3>End-user Computing</h3>}
              description={<p>Laptops, desktops, peripherals & more.</p>}
              style={{ backgroundColor: '#e0f2fe', borderColor: '#bae6fd' }}
            >
              <ArrowRight size={16} className={styles.cardArrow} />
            </Card>

            <Card
              variants={staggerItem}
              imageSrc="/images/services/it_infrastructure_1789020319662.jpg"
              imageAlt="IT Setup & Infrastructure"
              imageRatio="service"
              icon={<Server size={24} />}
              iconStyle={{ background: 'white', color: '#22c55e' }}
              title={<h3>IT Setup & Infrastructure</h3>}
              description={<p>Servers, networking, cloud & security.</p>}
              style={{ backgroundColor: '#dcfce7', borderColor: '#bbf7d0' }}
            >
              <ArrowRight size={16} className={styles.cardArrow} />
            </Card>

            <Card
              variants={staggerItem}
              imageSrc="/images/services/conference_room_1789020355470.jpg"
              imageAlt="Conference Room Solutions"
              imageRatio="service"
              icon={<MonitorSmartphone size={24} />}
              iconStyle={{ background: 'white', color: '#a855f7' }}
              title={<h3>Conference Room Solutions</h3>}
              description={<p>Video conferencing, collaboration tools.</p>}
              style={{ backgroundColor: '#f3e8ff', borderColor: '#e9d5ff' }}
            >
              <ArrowRight size={16} className={styles.cardArrow} />
            </Card>

            <Card
              variants={staggerItem}
              imageSrc="/images/services/service_offering_1789020369593.jpg"
              imageAlt="Service Offering"
              imageRatio="service"
              icon={<Headphones size={24} />}
              iconStyle={{ background: 'white', color: '#f97316' }}
              title={<h3>Service Offering</h3>}
              description={<p>Rentals, AMC, managed print & logistics.</p>}
              style={{ backgroundColor: '#ffedd5', borderColor: '#fed7aa' }}
            >
              <ArrowRight size={16} className={styles.cardArrow} />
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#ffffff' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag} style={{ color: '#334155', letterSpacing: '0px' }}>WHY CHOOSE US</span>
              <h2 className={styles.whyTitle}>Experience the difference<br/>and unleash your potential<br/>with our commitment to<br/>your growth</h2>
            </div>
            <motion.div 
              className={styles.whyFeatures}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={`${styles.glowIcon} ${styles.glowPink}`}>
                  <span>🤝</span>
                </div>
                <div>
                  <h4>Quality Commitment</h4>
                  <p>We provide top-tier products that meet standards of performance and reliability.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={`${styles.glowIcon} ${styles.glowBlue}`}>
                  <span>💰</span>
                </div>
                <div>
                  <h4>Fair Value</h4>
                  <p>Our transparent, competitive pricing ensures cost-effective IT solutions.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={`${styles.glowIcon} ${styles.glowRed}`}>
                  <span>⚙️</span>
                </div>
                <div>
                  <h4>End-to-End Solutions</h4>
                  <p>We offer a comprehensive selection of cutting-edge products and services.</p>
                </div>
              </motion.div>
              <motion.div className={styles.whyFeature} variants={staggerItem}>
                <div className={`${styles.glowIcon} ${styles.glowYellow}`}>
                  <span>👩‍💻</span>
                </div>
                <div>
                  <h4>Seamless Support</h4>
                  <p>Our experienced team support you throughout so you can focus on your business.</p>
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
