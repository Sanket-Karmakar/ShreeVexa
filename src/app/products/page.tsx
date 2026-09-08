import Link from "next/link";
import { Laptop, Monitor, Keyboard, Mouse, Headphones, Camera, Printer, Scan, BatteryCharging, Projector, Tv, Network, HardDrive, Server, Cctv, Fingerprint, Lock, Barcode, CreditCard, Presentation, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "Desktop Computers", icon: Monitor },
  { name: "Workstations", icon: Server },
  { name: "Monitors", icon: Tv },
  { name: "Keyboards", icon: Keyboard },
  { name: "Mouse", icon: Mouse },
  { name: "Headsets", icon: Headphones },
  { name: "Webcams", icon: Camera },
  { name: "Printers", icon: Printer },
  { name: "Scanners", icon: Scan },
  { name: "UPS", icon: BatteryCharging },
  { name: "Projectors", icon: Projector },
  { name: "Interactive Displays", icon: Presentation },
  { name: "Networking", icon: Network },
  { name: "Storage", icon: HardDrive },
  { name: "Servers", icon: Server },
  { name: "CCTV & Surveillance", icon: Cctv },
  { name: "Biometric Attendance Systems", icon: Fingerprint },
  { name: "Access Control Systems", icon: Lock },
  { name: "Barcode Scanners", icon: Barcode },
  { name: "POS Machines", icon: CreditCard },
  { name: "Smart Meeting Room Solutions", icon: Presentation },
];

export default function Products() {
  return (
    <div className={styles.products}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagContainer}>
              <span className={styles.heroTag}>OUR PRODUCTS</span>
              <span className={styles.heroLine}></span>
            </div>
            <h1 className={styles.title}>
              Explore Our <span className={styles.accent}>Product</span><br />
              <span className={styles.accent}>Range</span>
            </h1>
            <p className={styles.desc}>
              From everyday essentials to advanced enterprise solutions, we offer a complete range of IT products to meet your business needs.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link href="/brands" className={styles.btnOutlineDark}>
                Explore Brands
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src="/products-hero-image.jpg" alt="Products Range" className={styles.heroImage} />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className={styles.categoriesGrid}>
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div key={index} className={styles.categoryCard}>
                  <div className={styles.iconWrapper}>
                    <Icon size={36} strokeWidth={1.5} className={styles.categoryIcon} />
                  </div>
                  <h3>{cat.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
