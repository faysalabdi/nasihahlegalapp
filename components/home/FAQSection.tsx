"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const faqs = [
  {
    question: "How much do your legal services cost?",
    answer: "Our fees vary depending on the complexity and type of legal matter. We offer transparent pricing with no hidden costs. During your free initial consultation, we'll provide a clear estimate of costs involved. We also offer flexible payment arrangements and fixed-fee services for certain matters."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we provide free initial consultations for all new clients. This 30-60 minute session allows us to understand your legal needs, assess your case, and explain how we can help. There's no obligation to proceed, and you'll receive valuable legal insights regardless."
  },
  {
    question: "What areas of law do you specialize in?",
    answer: "We specialize in Family Law, Property Law, Commercial Law, Criminal Law, Civil Litigation, and Wills & Estates. Our experienced team has deep expertise across these practice areas, ensuring you receive specialized knowledge for your specific legal matter."
  },
  {
    question: "How long will my case take to resolve?",
    answer: "The timeline varies significantly depending on the type and complexity of your case. Simple matters may be resolved in weeks, while complex litigation can take months or years. During your consultation, we'll provide a realistic timeline based on your specific circumstances."
  },
  {
    question: "Can you help with urgent legal matters?",
    answer: "Absolutely. We understand that legal emergencies don't follow business hours. We offer 24/7 emergency support for urgent matters and guarantee same-day response to all inquiries. Contact us immediately if you're facing an urgent legal situation."
  },
  {
    question: "Do I need to come to your office for meetings?",
    answer: "While we welcome clients to our Coburg office, we also offer flexible meeting options including video consultations, phone calls, and home visits when necessary. We'll work around your schedule and preferences to ensure convenient access to our services."
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Bring any relevant documents related to your legal matter, such as contracts, correspondence, court documents, or identification. Don't worry if you don't have everything - we can guide you on what's needed as we proceed. The most important thing is to come prepared to discuss your situation openly."
  },
  {
    question: "How do you communicate case updates?",
    answer: "We believe in transparent, regular communication. You'll receive updates via your preferred method - email, phone, or text. We provide detailed progress reports and are always available to answer questions. Our client portal also allows you to track your case status 24/7."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background-subtle relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-6 z-0">
        <LegalPillar variant="pattern" size="lg" />
      </div>
      <div className="absolute top-40 right-12 opacity-8 z-0">
        <LegalPillar variant="dark" size="xl" rotate />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-5 z-0">
        <LegalPillar variant="light" size="md" rotate />
      </div>
      <div className="absolute bottom-32 right-1/3 opacity-10 z-0">
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
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Find answers to common questions about our legal services. Can't find what you're looking for? 
            Contact us for personalized assistance.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary-dark" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-dark" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-2">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our legal experts are here to help. Get personalized answers to your specific legal questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-primary-dark hover:bg-primary-dark/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Ask a Question
              </a>
              <a 
                href="tel:(03) 1234 5678"
                className="border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 