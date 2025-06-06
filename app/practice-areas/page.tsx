import React from 'react';
import Image from 'next/image';
import { Scale, Shield, Home, Briefcase, Users, FileText, Clock, CheckCircle } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const practiceAreas = [
  {
    title: "Family Law",
    icon: Users,
    description: "Comprehensive family law services including divorce, custody, and property settlements.",
    services: ["Divorce & Separation", "Child Custody", "Property Settlement", "Prenuptial Agreements", "Adoption"],
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    title: "Property Law",
    icon: Home,
    description: "Expert guidance through property transactions, disputes, and development matters.",
    services: ["Property Purchase/Sale", "Conveyancing", "Property Disputes", "Development Applications", "Lease Agreements"],
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    title: "Commercial Law",
    icon: Briefcase,
    description: "Strategic legal support for businesses of all sizes and industries.",
    services: ["Business Formation", "Contract Drafting", "Commercial Disputes", "Employment Law", "Intellectual Property"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    title: "Criminal Law",
    icon: Shield,
    description: "Experienced criminal defense representation for all types of charges.",
    services: ["Criminal Defense", "Traffic Offenses", "Assault Charges", "Drug Offenses", "Court Representation"],
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    title: "Civil Litigation",
    icon: Scale,
    description: "Skilled representation in civil disputes and litigation matters.",
    services: ["Contract Disputes", "Personal Injury", "Debt Recovery", "Insurance Claims", "Mediation Services"],
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1280"
  },
  {
    title: "Wills & Estates",
    icon: FileText,
    description: "Comprehensive estate planning and administration services.",
    services: ["Will Preparation", "Estate Administration", "Power of Attorney", "Guardianship", "Estate Disputes"],
    image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1280"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We begin with a comprehensive consultation to understand your legal needs and objectives."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our team develops a tailored legal strategy designed to achieve your specific goals."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We execute the strategy with precision, keeping you informed throughout the process."
  },
  {
    step: "04",
    title: "Resolution",
    description: "We work diligently to achieve the best possible outcome for your legal matter."
  }
];

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Legal practice areas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70" />
        
        {/* Decorative Pillars */}
        <div className="absolute top-10 left-10 opacity-20">
          <LegalPillar variant="light" size="lg" rotate />
        </div>
        <div className="absolute bottom-20 right-20 opacity-30">
          <LegalPillar variant="pattern" size="md" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Practice Areas</h1>
            <p className="text-lg md:text-xl mb-8">
              Comprehensive legal services across multiple practice areas, delivered with expertise and dedication
            </p>
            <div className="flex items-center justify-center gap-4">
              <Clock className="h-5 w-5" />
              <span>Available 24/7 for urgent matters</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 opacity-10">
            <LegalPillar variant="dark" size="xl" />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Our Areas of Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive legal services across multiple practice areas, ensuring you receive 
              expert guidance no matter what legal challenges you face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative h-48">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 font-playfair">{area.title}</h3>
                    <p className="text-muted-foreground mb-4">{area.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary-dark">Services Include:</h4>
                      <ul className="space-y-1">
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary-light mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-20 left-0 opacity-5">
          <LegalPillar variant="pattern" size="xl" rotate />
        </div>
        <div className="absolute bottom-10 right-0 opacity-5">
          <LegalPillar variant="light" size="lg" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Our Legal Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach to ensure the best possible outcomes for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary-dark text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-light/30 transform translate-x-8" />
                )}
                <h3 className="text-xl font-bold mb-4 font-playfair">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-0 left-1/4 opacity-10">
          <LegalPillar variant="light" size="lg" rotate />
        </div>
        <div className="absolute bottom-0 right-1/3 opacity-10">
          <LegalPillar variant="pattern" size="md" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a consultation and let us help you navigate your legal challenges with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-colors">
              Call Now: (03) 9123 4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 