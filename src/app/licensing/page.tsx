import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Cloud, HardDrive, Mail, LayoutGrid, Monitor, FileText, Lock, Briefcase } from "lucide-react";
import styles from "./page.module.css";

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
  return (
    <div className={styles.licensing}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagContainer}>
              <span className={styles.heroTag}>SOFTWARE LICENSING</span>
              <span className={styles.heroLine}></span>
            </div>
            <h1 className={styles.title}>
              Genuine Software.<br />
              Greater Productivity.<br />
              <span className={styles.accent}>A Smarter Tomorrow.</span>
            </h1>
            <p className={styles.desc}>
              Get genuine software licenses from leading global providers to empower your business with secure, reliable and future-ready solutions.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="/licensing-hero-image.jpg" alt="Software Licensing Solutions" className={styles.heroImage} />
        </div>
      </section>

      {/* Trust Banner */}
      <section className={styles.trustBanner}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Genuine Licenses from Global Providers</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Enquiry Based Licensing Only</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Wide Range of Software</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
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

          <div className={styles.licenseGrid}>
            {softwareList.map((sw, idx) => {
              const Icon = sw.icon;
              return (
                <div key={idx} className={styles.licenseCard}>
                  <div className={styles.cardIcon} style={{ color: sw.color }}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3>{sw.name}</h3>
                  <p>{sw.desc}</p>
                  <Link href="/contact" className={styles.btnOutlineBlue}>
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1350px' }}>
          <div className={styles.processHeader}>
            <div className={styles.heroTagContainer} style={{ justifyContent: 'center' }}>
              <span className={styles.sectionTag}>OUR PROCESS</span>
              <span className={styles.heroLine}></span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Simple Steps to<br/>Get Your Software License.</h2>
          </div>
          
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <div className={styles.stepContent}>
                <h4>Share Your Requirement</h4>
              </div>
            </div>
            <div className={styles.stepArrow}></div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepContent}>
                <h4>Get Best Options</h4>
              </div>
            </div>
            <div className={styles.stepArrow}></div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <div className={styles.stepContent}>
                <h4>Receive Quotation</h4>
              </div>
            </div>
            <div className={styles.stepArrow}></div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <div className={styles.stepContent}>
                <h4>License Activation</h4>
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
              <span className={styles.ctaTag}>LET&apos;S FIND THE RIGHT LICENSE FOR YOU</span>
              <h2>Get in Touch for Software Licensing.</h2>
              <p>Our team will help you with the best licensing options based on your business requirements.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href="#" className="btn-primary" style={{ background: '#25D366' }}>Chat on WhatsApp</a>
              <a href="/contact" className="btn-primary" style={{ background: 'white', color: 'var(--text-main)' }}>Request a Quote</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
