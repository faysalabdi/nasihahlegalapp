"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Users, Clock, Award, Heart, Lightbulb } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const reasons = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "Over 15 years of successful legal representation with a 98% success rate in achieving favorable outcomes for our clients.",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "We prioritize your needs and goals, providing personalized legal strategies tailored to your unique situation.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Clock,
    title: "Responsive Communication",
    description: "Same-day response guarantee and 24/7 emergency support ensure you're never left waiting for answers.",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Award,
    title: "Expert Legal Team",
    description: "Our experienced solicitors bring specialized knowledge across multiple practice areas to serve you better.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Heart,
    title: "Compassionate Service",
    description: "We understand legal matters can be stressful. Our team provides empathetic support throughout your journey.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "We leverage modern legal strategies and technology to provide efficient, cost-effective solutions.",
    image: "https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-background-subtle relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-5 z-0">
        <LegalPillar variant="dark" size="xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
          >
            Why Choose Nasihah Legal?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Discover what sets us apart and why thousands of clients trust us with their most important legal matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-accent-gold/20 backdrop-blur-sm p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 font-playfair group-hover:text-primary-dark transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Experience the Difference</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join thousands of satisfied clients who have trusted Nasihah Legal with their legal needs. 
              Let us put our expertise to work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-primary-dark hover:bg-primary-dark/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Schedule Free Consultation
              </a>
              <a 
                href="/about"
                className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 