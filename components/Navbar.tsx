'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Location', href: '/#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-primary">
            Salma <span className="text-secondary">Batroun</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-ink hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/96176333156"
            className="bg-primary text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-dark transition-all flex items-center gap-2"
          >
            <MessageCircle size={18} />
            BOOK NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 px-5 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-ink border-b border-gray-50 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/96176333156"
            className="bg-primary text-white w-full py-4 rounded-xl text-center font-bold flex justify-center items-center gap-2"
          >
            <MessageCircle size={20} />
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  );
}
