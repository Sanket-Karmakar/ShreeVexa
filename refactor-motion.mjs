import fs from 'fs';
import path from 'path';

const filesToProcess = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/brands/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/licensing/page.tsx',
  'src/app/products/page.tsx',
  'src/app/services/page.tsx',
  'src/app/solutions/page.tsx',
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
];

filesToProcess.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes('@/lib/motion')) return;

  // Replace the import
  content = content.replace(/import\s*\{[^}]*\}\s*from\s*["']@\/lib\/motion["'];/, (match) => {
    return `import { EASING, VIEWPORT, useResponsiveMotion } from "@/lib/motion";`;
  });

  // Handle Navbar specifically if it's a function declaration
  content = content.replace(/(export default function \w+\(.*\) \{)/, (match, p1) => {
    return `${p1}\n  const { fadeUp, fadeIn, staggerContainer, staggerItem, heroContainer, heroItem, navReveal, drawerReveal, footerReveal, cardHover, imageHover, buttonInteraction, logoHover } = useResponsiveMotion();`;
  });

  fs.writeFileSync(filePath, content, 'utf-8');
});
