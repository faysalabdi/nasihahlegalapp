import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, CheckCircle, ArrowRight, Users, DollarSign, Scale, Award, FileText, TrendingUp } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const caseStudies = [
  {
    id: 1,
    title: "Complex Family Property Settlement",
    category: "Family Law",
    client: "Confidential Client",
    duration: "8 months",
    outcome: "Favorable Settlement",
    value: "$2.3M",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1280",
    challenge: "Our client faced a complex property settlement involving multiple assets across different jurisdictions, including business interests, real estate, and superannuation funds.",
    solution: "We developed a comprehensive strategy involving forensic accounting, asset valuation, and negotiation with multiple parties to achieve an equitable settlement.",
    result: "Successfully negotiated a settlement that protected our client's interests while ensuring fair distribution of assets, avoiding costly litigation.",
    keyPoints: [
      "Comprehensive asset valuation across multiple jurisdictions",
      "Strategic negotiation avoiding lengthy court proceedings",
      "Protection of business interests and future income streams",
      "Favorable custody arrangements for children"
    ]
  },
  {
    id: 2,
    title: "Commercial Property Development Dispute",
    category: "Property Law",
    client: "Melbourne Development Group",
    duration: "12 months",
    outcome: "Successful Resolution",
    value: "$5.8M",
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1280",
    challenge: "A major property development project was stalled due to council disputes, neighbor objections, and complex planning law issues.",
    solution: "Our team navigated complex planning regulations, engaged with stakeholders, and developed a comprehensive legal strategy to address all concerns.",
    result: "Project approval obtained with favorable conditions, allowing the development to proceed and generating significant value for our client.",
    keyPoints: [
      "Successfully navigated complex planning law requirements",
      "Resolved neighbor disputes through mediation",
      "Secured favorable development conditions",
      "Project value increased by 40% post-approval"
    ]
  },
  {
    id: 3,
    title: "Criminal Defense - Serious Assault Charges",
    category: "Criminal Law",
    client: "Confidential Client",
    duration: "6 months",
    outcome: "Charges Dismissed",
    value: "Freedom Preserved",
    image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1280",
    challenge: "Our client faced serious assault charges that could have resulted in significant jail time and permanent criminal record.",
    solution: "Thorough investigation revealed procedural errors and inconsistencies in the prosecution's case. We built a strong defense strategy.",
    result: "All charges were dismissed due to insufficient evidence and procedural issues, preserving our client's freedom and reputation.",
    keyPoints: [
      "Identified critical procedural errors in police investigation",
      "Gathered compelling evidence supporting client's innocence",
      "Successfully challenged prosecution's case in court",
      "Client's reputation and career prospects preserved"
    ]
  },
  {
    id: 4,
    title: "Employment Law - Wrongful Dismissal",
    category: "Employment Law",
    client: "Senior Executive",
    duration: "4 months",
    outcome: "Substantial Settlement",
    value: "$450K",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1280",
    challenge: "A senior executive was wrongfully dismissed without proper process, losing significant benefits and facing reputational damage.",
    solution: "We identified breaches of employment law and contract terms, building a strong case for wrongful dismissal and seeking appropriate compensation.",
    result: "Secured substantial settlement including compensation for lost income, benefits, and reputational damage.",
    keyPoints: [
      "Identified multiple breaches of employment legislation",
      "Negotiated settlement avoiding lengthy tribunal process",
      "Secured compensation for lost benefits and reputation",
      "Obtained positive reference for future employment"
    ]
  },
  {
    id: 5,
    title: "Estate Administration - Complex Will Dispute",
    category: "Wills & Estates",
    client: "Estate Beneficiaries",
    duration: "10 months",
    outcome: "Successful Distribution",
    value: "$1.8M",
    image: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1280",
    challenge: "A complex estate with disputed will validity, multiple beneficiaries, and significant assets across different jurisdictions.",
    solution: "Comprehensive legal analysis of will validity, mediation between parties, and strategic estate administration to maximize value.",
    result: "Successfully resolved all disputes and distributed estate assets according to the deceased's wishes, maximizing value for beneficiaries.",
    keyPoints: [
      "Resolved will validity disputes through expert analysis",
      "Mediated between conflicting beneficiary interests",
      "Maximized estate value through strategic asset management",
      "Completed distribution within reasonable timeframe"
    ]
  },
  {
    id: 6,
    title: "Commercial Contract Dispute Resolution",
    category: "Commercial Law",
    client: "Technology Startup",
    duration: "5 months",
    outcome: "Favorable Settlement",
    value: "$750K",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1280",
    challenge: "A technology startup faced a major contract dispute with a key supplier that threatened the company's operations and growth plans.",
    solution: "Detailed contract analysis, negotiation strategy, and alternative dispute resolution to protect our client's interests.",
    result: "Achieved favorable settlement that preserved business relationship while securing compensation for losses and future protection.",
    keyPoints: [
      "Preserved crucial business relationship through negotiation",
      "Secured compensation for past losses and damages",
      "Negotiated improved contract terms for future dealings",
      "Avoided costly litigation that could have damaged business"
    ]
  }
];

const stats = [
  { icon: Scale, number: "98%", label: "Success Rate" },
  { icon: DollarSign, number: "$50M+", label: "Value Recovered" },
  { icon: Users, number: "500+", label: "Cases Resolved" },
  { icon: Award, number: "15+", label: "Years Experience" }
];

const practiceAreas = [
  { name: "Family Law", cases: 45, successRate: "96%" },
  { name: "Property Law", cases: 38, successRate: "100%" },
  { name: "Criminal Law", cases: 52, successRate: "94%" },
  { name: "Commercial Law", cases: 41, successRate: "98%" },
  { name: "Employment Law", cases: 29, successRate: "97%" },
  { name: "Wills & Estates", cases: 33, successRate: "99%" }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1280"
          alt="Legal case studies and success stories"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/70" />
        
        {/* Decorative Pillars */}
        <div className="absolute top-12 left-12 opacity-20">
          <LegalPillar variant="light" size="lg" rotate />
        </div>
        <div className="absolute bottom-12 right-12 opacity-30">
          <LegalPillar variant="pattern" size="md" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">Case Studies</h1>
            <p className="text-lg md:text-xl mb-8">
              Discover how we've helped clients achieve successful outcomes across various legal challenges
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Award-Winning Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-primary-dark text-white relative overflow-hidden">
        {/* Decorative Pillars */}
        <div className="absolute top-0 left-1/4 opacity-10">
          <LegalPillar variant="light" size="md" />
        </div>
        <div className="absolute bottom-0 right-1/4 opacity-10">
          <LegalPillar variant="pattern" size="lg" rotate />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">Our Track Record</h2>
            <p className="text-lg opacity-90">Delivering exceptional results for our clients</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 opacity-5">
            <LegalPillar variant="dark" size="xl" />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Featured Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real cases, real results. See how our expertise and dedication have helped clients 
              overcome complex legal challenges and achieve their objectives.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {caseStudy.category}
                      </span>
                      <span className="bg-green-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        {caseStudy.outcome}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {caseStudy.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {caseStudy.value}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">{caseStudy.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                        <Scale className="h-4 w-4" />
                        Our Solution
                      </h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        The Result
                      </h4>
                      <p className="text-muted-foreground mb-4">{caseStudy.result}</p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {caseStudy.keyPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Area Performance */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Success Across All Practice Areas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our consistent track record of success spans all areas of legal practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-playfair">{area.name}</h3>
                  <div className="text-2xl font-bold text-green-500">{area.successRate}</div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{area.cases} cases handled</span>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">Success Rate</span>
                  </div>
                </div>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: area.successRate }}
                  />
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Ready to Become Our Next Success Story?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let our proven track record work for you. Contact us today to discuss how we can help 
            you achieve a successful outcome in your legal matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Start Your Case
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-colors">
              View All Practice Areas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 