import React from 'react';
import { Instagram, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Salma Batroun</h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Authentic Lebanese flavors by the sea. Discover the journey from village life to the vibrant heart of Batroun.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} className="text-secondary" />
                Bahsa, Batroun, Lebanon
              </li>
              <li>
                <a href="tel:+96176333156" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} className="text-secondary" />
                  +961 76 333 156
                </a>
              </li>
              <li>
                <a href="https://wa.me/96176333156" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <MessageCircle size={18} className="text-secondary" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/salma.lebnen" 
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Salma Batroun. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-xs uppercase tracking-widest">Bahsa Bay</span>
            <span className="text-xs uppercase tracking-widest">Lebanon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
