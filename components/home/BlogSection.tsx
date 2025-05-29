"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarIcon } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function BlogSection() {
  return (
    <section className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Latest Insights</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with our latest articles and legal resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary-dark text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <CalendarIcon size={14} className="mr-1" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary-light transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-primary-dark font-medium hover:text-primary-light transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}