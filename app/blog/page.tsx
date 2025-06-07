"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import LegalPillar from '@/src/components/LegalPillar';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Your Rights in Family Law Disputes',
    excerpt: 'Navigate the complexities of family law with confidence. Learn about your rights and options in divorce, custody, and property settlement matters.',
    content: 'Family law disputes can be emotionally challenging and legally complex...',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Family Law',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg',
    readTime: '5 min read',
    tags: ['Family Law', 'Divorce', 'Custody', 'Rights']
  },
  {
    id: '2',
    title: 'Property Law: What Every Buyer Should Know',
    excerpt: 'Essential insights for property buyers in Victoria. From contracts to settlement, understand the legal aspects of your property purchase.',
    content: 'Buying property is one of the largest investments most people make...',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Property Law',
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    readTime: '7 min read',
    tags: ['Property Law', 'Conveyancing', 'Buying', 'Contracts']
  },
  {
    id: '3',
    title: 'Criminal Law: Your Rights During Police Questioning',
    excerpt: 'Know your rights when dealing with law enforcement. Understanding what you can and cannot be compelled to do during police questioning.',
    content: 'Being questioned by police can be intimidating, but knowing your rights...',
    author: 'David Wilson',
    date: '2024-01-05',
    category: 'Criminal Law',
    image: 'https://images.pexels.com/photos/8112198/pexels-photo-8112198.jpeg',
    readTime: '6 min read',
    tags: ['Criminal Law', 'Rights', 'Police', 'Legal Advice']
  },
  {
    id: '4',
    title: 'Estate Planning: Securing Your Family\'s Future',
    excerpt: 'The importance of having a will and estate plan. Protect your loved ones and ensure your wishes are carried out with proper legal documentation.',
    content: 'Estate planning is often overlooked until it\'s too late...',
    author: 'Emma Thompson',
    date: '2023-12-28',
    category: 'Wills & Estates',
    image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg',
    readTime: '8 min read',
    tags: ['Wills', 'Estate Planning', 'Family', 'Legal Documents']
  },
  {
    id: '5',
    title: 'Commercial Law: Contract Essentials for Small Business',
    excerpt: 'Key contract considerations for small business owners. Protect your business interests with properly drafted commercial agreements.',
    content: 'Running a small business involves numerous contracts and agreements...',
    author: 'Robert Martinez',
    date: '2023-12-20',
    category: 'Commercial Law',
    image: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg',
    readTime: '9 min read',
    tags: ['Commercial Law', 'Contracts', 'Small Business', 'Legal Protection']
  },
  {
    id: '6',
    title: 'Civil Litigation: When to Consider Legal Action',
    excerpt: 'Understanding when civil litigation is the right path. Explore alternatives to court and know when legal action becomes necessary.',
    content: 'Civil disputes can arise in many areas of life and business...',
    author: 'Lisa Anderson',
    date: '2023-12-15',
    category: 'Civil Litigation',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg',
    readTime: '6 min read',
    tags: ['Civil Litigation', 'Legal Action', 'Disputes', 'Court']
  }
];

const categories = ['All', 'Family Law', 'Property Law', 'Criminal Law', 'Wills & Estates', 'Commercial Law', 'Civil Litigation'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg"
            alt="Legal insights and updates"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        {/* Decorative Legal Pillars */}
        <div className="absolute top-16 left-8 opacity-10">
          <LegalPillar variant="light" size="xl" />
        </div>
        <div className="absolute bottom-16 right-8 opacity-15">
          <LegalPillar variant="pattern" size="lg" rotate />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              Legal Insights & Updates
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Stay informed with the latest legal developments, expert insights, and practical advice from our experienced legal team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-dark text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-dark text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 font-playfair text-primary-dark">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:text-accent-gold transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-4 font-playfair">Stay Updated</h2>
            <p className="text-gray-200 mb-8">
              Subscribe to our newsletter for the latest legal insights, updates, and expert advice delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
              <button className="bg-accent-gold hover:bg-accent-gold/90 text-primary-dark font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 font-playfair text-primary-dark">
              Need Legal Advice?
            </h2>
            <p className="text-gray-600 mb-8">
              Don't let legal questions go unanswered. Contact our experienced team for personalized legal advice and representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-dark hover:bg-primary-dark/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/practice-areas"
                className="border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                View Practice Areas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 