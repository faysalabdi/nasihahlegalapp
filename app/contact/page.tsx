'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "(03) 9123 4567",
    secondary: "Emergency: (03) 9123 4568",
    description: "Speak directly with our legal team",
    available: "Mon-Fri 8:30am-6:00pm"
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@nasihahlegal.com.au",
    secondary: "urgent@nasihahlegal.com.au",
    description: "Get a response within 24 hours",
    available: "24/7 monitoring"
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    primary: "123 Sydney Road, Coburg VIC 3058",
    secondary: "Level 2, Suite 205",
    description: "Free parking available",
    available: "By appointment"
  },
  {
    icon: Calendar,
    title: "Book Consultation",
    primary: "Online Booking",
    secondary: "Free 30-minute consultation",
    description: "Schedule at your convenience",
    available: "Same day available"
  }
];

const officeHours = [
  { day: "Monday", hours: "8:30am - 6:00pm" },
  { day: "Tuesday", hours: "8:30am - 6:00pm" },
  { day: "Wednesday", hours: "8:30am - 6:00pm" },
  { day: "Thursday", hours: "8:30am - 6:00pm" },
  { day: "Friday", hours: "8:30am - 6:00pm" },
  { day: "Saturday", hours: "9:00am - 1:00pm" },
  { day: "Sunday", hours: "Emergency only" }
];

const practiceAreas = [
  "Family Law",
  "Property Law", 
  "Commercial Law",
  "Criminal Law",
  "Civil Litigation",
  "Wills & Estates",
  "Employment Law",
  "Other Legal Matter"
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "f30af105-7d1f-4723-a9cb-dd4fec50cf50");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        alert("There was an error submitting your message. Please try again.");
      }
    } catch (error) {
      console.log("Error", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Contact Nasihah Legal"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Contact Us</h1>
            <p className="text-lg md:text-xl mb-8">
              Ready to discuss your legal matter? We're here to help with expert guidance and personalized service.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Same Day Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 opacity-5">
            <LegalPillar variant="dark" size="xl" />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you. We're committed to responding promptly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                  <div className="bg-primary-light/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-dark" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-playfair">{method.title}</h3>
                  <p className="text-primary-dark font-semibold mb-1">{method.primary}</p>
                  <p className="text-sm text-muted-foreground mb-3">{method.secondary}</p>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <div className="text-xs text-primary-dark font-medium bg-primary-light/10 px-3 py-1 rounded-full inline-block">
                    {method.available}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-20 left-0 opacity-5">
          <LegalPillar variant="pattern" size="xl" rotate />
        </div>
        <div className="absolute bottom-10 right-0 opacity-5">
          <LegalPillar variant="light" size="lg" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 font-playfair">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-primary-dark/90 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="f30af105-7d1f-4723-a9cb-dd4fec50cf50" />
                  
                  {/* Optional: Bot check */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      placeholder="(03) 1234 5678"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Practice Area *</label>
                    <select 
                      name="practiceArea"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                    >
                      <option value="">Select a practice area</option>
                      {practiceAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea 
                      rows={5}
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      placeholder="Please describe your legal matter and how we can help you..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      name="privacyConsent"
                      required
                      className="mt-1 w-4 h-4 text-primary-dark border-gray-300 rounded focus:ring-primary-light"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-primary-dark hover:underline">Privacy Policy</a> and 
                      consent to being contacted about my legal matter.
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              
              {/* Office Details */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 font-playfair">Office Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">123 Sydney Road, Coburg VIC 3058</p>
                      <p className="text-gray-600">Level 2, Suite 205</p>
                      <p className="text-sm text-primary-dark mt-1">Free parking available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">Main: (03) 9123 4567</p>
                      <p className="text-gray-600">Emergency: (03) 9123 4568</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-light/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@nasihahlegal.com.au</p>
                      <p className="text-gray-600">urgent@nasihahlegal.com.au</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 font-playfair">Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-light/10 rounded-lg">
                  <p className="text-sm text-primary-dark font-medium">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Emergency consultations available 24/7 by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Find Our Office</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in Coburg with easy access by car or public transport. Free parking available for all clients.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.9588938329707!2d144.96442541744386!3d-37.74178899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644a54a800a15%3A0x33f92589cdc593c4!2s1%2F288%20Sydney%20Rd%2C%20Coburg%20VIC%203058!5e0!3m2!1sen!2sau!4v1688434111681!5m2!1sen!2sau" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nasihah Legal Office Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            Don't wait - legal matters are time-sensitive. Contact us today for your free consultation 
            and let us help you navigate your legal challenges with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0391234567"
              className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Call Now: (03) 9123 4567
              <Phone className="h-4 w-4" />
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-colors flex items-center justify-center gap-2">
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 