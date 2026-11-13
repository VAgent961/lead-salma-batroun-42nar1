import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Instagram, MapPin, Clock, Utensils, Star, Quote, ChevronRight, Menu } from 'lucide-react';

const COLORS = {
  primary: '#0F4C5C',
  secondary: '#D4A373',
  bg: '#FDFBF7',
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-[#2D3436] bg-[#FDFBF7]">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#0F4C5C]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-[#0F4C5C]">
            Salma <span className="text-[#D4A373]">Batroun</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <Link href="#about" className="hover:text-[#D4A373] transition-colors">About</Link>
            <Link href="#menu" className="hover:text-[#D4A373] transition-colors">Menu</Link>
            <Link href="#location" className="hover:text-[#D4A373] transition-colors">Location</Link>
          </div>
          <Link 
            href="https://wa.me/96176333156" 
            className="bg-[#0F4C5C] text-white px-6 py-3 text-sm font-bold uppercase tracking-tighter hover:bg-[#0F4C5C]/90 transition-all"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block text-[#D4A373] font-bold tracking-[0.3em] uppercase mb-6 text-sm">Bahsa, Batroun</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0F4C5C] leading-[1.1] mb-8">
            Authentic Lebanese <br /> Flavors by the Sea
          </h1>
          <p className="text-lg md:text-xl text-[#636E72] max-w-2xl mx-auto mb-12 leading-relaxed">
            Discover the journey from village life to the vibrant heart of Batroun. Enjoy fresh, traditional Lebanese cuisine with an unmatched view of the Mediterranean.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="https://wa.me/96176333156" 
              className="w-full sm:w-auto bg-[#0F4C5C] text-white px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform"
            >
              <MessageCircle size={20} /> Book a Table
            </Link>
            <Link 
              href="tel:+96176333156" 
              className="w-full sm:w-auto border-2 border-[#0F4C5C] text-[#0F4C5C] px-10 py-5 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#0F4C5C] hover:text-white transition-all"
            >
              <Phone size={20} /> Call Us
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_#D4A37315_0%,_transparent_70%)] -z-0" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-y border-[#0F4C5C]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F4C5C] mb-8 italic">Our Story</h2>
          <p className="text-xl md:text-2xl text-[#636E72] leading-relaxed font-light">
            "Salma’s journey brings the warmth of village life to the vibrant heart of the coast. We pride ourselves on serving fresh, flavorful dishes in an atmosphere that feels like home."
          </p>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F4C5C] mb-4">Taste the Tradition</h2>
              <p className="text-[#D4A373] font-bold tracking-widest uppercase">Signature Mezze & Mains</p>
            </div>
            <Link href="https://instagram.com/salma.lebnen" className="text-[#0F4C5C] font-bold flex items-center gap-2 border-b-2 border-[#D4A373] pb-1">
              View Full Menu on Instagram <ChevronRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Fattoush", desc: "Fresh garden salad with crispy bread and authentic sumac dressing.", cat: "Mezze" },
              { name: "Mohammara", desc: "A rich, flavorful blend of roasted peppers and walnuts.", cat: "Mezze" },
              { name: "Batata Harra", desc: "Crispy potatoes tossed with fresh coriander, garlic, and chili.", cat: "Mezze" },
              { name: "Raheb", desc: "Smoky grilled eggplant salad with fresh vegetables.", cat: "Mezze" },
              { name: "Rkakat Jebne", desc: "Golden, crispy pastry rolls filled with premium cheese.", cat: "Mezze" },
              { name: "Mixed Grill", desc: "A selection of our finest charcoal-grilled meats.", cat: "Main" }
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-white border border-[#0F4C5C]/5 hover:border-[#D4A373]/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A373] bg-[#D4A373]/10 px-2 py-1">{item.cat}</span>
                  <Utensils size={20} className="text-[#0F4C5C]/20 group-hover:text-[#D4A373] transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0F4C5C] mb-2">{item.name}</h3>
                <p className="text-[#636E72] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 bg-[#0F4C5C] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Guests Say</h2>
            <div className="flex items-center justify-center gap-2 text-[#D4A373]">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < 4 ? "#D4A373" : "none"} />)}
              </div>
              <span className="font-bold tracking-widest uppercase text-sm">4.6 stars from 545 Google reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Michel El-Asmar", stars: 5, text: "Amazing service and the food is even better. Great view toward the sea. Highly recommend. We went for Breakfast and Supper. Thank you!" },
              { name: "Rita Semaan", stars: 5, text: "Beautiful place with a lovely atmosphere, delicious food, and great service! The location in Batroun makes the experience even better. Definitely worth visiting!" },
              { name: "Joya Abi khalil", stars: 5, text: "We had a wonderful experience at Salma Batroun! The food was absolutely delicious, fresh, and full of flavor. The service was just as impressive-friendly, attentive, and welcoming." }
            ].map((rev, i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10 relative">
                <Quote className="absolute top-6 right-6 text-white/10" size={40} />
                <div className="flex mb-4">
                  {[...Array(rev.stars)].map((_, i) => <Star key={i} size={14} fill="#D4A373" className="text-[#D4A373]" />)}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed text-white/90">"{rev.text}"</p>
                <p className="font-bold tracking-widest uppercase text-xs text-[#D4A373]">— {rev.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#0F4C5C] mb-8">Visit Us in Bahsa</h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F4C5C] uppercase tracking-widest text-sm mb-1">Address</h4>
                  <p className="text-[#636E72]">Bahsa, Batroun, Lebanon</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F4C5C] uppercase tracking-widest text-sm mb-1">Opening Hours</h4>
                  <ul className="text-[#636E72] space-y-1 text-sm">
                    <li>Mon - Thu: 9 AM – 1 AM</li>
                    <li>Fri - Sat: 9 AM – 2 AM</li>
                    <li>Sun: 9 AM – 1 AM</li>
                  </ul>
                </div>
              </div>
            </div>
            <Link 
              href="https://www.google.com/maps/place/?q=place_id:ChIJxyFibABZHxURu0Uf3RaLcs8"
              className="inline-flex items-center gap-3 bg-[#0F4C5C] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#D4A373] transition-colors"
            >
              Open in Google Maps <ChevronRight size={18} />
            </Link>
          </div>
          <div className="h-[450px] bg-white border-8 border-white shadow-2xl overflow-hidden">
            <iframe 
              src="https://www.google.com/maps?q=34.2532138,35.6580981&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Salma Batroun Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-[#0F4C5C]/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-[#0F4C5C] mb-2">Salma Batroun</h3>
            <p className="text-[#636E72] text-sm">Authentic Lebanese flavors by the sea.</p>
          </div>
          <div className="flex gap-6">
            <Link href="tel:+96176333156" className="w-12 h-12 rounded-full border border-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white transition-all">
              <Phone size={20} />
            </Link>
            <Link href="https://wa.me/96176333156" className="w-12 h-12 rounded-full border border-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white transition-all">
              <MessageCircle size={20} />
            </Link>
            <Link href="https://instagram.com/salma.lebnen" className="w-12 h-12 rounded-full border border-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white transition-all">
              <Instagram size={20} />
            </Link>
          </div>
          <p className="text-[#636E72] text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} Salma Batroun. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
