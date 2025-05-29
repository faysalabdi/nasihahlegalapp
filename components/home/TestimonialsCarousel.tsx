"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Handle navigation
  const handlePrev = () => {
    setAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Client Testimonials</h2>
          <p className="text-lg text-gray-300">
            See what our clients have to say about their experience working with Nasihah Legal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-12 left-0 opacity-10">
            <Quote size={120} />
          </div>

          <div className="relative overflow-hidden h-64 px-4">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
              >
                <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold text-lg">{TESTIMONIALS[currentIndex].author}</p>
                  <p className="text-gray-300">{TESTIMONIALS[currentIndex].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-6 bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}