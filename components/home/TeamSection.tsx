"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '@/lib/constants';
import LegalPillar from '@/src/components/LegalPillar';

export default function TeamSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-20 left-6 opacity-6 z-0">
        <LegalPillar variant="pattern" size="lg" />
      </div>
      <div className="absolute top-32 right-10 opacity-8 z-0">
        <LegalPillar variant="dark" size="xl" rotate />
      </div>
      <div className="absolute bottom-24 left-1/3 opacity-5 z-0">
        <LegalPillar variant="light" size="md" rotate />
      </div>
      <div className="absolute bottom-16 right-1/4 opacity-10 z-0">
        <LegalPillar variant="pattern" size="sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Legal Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet our team of experienced lawyers dedicated to providing exceptional legal representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden group relative"
            >
              {/* Subtle decorative pillar on alternating cards */}
              {index % 3 === 0 && (
                <div className="absolute top-2 right-2 opacity-8 z-10">
                  <LegalPillar variant="light" size="sm" />
                </div>
              )}
              
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-200">{member.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-light mb-3">{member.role}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.areas.map((area, idx) => (
                      <span key={idx} className="text-xs bg-secondary-main px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {member.bio}
                </p>
                <Link
                  href={`/team#${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-sm text-primary-dark font-medium hover:text-primary-light transition-colors"
                >
                  View Profile
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-flex items-center justify-center bg-primary-dark hover:bg-primary-main text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}