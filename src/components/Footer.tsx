import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from 'figma:asset/da8270f0209152507968e766f06d8e9c76a4d8bc.png';

export default function Footer() {
  return (
    <footer className="bg-[#1f4165] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Klaar Solutions - Your Space, Our Sparkle" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-blue-100 mb-4">
              Integrated Cleaning, Solar & Technical Solutions You Can Trust
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#93c5fd] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#93c5fd] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#93c5fd] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#93c5fd] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/health-safety" className="text-blue-100 hover:text-white transition-colors">
                  Health & Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cleaning" className="text-blue-100 hover:text-white transition-colors">
                  Professional Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services/solar" className="text-blue-100 hover:text-white transition-colors">
                  Solar Installation
                </Link>
              </li>
              <li>
                <Link to="/services/electrical" className="text-blue-100 hover:text-white transition-colors">
                  Electrical Services
                </Link>
              </li>
              <li>
                <Link to="/services/plumbing" className="text-blue-100 hover:text-white transition-colors">
                  Plumbing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Nairobi, Kenya</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+254712345678" className="text-blue-100 hover:text-white transition-colors block">
                    +254 712 345 678
                  </a>
                  <a href="tel:+254723456789" className="text-blue-100 hover:text-white transition-colors block">
                    +254 723 456 789
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="mailto:info@klaarsolutions.co.ke" className="text-blue-100 hover:text-white transition-colors">
                  info@klaarsolutions.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Klaar Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}