"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LegalPillar from '@/src/components/LegalPillar';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Law firm office"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Motto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-accent-gold text-lg md:text-xl font-medium tracking-wide">
                "Sincere counsel. Trusted results."
              </p>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-playfair">
              Expert Legal Solutions for Complex Challenges
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-xl">
              We provide personalized legal guidance and representation to help you navigate through life's most challenging legal matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary-dark text-center font-medium py-3 px-8 rounded-full transition-colors"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/practice-areas"
                className="border border-white/60 hover:bg-white/10 text-white text-center font-medium py-3 px-8 rounded-full transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Additional decorative pillar near the card */}
            <div className="absolute -top-8 -right-8 opacity-20">
              <LegalPillar variant="pattern" size="md" rotate />
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">How Can We Help You?</h3>
              <ul className="space-y-3">
                {['Civil Litigation', 'Criminal Law', 'Family Law', 'Property Law', 'Wills & Estates'].map((area) => (
                  <li key={area} className="flex items-center text-gray-100">
                    <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-gray-100 mb-4">Need immediate assistance?</p>
                <a href="tel:(03) 1234 5678" className="flex items-center text-white font-medium">
                  <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  (03) 1234 5678
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}