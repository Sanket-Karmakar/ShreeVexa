"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Plus, ArrowRight, ShieldCheck, HeartHandshake, Zap, TrendingUp } from "lucide-react";
import styles from "./page.module.css";
import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";
import { Card } from "@/components/Card";

export default function Contact() {
  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();
  return (
    <div className={styles.contact}>
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
              <span className={styles.heroTag}>CONTACT US</span>
              <span className={styles.heroLine}></span>
            </motion.div>
            <motion.h1 variants={heroItem} className={styles.title}>
              Let&apos;s Build<br />
              a Smarter<br />
              <span className={styles.accent}>Tomorrow Together.</span>
            </motion.h1>
            <motion.p variants={heroItem} className={styles.desc}>
              Have a question, need a quote, or want to discuss a project? Our team is here to help. Get in touch with Shreevexa IT Solutions — we&apos;d love to hear from you.
            </motion.p>
            
            <motion.div variants={heroItem} className={styles.heroFeatures}>
              <div className={styles.heroFeature}><Zap size={18} className={styles.iconAccent} /> Quick Response</div>
              <div className={styles.heroFeature}><ShieldCheck size={18} className={styles.iconAccent} /> Dedicated Support</div>
              <div className={styles.heroFeature}><HeartHandshake size={18} className={styles.iconAccent} /> Trusted Partner</div>
              <div className={styles.heroFeature}><TrendingUp size={18} className={styles.iconAccent} /> Growth Together</div>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <motion.img 
              src="/contact-hero-image.jpg" 
              alt="Contact Us" 
              className={styles.heroImage} 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1.00 }}
              transition={{ duration: 0.9, ease: EASING }}
            />
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <motion.section 
        className={styles.methodsSection}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <motion.div 
            className={styles.methodsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <Card className={styles.methodCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className={styles.methodIconWrapper} style={{ color: '#0ea5e9' }}><Phone size={24} /></div>
                <div>
                  <span className={styles.methodLabel}>Call Us</span>
                  <strong className={styles.methodValue}>+91 98765 43210</strong>
                </div>
              </div>
            </Card>
            <Card className={styles.methodCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className={styles.methodIconWrapper} style={{ color: '#25D366' }}><MessageSquare size={24} /></div>
                <div>
                  <span className={styles.methodLabel}>WhatsApp</span>
                  <strong className={styles.methodValue}>Chat with Us</strong>
                </div>
              </div>
            </Card>
            <Card className={styles.methodCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className={styles.methodIconWrapper} style={{ color: '#3b82f6' }}><Mail size={24} /></div>
                <div>
                  <span className={styles.methodLabel}>Email Us</span>
                  <strong className={styles.methodValue}>info@shreevexa.com</strong>
                </div>
              </div>
            </Card>
            <Card className={styles.methodCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className={styles.methodIconWrapper} style={{ color: '#0088cc' }}><Send size={24} /></div>
                <div>
                  <span className={styles.methodLabel}>Telegram</span>
                  <strong className={styles.methodValue}>Join Our Channel</strong>
                </div>
              </div>
            </Card>
            <Card className={styles.methodCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className={styles.methodIconWrapper} style={{ color: '#ef4444' }}><MapPin size={24} /></div>
                <div>
                  <span className={styles.methodLabel}>Visit Us</span>
                  <strong className={styles.methodValue}>Our Office</strong>
                </div>
              </div>
            </Card>
            <Card className={styles.methodCard} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div className={styles.methodIconWrapper} style={{ color: '#8b5cf6' }}><Clock size={24} /></div>
                <div>
                  <span className={styles.methodLabel}>Working Hours</span>
                  <strong className={styles.methodValue}>Mon - Sat<br/>9:00 AM - 6:00 PM</strong>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Contact Area */}
      <motion.section 
        className="section" 
        style={{ backgroundColor: '#f8fafc' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <Card className={styles.officeContainer} style={{ maxWidth: '800px', width: '100%' }}>
              <h2 className="section-title">Our Office</h2>
              <p className={styles.sectionDesc}>Feel free to visit our office for detailed discussions, product demos or consultations.</p>
              
              <div className={styles.officeCard}>
                <div className={styles.officeImagePlaceholder}>
                  <div className={styles.placeholderLogo}>
                    <span>S</span>
                  </div>
                  <div>SHREEVEXA</div>
                </div>
                
                <div className={styles.officeDetails}>
                  <div className={styles.officeDetailItem}>
                    <MapPin className={styles.detailIcon} size={20} />
                    <div>
                      <strong>Address</strong>
                      <p>123, Business Park,<br/>Your City,<br/>Maharashtra, India - 411001</p>
                    </div>
                  </div>
                  
                  <div className={styles.officeDetailItem}>
                    <Phone className={styles.detailIcon} size={20} />
                    <div>
                      <strong>Phone</strong>
                      <p>+91 98765 43210<br/>+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className={styles.officeDetailItem}>
                    <Mail className={styles.detailIcon} size={20} />
                    <div>
                      <strong>Email</strong>
                      <p>info@shreevexa.com<br/>support@shreevexa.com</p>
                    </div>
                  </div>
                  
                  <div className={styles.officeDetailItem}>
                    <Clock className={styles.detailIcon} size={20} />
                    <div>
                      <strong>Office Hours</strong>
                      <p>Mon - Sat: 9:00 AM - 6:00 PM<br/>(Sunday Closed)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
      </motion.section>


      {/* FAQs */}
      <motion.section 
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
      >
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className="section-title">FAQ</h2>
            <p className={styles.sectionDesc}>Find quick answers to common queries.</p>
          </div>
          
          <motion.div 
            className={styles.faqGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <Card className={styles.faqItem} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <h4>What are your working hours?</h4>
                <Plus size={20} className={styles.faqIcon} />
              </div>
            </Card>
            <Card className={styles.faqItem} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <h4>Can I request a product demo?</h4>
                <Plus size={20} className={styles.faqIcon} />
              </div>
            </Card>
            <Card className={styles.faqItem} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <h4>Do you provide support after purchase?</h4>
                <Plus size={20} className={styles.faqIcon} />
              </div>
            </Card>
            <Card className={styles.faqItem} variants={staggerItem} whileHover={cardHover.hover}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <h4>Do you offer onsite support?</h4>
                <Plus size={20} className={styles.faqIcon} />
              </div>
            </Card>
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
              <span className={styles.ctaTag}>LET&apos;S CREATE TOGETHER</span>
              <h2>Ready to Transform Your Business?</h2>
              <p>Get in touch today and take the first step towards a smarter, faster and more connected future.</p>
            </div>
            <div className={styles.ctaActions}>
              <motion.a href="#" className="btn-primary" style={{ background: 'white', color: 'var(--text-main)' }} variants={buttonInteraction} whileHover="hover" whileTap="tap">Get in Touch <ArrowRight size={18} /></motion.a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
