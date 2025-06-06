import Hero from '@/components/home/Hero';
import PracticeAreas from '@/components/home/PracticeAreas';
import AboutSection from '@/components/home/AboutSection';
import StatsSection from '@/components/home/StatsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import TeamSection from '@/components/home/TeamSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ProcessSection from '@/components/home/ProcessSection';
import BlogSection from '@/components/home/BlogSection';
import FAQSection from '@/components/home/FAQSection';
import NewsSection from '@/components/home/NewsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <PracticeAreas />
      <AboutSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsCarousel />
      <TeamSection />
      <BlogSection />
      <NewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}