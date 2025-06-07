"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, FileText, Users, Gavel, CheckCircle } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const processSteps = [
  {
    step: 1,
    icon: Phone,
    title: "Initial Consultation",
    description: "Contact us for a free consultation where we'll discuss your legal needs and assess your case.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "30-60 minutes"
  },
  {
    step: 2,
    icon: FileText,
    title: "Case Assessment",
    description: "Our legal team conducts thorough research and analysis to develop the best strategy for your case.",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "1-3 days"
  },
  {
    step: 3,
    icon: Users,
    title: "Strategy Development",
    description: "We create a customized legal strategy tailored to your specific situation and desired outcomes.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "3-5 days"
  },
  {
    step: 4,
    icon: Gavel,
    title: "Legal Action",
    description: "We execute the legal strategy, representing you in negotiations, court proceedings, or other legal matters.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "Varies by case"
  },
  {
    step: 5,
    icon: CheckCircle,
    title: "Resolution",
    description: "We work tirelessly to achieve the best possible outcome for your case and ensure your satisfaction.",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "Case dependent"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-7 z-0">
        <LegalPillar variant="light" size="lg" />
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
            Our Legal Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We follow a proven 5-step process to ensure the best possible outcome for every client. 
            Here's what you can expect when working with Nasihah Legal.
          </motion.p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                    
                    {/* Step number overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-accent-gold text-primary-dark font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-white/90 backdrop-blur-sm text-primary-dark text-sm font-medium px-3 py-1 rounded-full">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-light/10 p-4 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-primary-light mb-1">
                        Step {step.step}
                      </div>
                      <h3 className="text-2xl font-bold font-playfair">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Progress line for non-last items */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block">
                      <div className="w-px h-16 bg-gradient-to-b from-primary-light to-transparent mx-6"></div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-dark text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Ready to Get Started?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Take the first step towards resolving your legal matter. Contact us today for your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-accent-gold hover:bg-accent-gold/90 text-primary-dark font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Start Your Free Consultation
              </a>
              <a 
                href="tel:(03) 1234 5678"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Call (03) 1234 5678
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 