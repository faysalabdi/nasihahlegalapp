"use client";

import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp, Scale, CheckCircle } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const stats = [
  {
    icon: Users,
    number: "2,500+",
    label: "Clients Served",
    description: "Successfully represented clients across Victoria"
  },
  {
    icon: Award,
    number: "98%",
    label: "Success Rate",
    description: "Achieving favorable outcomes for our clients"
  },
  {
    icon: Clock,
    number: "15+",
    label: "Years Experience",
    description: "Combined legal expertise across our team"
  },
  {
    icon: TrendingUp,
    number: "$50M+",
    label: "Value Recovered",
    description: "In settlements and judgments for clients"
  },
  {
    icon: Scale,
    number: "1,200+",
    label: "Cases Won",
    description: "Successful legal outcomes delivered"
  },
  {
    icon: CheckCircle,
    number: "24/7",
    label: "Support Available",
    description: "Emergency legal assistance when needed"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-25 z-0">
        <LegalPillar variant="light" size="xl" />
      </div>
      <div className="absolute top-32 right-12 opacity-10 z-0">
        <LegalPillar variant="pattern" size="lg" rotate />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-6 z-0">
        <LegalPillar variant="light" size="md" rotate />
      </div>
      <div className="absolute bottom-16 right-1/3 opacity-12 z-0">
        <LegalPillar variant="pattern" size="sm" />
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
            Proven Results That Speak for Themselves
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Our track record demonstrates our commitment to excellence and client satisfaction across all practice areas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-accent-gold/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-gold/30 transition-colors">
                    <IconComponent className="h-8 w-8 text-accent-gold" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-gold">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-6">
            Ready to become our next success story?
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center bg-accent-gold hover:bg-accent-gold/90 text-primary-dark font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Get Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
} 