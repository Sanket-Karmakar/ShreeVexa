import Link from "next/link";
import { ArrowRight, Settings, Wrench, Headphones, Network, Shield, Printer, Database, Lightbulb, Blocks, CheckCircle2, Clock, HeartHandshake } from "lucide-react";
import styles from "./page.module.css";

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
  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagContainer}>
              <span className={styles.heroTag}>OUR SERVICES</span>
              <span className={styles.heroLine}></span>
            </div>
            <h1 className={styles.title}>
              Reliable IT Services<br />
              for a <span className={styles.accent}>Smarter<br />Tomorrow.</span>
            </h1>
            <p className={styles.desc}>
              From setup to support, we deliver end-to-end IT services to keep your business running smoothly, securely and efficiently.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                Talk to Our Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="/services-hero-image.jpg" alt="Reliable IT Services" className={styles.heroImage} />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
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
              <Link href="/contact" className="btn-outline">
                Need a Custom Service? <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className={styles.serviceCard}>
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section">
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag}>WHY CHOOSE OUR SERVICES</span>
              <h2 className="section-title">Service Excellence<br/>You Can Trust.</h2>
            </div>
            <div className={styles.whyFeatures}>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><CheckCircle2 size={24} /></div>
                <div>
                  <h4>Skilled Professionals</h4>
                  <p>Experienced & certified team.</p>
                </div>
              </div>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><Clock size={24} /></div>
                <div>
                  <h4>Quick Response</h4>
                  <p>Fast and reliable support.</p>
                </div>
              </div>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><Settings size={24} /></div>
                <div>
                  <h4>Cost Effective</h4>
                  <p>Maximize value for your investment.</p>
                </div>
              </div>
              <div className={styles.whyFeature}>
                <div className={styles.whyIcon}><HeartHandshake size={24} /></div>
                <div>
                  <h4>Long-Term Support</h4>
                  <p>We&apos;re with you at every step.</p>
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
            <div className={styles.ctaContent}>
              <span className={styles.ctaTag}>LET&apos;S WORK TOGETHER</span>
              <h2>Get Reliable IT Services Today.</h2>
              <p>Partner with Shreevexa IT Solutions for seamless IT services and continuous support.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#" className="btn-primary" style={{ background: '#25D366' }}>Chat on WhatsApp</a>
              <a href="tel:+919876543210" className="btn-primary" style={{ background: 'white', color: 'var(--text-main)' }}>Request a Call</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
