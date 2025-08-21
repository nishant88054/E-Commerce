// src/pages/LandingPage.jsx
import React from 'react';
import { Header, Hero, Features, About, Testimonials, CTA, Footer } from '../components/landing';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;