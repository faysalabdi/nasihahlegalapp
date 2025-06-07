'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Award, BookOpen, Users, Scale, GraduationCap, ArrowRight } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const teamMembers = [
  {
    name: "Mohamed Mustafa",
    position: "Senior Partner & Founder",
    specialization: "Family Law & Commercial Litigation",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800",
    bio: "With over 5 years of experience, Mohamed founded Nasihah Legal with a vision to provide accessible, high-quality legal services. He specializes in complex family law matters and commercial disputes.",
    education: ["LLB, University of Deakin"],
    admissions: ["Supreme Court of Victoria", "High Court of Australia"],
    languages: ["English", "Arabic"],
    email: "mohamed@nasihahlegal.com.au",
    phone: "(03) 9123 4567"
  }
];

const stats = [
  { number: "20+", label: "Years Combined Experience" },
  { number: "100+", label: "Cases Handled" },
  { number: "4", label: "Languages Spoken" },
  { number: "95%", label: "Client Satisfaction Rate" }
];

const values = [
  {
    icon: Scale,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our professional dealings."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We work tirelessly to achieve your goals."
  },
  {
    icon: BookOpen,
    title: "Expertise",
    description: "Our team brings deep knowledge and experience across all practice areas."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every case and client interaction."
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Our legal team"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70" />
        
        {/* Decorative Pillars */}
        <div className="absolute top-16 left-16 opacity-20">
          <LegalPillar variant="light" size="lg" />
        </div>
        <div className="absolute bottom-16 right-16 opacity-30">
          <LegalPillar variant="pattern" size="md" rotate />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Our Team</h1>
            <p className="text-lg md:text-xl mb-8">
              Meet the experienced legal professionals dedicated to achieving the best outcomes for our clients
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <span>Highly Qualified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-primary-dark text-white relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-0 left-1/4 opacity-10">
          <LegalPillar variant="light" size="md" />
        </div>
        <div className="absolute bottom-0 right-1/4 opacity-10">
          <LegalPillar variant="pattern" size="lg" rotate />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 opacity-5">
            <LegalPillar variant="dark" size="xl" />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Meet Our Legal Experts</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of legal professionals brings together decades of experience 
              and a shared commitment to excellence in legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <a href={`mailto:${member.email}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Mail className="h-4 w-4" />
                      </a>
                      <a href={`tel:${member.phone}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Phone className="h-4 w-4" />
                      </a>
                      <a href="#" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 font-playfair">{member.name}</h3>
                  <p className="text-primary-dark font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.specialization}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                  
                  <div className="space-y-3 text-xs">
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-1">Education:</h4>
                      <ul className="space-y-1">
                        {member.education.map((edu, eduIndex) => (
                          <li key={eduIndex} className="text-muted-foreground">• {edu}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-1">Languages:</h4>
                      <p className="text-muted-foreground">{member.languages.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-20 left-0 opacity-5">
          <LegalPillar variant="pattern" size="xl" />
        </div>
        <div className="absolute bottom-10 right-0 opacity-5">
          <LegalPillar variant="light" size="lg" rotate />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-0 left-1/3 opacity-10">
          <LegalPillar variant="light" size="md" rotate />
        </div>
        <div className="absolute bottom-0 right-1/4 opacity-10">
          <LegalPillar variant="pattern" size="lg" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Work With Our Expert Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to discuss your legal matter? Our experienced team is here to provide 
            the expert guidance and representation you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-colors inline-flex items-center justify-center gap-2"
            >
              Contact Our Team
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 