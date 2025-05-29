import Hero from '@/components/home/Hero';
import PracticeAreas from '@/components/home/PracticeAreas';
import AboutSection from '@/components/home/AboutSection';
import TeamSection from '@/components/home/TeamSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <AboutSection />
      <TestimonialsCarousel />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}