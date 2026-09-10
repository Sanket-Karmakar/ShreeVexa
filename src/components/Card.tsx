"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ImageIcon } from "lucide-react";
import styles from "./Card.module.css";

interface CardProps {
  title?: ReactNode;
  description?: ReactNode;
  
  imageSrc?: string;
  imageAlt?: string;
  imageRatio?: 'product' | 'service' | 'hero' | 'square';
  
  icon?: ReactNode;
  iconStyle?: React.CSSProperties;
  
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  
  variants?: Variants;
  whileHover?: string | any;
  onClick?: () => void;
}

export function Card({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  imageRatio = 'square',
  icon,
  iconStyle,
  children,
  className = "",
  style,
  variants,
  whileHover,
  onClick
}: CardProps) {
  const [imgError, setImgError] = useState(false);
  
  const getRatioClass = () => {
    switch (imageRatio) {
      case 'product': return styles.ratioProduct;
      case 'service': return styles.ratioService;
      case 'hero': return styles.ratioHero;
      default: return styles.ratioSquare;
    }
  };

  const cardClasses = [
    styles.card,
    imageSrc ? styles.hasImage : '',
    children ? styles.hasFooter : '',
    className
  ].filter(Boolean).join(" ");

  return (
    <motion.div 
      className={cardClasses}
      style={style}
      variants={variants}
      whileHover={whileHover}
      onClick={onClick}
    >
      {imageSrc && (
        <div className={`${styles.imageWrapper} ${getRatioClass()}`}>
          {!imgError ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.image}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className={styles.fallbackPlaceholder}>
               <ImageIcon size={48} className={styles.fallbackIcon} />
            </div>
          )}
        </div>
      )}
      
      <div className={styles.content}>
        {icon && (
          <div className={styles.iconWrapper} style={iconStyle}>
            {icon}
          </div>
        )}
        
        {title && <div className={styles.title}>{title}</div>}
        
        {description && <div className={styles.description}>{description}</div>}
        
        {children && <div className={styles.footer}>{children}</div>}
      </div>
    </motion.div>
  );
}
