import React from 'react';
import Image from 'next/image';
import { Briefcase, Award, Users, Scale } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Law firm office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">About Nasihah Legal</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              A trusted legal partner committed to excellence and client success
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded with a vision to provide accessible, high-quality legal services to the Coburg community, 
                Nasihah Legal has grown to become a trusted name in legal representation across Melbourne.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of experienced lawyers brings together diverse expertise and a shared commitment to 
                achieving the best possible outcomes for our clients. We understand that legal matters can be 
                challenging, which is why we focus on providing clear communication and practical solutions.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5668484/pexels-photo-5668484.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Our team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-primary-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Justice & Integrity</h3>
              <p className="text-muted-foreground">
                We uphold the highest standards of professional ethics and integrity in all our dealings.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground">
                Your success is our priority. We work tirelessly to achieve the best possible outcomes.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards of legal expertise and professional service.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-primary-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experience</h3>
              <p className="text-muted-foreground">
                Our team brings years of expertise across various areas of law.
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-primary-dark text-white rounded-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-lg">Practice Areas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}