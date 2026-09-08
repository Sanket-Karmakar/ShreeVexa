import Link from "next/link";
import { ArrowRight, CheckCircle2, ShoppingCart, Info } from "lucide-react";
import styles from "./page.module.css";

const brands = [
  "Dell", "HP", "Lenovo", "ASUS", "Acer", "Apple", "Logitech", "Microsoft", 
  "Google", "Cisco", "APC", "Samsung", "LG", "Epson", "Canon", "Brother", 
  "Hikvision", "Dahua", "Honeywell", "Zebra", "Seagate", "Western Digital", 
  "Kingston", "SanDisk", "Intel", "AMD", "NVIDIA"
];

export default function Brands() {
  return (
    <div className={styles.brands}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagContainer}>
              <span className={styles.heroTag}>OUR BRANDS</span>
              <span className={styles.heroLine}></span>
            </div>
            <h1 className={styles.title}>
              Trusted Global<br />
              Brands for a<br />
              <span className={styles.accent}>Stronger Tomorrow.</span>
            </h1>
            <p className={styles.desc}>
              Explore a wide range of leading global IT brands available for resale to meet your business and technology needs.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                Request a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="/brands-hero-image.jpg" alt="Global IT Brands" className={styles.heroImage} />
        </div>
      </section>

      {/* Trust Badges */}
      <section className={styles.trustBanner}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Wide Range of Global Brands</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Quality Products</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 className={styles.trustIcon} size={24} />
              <span>Competitive Pricing</span>
            </div>
            <div className={styles.trustItem}>
              <ShoppingCart className={styles.trustIcon} size={24} />
              <span>Corporate Procurement Orders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.heroTagContainer}>
                <span className={styles.sectionTag}>OUR BRANDS</span>
                <span className={styles.heroLine}></span>
              </div>
              <h2 className="section-title">Leading Brands. Endless Possibilities.</h2>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.headerDesc}>
                We offer a wide range of global IT brands available for resale. Explore our trusted brands to find the right fit for your business needs.
              </p>
            </div>
          </div>

          <div className={styles.brandGrid}>
            {brands.map((brand, idx) => (
              <div key={idx} className={styles.brandCard}>
                <span className={styles.brandName}>{brand}</span>
              </div>
            ))}
            <div className={styles.brandCardAction}>
              <span>Many More Brands Available on Request.</span>
              <ArrowRight size={20} />
            </div>
          </div>
          
          <div className={styles.disclaimer}>
            <Info size={20} className={styles.infoIcon} />
            <p>
              All brand names and logos are the property of their respective owners and are used here for identification purposes only. These brands are available for resale through Shreevexa IT Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaTag}>LET&apos;S BUILD TOGETHER</span>
              <h2>Find the Right Products for Your Business.</h2>
              <p>Get in touch with our team for product availability, pricing and bulk orders.</p>
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
