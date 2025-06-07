"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Users, Clock, Award, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const reasons = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "98% success rate with over 15 years of experience"
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Personalized legal strategies tailored to your needs"
  },
  {
    icon: Clock,
    title: "Responsive Communication",
    description: "Same-day response and 24/7 emergency support"
  },
  {
    icon: Award,
    title: "Expert Legal Team",
    description: "Specialized knowledge across all practice areas"
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    description: "Empathetic support throughout your legal journey"
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Modern strategies for efficient, cost-effective results"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/legalteam.jpg"
          alt="Professional legal team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/75" />
      </div>

      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-10 z-10">
        <LegalPillar variant="light" size="xl" />
      </div>
      <div className="absolute bottom-16 right-8 opacity-15 z-10">
        <LegalPillar variant="pattern" size="lg" rotate />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Why Choose Nasihah Legal?
            </h2>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Discover what sets us apart and why thousands of clients trust us with their most important legal matters. 
              Our commitment to excellence and client satisfaction drives everything we do.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">50+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact"
                className="bg-accent-gold hover:bg-accent-gold/90 text-primary-dark font-semibold px-8 py-3 rounded-full transition-colors text-center"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-dark font-semibold px-8 py-3 rounded-full transition-colors text-center"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>

          {/* Right Side - Reasons List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/15 transition-all duration-300"
                >
                  <div className="bg-accent-gold/20 p-3 rounded-full flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-accent-gold" />
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold mb-1">{reason.title}</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Section - Experience the Difference */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold mb-4 font-playfair text-white">Experience the Difference</h3>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Join thousands of satisfied clients who have trusted Nasihah Legal with their legal needs. 
              Let us put our expertise to work for you and experience the difference that dedicated, 
              professional legal representation can make.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-gold" />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-gold" />
                <span>No Win, No Fee Options</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-gold" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 