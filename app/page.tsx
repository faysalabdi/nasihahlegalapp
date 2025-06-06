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
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_MOTTO, CONTACT_INFO } from '@/lib/constants';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": SITE_NAME,
  "description": `${SITE_NAME} - "${SITE_MOTTO}" ${SITE_DESCRIPTION}`,
  "slogan": SITE_MOTTO,
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo.png`,
  "image": `${SITE_URL}/og-image.png`,
  "telephone": CONTACT_INFO.phone,
  "email": CONTACT_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1/288 Sydney Road",
    "addressLocality": "Coburg",
    "addressRegion": "VIC",
    "postalCode": "3058",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.74178899999999,
    "longitude": 144.96442541744386
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Melbourne"
    },
    {
      "@type": "State",
      "name": "Victoria"
    }
  ],
  "serviceType": [
    "Civil Litigation",
    "Criminal Law",
    "Family Law",
    "Property Law",
    "Wills and Estates",
    "Commercial Law"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Civil Litigation",
          "description": "Expert representation in civil disputes including motor vehicle accidents, building disputes, and debt recovery."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Criminal Law",
          "description": "Strategic defense and representation for criminal matters including plea hearings and diversions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Law",
          "description": "Compassionate guidance through family matters including property settlements and children matters."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Law",
          "description": "Comprehensive property services including conveyancing and property disputes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wills and Estates",
          "description": "Estate planning services including wills, estate administration, and Part IV disputes."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Robert Williams"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Nasihah Legal provided exceptional service during my property dispute. Their attention to detail and strategic approach led to a favorable outcome."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emma Thompson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "The team at Nasihah Legal guided me through a difficult family law matter with compassion and expertise. I couldn't be more grateful for their support."
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/nasihahlegal",
    "https://www.facebook.com/nasihahlegal",
    "https://twitter.com/nasihahlegal"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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