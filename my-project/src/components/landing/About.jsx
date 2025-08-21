// src/components/landing/About.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Container, Button } from '../common';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '500K+', label: 'Projects Completed', description: 'Successfully delivered' },
    { number: '150+', label: 'Countries', description: 'Global presence' },
    { number: '98%', label: 'Customer Satisfaction', description: 'Happy clients' },
    { number: '10+', label: 'Years Experience', description: 'Industry expertise' }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                About Our Company
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Building the Future of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Innovation</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're passionate about creating exceptional digital experiences that drive real business results. 
                Our team of experts combines cutting-edge technology with creative design to deliver solutions 
                that exceed expectations.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                'Award-winning design and development team',
                'Proven track record with Fortune 500 companies',
                'Cutting-edge technology stack and methodologies',
                'Commitment to sustainable and scalable solutions'
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Image Placeholder with Modern Design */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-64 flex items-center justify-center overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-slide" />
                </div>
                
                {/* Placeholder Content */}
                <div className="text-center text-white z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Innovation Hub</h3>
                  <p className="text-sm opacity-90">Where ideas come to life</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-float" style={{animationDelay: '1s'}} />
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-float" style={{animationDelay: '2s'}} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;