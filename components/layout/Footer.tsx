import Link from "next/link";
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone, Clock } from "lucide-react";
import { NAV_ITEMS, CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return <Facebook size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "twitter":
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nasihah Legal</h3>
            <p className="text-sm text-gray-300 mb-6">
              Professional legal services focused on achieving the best outcomes for our clients through expertise, dedication, and personalized attention.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/practice-areas#civil-litigation" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#criminal-law" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#wills-estates" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Wills & Estates
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#family-law" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas#property-law" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Property Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">{CONTACT_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Nasihah Legal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}