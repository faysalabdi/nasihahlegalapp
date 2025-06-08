"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

export default function AboutSection() {
  const values = [
    "Client-focused approach",
    "Transparent communication",
    "Strategic legal solutions",
    "Integrity and professionalism",
    "Commitment to excellence"
  ];

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Subtle decorative pillar near text */}
            <div className="absolute -top-6 -left-6 opacity-8">
              <LegalPillar variant="pattern" size="sm" rotate />
            </div>
            
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">About Nasihah Legal</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nasihah Legal is a client-centered law firm based in Coburg, Melbourne. 
                We pride ourselves on delivering practical, efficient, and effective legal 
                solutions tailored to each client's unique needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experienced solicitors combines in-depth legal knowledge with a 
                compassionate approach, ensuring we achieve the best possible outcomes for 
                our clients while providing clear guidance through complex legal matters.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="text-primary-light mr-2 h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/about"
                className="inline-flex items-center justify-center bg-primary-dark hover:bg-primary-main text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            
            <div className="relative">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/5668484/pexels-photo-5668484.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Nasihah Legal Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center mb-3">
                  <div className="text-4xl font-bold text-primary-dark mr-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Combined Experience</div>
                </div>
                <div className="h-1 w-16 bg-accent-gold mb-3"></div>
                <p className="text-sm">
                  Our dedicated team brings over 5 years of combined legal experience to every case.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}