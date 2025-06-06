"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Newspaper, AlertCircle, TrendingUp } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

const newsItems = [
  {
    type: "Legal Update",
    icon: Newspaper,
    title: "New Family Law Reforms Take Effect",
    excerpt: "Recent changes to family law legislation affect property settlements and parenting arrangements. Learn how these updates may impact your case.",
    image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Family Law",
    urgent: false
  },
  {
    type: "Court Notice",
    icon: AlertCircle,
    title: "Melbourne Courts Resume Full Operations",
    excerpt: "All Melbourne courts have resumed normal operations following recent disruptions. New protocols are in place for court appearances.",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2024-01-12",
    readTime: "3 min read",
    category: "Court Updates",
    urgent: true
  },
  {
    type: "Market Insight",
    icon: TrendingUp,
    title: "Property Market Changes Affect Legal Transactions",
    excerpt: "Recent property market fluctuations are impacting conveyancing timelines and contract negotiations across Victoria.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Property Law",
    urgent: false
  }
];

const quickUpdates = [
  {
    title: "Extended Court Hours During Peak Season",
    date: "2024-01-14",
    category: "Court Updates"
  },
  {
    title: "New Online Portal for Document Submissions",
    date: "2024-01-13",
    category: "Technology"
  },
  {
    title: "Changes to Legal Aid Eligibility Criteria",
    date: "2024-01-11",
    category: "Legal Aid"
  },
  {
    title: "Updated Guidelines for Commercial Leases",
    date: "2024-01-09",
    category: "Commercial Law"
  }
];

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function NewsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative Legal Pillars */}
      <div className="absolute top-16 left-8 opacity-7 z-0">
        <LegalPillar variant="pattern" size="lg" />
      </div>
      <div className="absolute top-40 right-12 opacity-5 z-0">
        <LegalPillar variant="dark" size="xl" rotate />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10 z-0">
        <LegalPillar variant="light" size="md" />
      </div>
      <div className="absolute bottom-32 right-1/3 opacity-8 z-0">
        <LegalPillar variant="pattern" size="sm" rotate />
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
            Legal News & Updates
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Stay informed with the latest legal developments, court updates, and industry insights 
            that may affect your legal matters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-playfair">Featured Updates</h3>
            <div className="space-y-6">
              {newsItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {item.urgent && (
                          <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            URGENT
                          </div>
                        )}
                        <div className="absolute bottom-4 right-4 bg-primary-dark text-white text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </div>
                      </div>
                      
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center mb-3">
                          <div className="bg-primary-light/10 p-2 rounded-full mr-3">
                            <IconComponent className="h-4 w-4 text-primary-dark" />
                          </div>
                          <span className="text-sm font-medium text-primary-light">
                            {item.type}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-3 group-hover:text-primary-dark transition-colors">
                          {item.title}
                        </h4>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground space-x-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(item.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {item.readTime}
                            </div>
                          </div>
                          
                          <Link
                            href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="inline-flex items-center text-primary-dark font-medium hover:text-primary-light transition-colors"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Quick Updates Sidebar */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Quick Updates</h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="space-y-4">
                {quickUpdates.map((update, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-semibold text-sm mb-2 hover:text-primary-dark transition-colors cursor-pointer">
                      {update.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(update.date)}</span>
                      <span className="bg-secondary-main px-2 py-1 rounded-full">
                        {update.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/news"
                  className="block text-center bg-primary-dark hover:bg-primary-dark/90 text-white font-medium py-2 px-4 rounded-full transition-colors text-sm"
                >
                  View All Updates
                </Link>
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-primary-dark text-white rounded-lg p-6 mt-6"
            >
              <h4 className="text-lg font-bold mb-3">Stay Informed</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest legal updates and insights.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold"
                />
                <button className="w-full bg-accent-gold hover:bg-accent-gold/90 text-primary-dark font-medium py-2 px-4 rounded-md transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-background-subtle p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">Need Legal Advice on Recent Changes?</h3>
            <p className="text-muted-foreground mb-6">
              Legal updates can be complex. Our experienced team can help you understand how recent changes 
              might affect your specific situation.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-primary-dark hover:bg-primary-dark/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Get Expert Guidance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 