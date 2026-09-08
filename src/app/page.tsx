import Link from "next/link";
import styles from "./page.module.css";
import { CheckCircle2, Laptop, Server, MonitorSmartphone, Shield, Headphones, Users, ArrowRight, Building2, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>SMART TECHNOLOGY.</span>
            <h1 className={styles.title}>
              STRONGER<br />
              BUSINESSES.<br />
              <span className={styles.accent}>BRIGHTER<br />TOMORROW.</span>
            </h1>
            <p className={styles.desc}>
              At Shreevexa IT Solutions, we deliver reliable IT products and services that help businesses grow, scale and stay ahead.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> Trusted Partner</div>
              <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> Innovative Solutions</div>
              <div className={styles.feature}><CheckCircle2 size={16} className={styles.icon} /> End-to-End Support</div>
            </div>

            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link href="/services" className={styles.btnOutlineHero}>
                Explore Our Services
              </Link>
            </div>
            
            <div className={styles.socialProof}>
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
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="/hero-image.jpg" alt="Smart IT Technology" className={styles.heroImage} />
        </div>
      </section>

      {/* Services Overview */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
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

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon} style={{ background: '#e0f2fe', color: '#0ea5e9' }}><Laptop size={24} /></div>
              <h3>End-user Computing</h3>
              <p>Laptops, desktops, peripherals & more.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon} style={{ background: '#dcfce7', color: '#22c55e' }}><Server size={24} /></div>
              <h3>IT Setup & Infrastructure</h3>
              <p>Servers, networking, cloud & security.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon} style={{ background: '#f3e8ff', color: '#a855f7' }}><MonitorSmartphone size={24} /></div>
              <h3>Conference Room Solutions</h3>
              <p>Video conferencing, collaboration tools.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.cardIcon} style={{ background: '#ffedd5', color: '#f97316' }}><Headphones size={24} /></div>
              <h3>Service Offering</h3>
              <p>Rentals, AMC, managed print & logistics.</p>
              <ArrowRight size={16} className={styles.cardArrow} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag}>WHY CHOOSE SHREEVEXA</span>
              <h2 className={styles.sectionTitleLarge}>More Than Technology.<br/>A Partner in Your Growth.</h2>
            </div>
            <div className={styles.whyFeatures}>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><Users size={24} /></div>
                <div>
                  <h4>Client-Focused Approach</h4>
                  <p>Your goals, our priority.</p>
                </div>
              </div>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><Shield size={24} /></div>
                <div>
                  <h4>Transparent Process</h4>
                  <p>Clear communication at every step.</p>
                </div>
              </div>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><Building2 size={24} /></div>
                <div>
                  <h4>Innovative Solutions</h4>
                  <p>Modern ideas for real results.</p>
                </div>
              </div>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><Headphones size={24} /></div>
                <div>
                  <h4>Dedicated Support</h4>
                  <p>We&apos;re always here to help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaContent}>
                <span className={styles.ctaTag}>LET&apos;S WORK TOGETHER</span>
                <h2>Ready to Build Something Amazing?</h2>
                <p>Get in touch with us today and take the first step towards your digital success.</p>
              </div>
              <div className={styles.ctaActions}>
                <a href="#" className={styles.btnWhatsApp}>Chat on WhatsApp</a>
                <a href="tel:+919876543210" className={styles.btnCall}>Call Now</a>
              </div>
            </div>
            <div className={styles.ctaRight}>
              <img src="/cta-image.jpg" alt="IT Collaboration" className={styles.ctaImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
