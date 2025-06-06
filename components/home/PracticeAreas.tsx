"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Scale, Gavel, Scroll, Users, Home } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/constants';
import LegalPillar from '@/src/components/LegalPillar';

export default function PracticeAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'scale':
        return <Scale size={28} />;
      case 'gavel':
        return <Gavel size={28} />;
      case 'scroll':
        return <Scroll size={28} />;
      case 'users':
        return <Users size={28} />;
      case 'home':
        return <Home size={28} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-background-subtle relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-5 z-0">
        <LegalPillar variant="dark" size="xl" />
      </div>
      <div className="absolute top-40 right-12 opacity-8 z-0">
        <LegalPillar variant="light" size="lg" rotate />
      </div>
      <div className="absolute bottom-20 left-1/3 opacity-6 z-0">
        <LegalPillar variant="pattern" size="md" />
      </div>
      <div className="absolute bottom-32 right-1/4 opacity-10 z-0">
        <LegalPillar variant="dark" size="sm" rotate />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Practice Areas</h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive legal services across multiple practice areas, providing expert guidance and representation for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTICE_AREAS.map((area, index) => (
            <motion.div
              key={area.title}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 relative"
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Subtle decorative pillar on some cards */}
              {index % 2 === 0 && (
                <div className="absolute top-4 right-4 opacity-5">
                  <LegalPillar variant="pattern" size="sm" />
                </div>
              )}
              
              <div className="p-6 flex flex-col h-full">
                <div className="bg-primary-light/10 text-primary-dark p-3 rounded-full w-fit mb-6">
                  {renderIcon(area.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{area.description}</p>
                <ul className="space-y-2 mb-6">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-light mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/practice-areas#${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary-dark font-medium hover:text-primary-light transition-colors mt-auto"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}