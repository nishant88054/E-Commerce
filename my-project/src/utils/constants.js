// src/utils/constants.js
export const BRAND_CONFIG = {
  name: 'LogoName',
  tagline: 'Build Amazing Digital Experiences',
  description: 'Create stunning, responsive websites and applications that captivate your audience and drive results.',
  email: 'hello@logoname.com',
  phone: '+1 (555) 123-4567',
  address: '123 Innovation Street, Tech City, TC 12345'
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS = [
  { name: 'Twitter', href: 'https://twitter.com/yourcompany', icon: 'twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany', icon: 'linkedin' },
  { name: 'GitHub', href: 'https://github.com/yourcompany', icon: 'github' },
  { name: 'Instagram', href: 'https://instagram.com/yourcompany', icon: 'instagram' }
];

export const ANIMATION_DELAYS = {
  hero: {
    badge: '0ms',
    title: '200ms',
    subtitle: '400ms',
    buttons: '600ms',
    stats: '800ms'
  },
  features: {
    base: '100ms',
    stagger: 100
  }
};

export const THEME_COLORS = {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8'
  },
  secondary: {
    50: '#faf5ff',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9'
  }
};