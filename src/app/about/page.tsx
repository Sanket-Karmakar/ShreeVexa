import Link from "next/link";
import { ArrowRight, Target, Eye, Diamond, Award, Users, ShieldCheck, Gem } from "lucide-react";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagContainer}>
              <span className={styles.heroTag}>ABOUT US</span>
              <span className={styles.heroLine}></span>
            </div>
            <h1 className={styles.title}>
              Driven by<br />
              <span className={styles.accent}>Innovation.</span><br />
              Built on <span className={styles.accent}>Trust.</span>
            </h1>
            <p className={styles.desc}>
              At Shreevexa IT Solutions, we believe in the power of technology to transform businesses, create opportunities and build a smarter tomorrow.
            </p>
            <div className={styles.heroActions}>
              <Link href="/about" className="btn-primary">
                Our Journey <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className={styles.btnOutlineDark}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="/about-hero-image.jpg" alt="About Shreevexa" className={styles.heroImage} />
        </div>
      </section>

      {/* Intro Section */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <div className={styles.heroTagContainer}>
                <span className={styles.sectionTag}>WHO WE ARE</span>
                <span className={styles.heroLine}></span>
              </div>
              <h2 className={styles.sectionTitleLarge}>A Trusted IT Partner<br/>for a Digital Tomorrow.</h2>
              <p className={styles.introDesc}>
                Shreevexa IT Solutions is a forward-thinking technology company providing reliable IT products, innovative solutions and end-to-end services to businesses, institutions and organizations. We combine expertise, innovation and a customer-first approach to help our clients grow, scale and stay ahead in a constantly evolving digital world.
              </p>
              <Link href="/services" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }}>
                Discover More <ArrowRight size={18} />
              </Link>
            </div>
            <div className={styles.introStatsWrapper}>
              <div className={styles.statCard}>
                <h3 className={styles.statCardNumber}>250+</h3>
                <p className={styles.statCardLabel}>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className={styles.mvvGrid}>
            <div className={styles.mvvCard}>
              <div className={styles.cardIconWrapper} style={{ background: '#f0f5ff' }}>
                <Target size={24} color="#3b82f6" />
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDesc}>To deliver innovative and reliable IT solutions that empower businesses and create lasting value.</p>
            </div>
            
            <div className={styles.mvvCard}>
              <div className={styles.cardIconWrapper} style={{ background: '#ecfdf5' }}>
                <Eye size={24} color="#10b981" />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDesc}>To be a leading IT solutions provider, recognized for innovation, trust and customer success.</p>
            </div>

            <div className={styles.mvvCard}>
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
            </div>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Users size={20} /></div>
              <strong>250+</strong>
              <span>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Target size={20} /></div>
              <strong>500+</strong>
              <span>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Award size={20} /></div>
              <strong>5+</strong>
              <span>Years of Experience</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><Gem size={20} /></div>
              <strong>99%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
