import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";
import { redirectToWhatsApp } from "../../lib/utils";

export function Footer() {
  return (
    <footer className="bg-dark-surface text-soft-ivory pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-elegant-stone/30 pb-16">
        
        <div className="md:col-span-1 space-y-6">
          <Link to="/" className="text-3xl font-serif text-white tracking-wide block">
            EarthOra<span className="text-subtle-gold">.</span>
          </Link>
          <p className="text-sm text-elegant-stone leading-relaxed">
            Experience premium cottages, peaceful landscapes, and elegant celebrations at EarthOra Resort, near Kaas Plateau.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/earthora_resort" target="_blank" rel="noopener noreferrer" className="p-2 border border-elegant-stone/30 rounded-full hover:border-subtle-gold hover:text-subtle-gold transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/share/18q8z2XsQK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 border border-elegant-stone/30 rounded-full hover:border-subtle-gold hover:text-subtle-gold transition-colors flex items-center justify-center">
              {/* Fallback Facebook icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif text-white uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm text-elegant-stone">
            <li><Link to="/stay" className="hover:text-white transition-colors">Rooms & Cottages</Link></li>
            <li><Link to="/restaurant" className="hover:text-white transition-colors">Restaurant & Dining</Link></li>
            <li><Link to="/tourism" className="hover:text-white transition-colors">Nearby Tourism</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/admin" className="text-subtle-gold hover:text-white transition-colors font-semibold">Admin Panel</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif text-white uppercase tracking-widest text-sm">Legal & Policies</h4>
          <ul className="space-y-3 text-sm text-elegant-stone">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/cancellation" className="hover:text-white transition-colors">Cancellation & Refund Policy</Link></li>
            <li><Link to="/rules" className="hover:text-white transition-colors">House Rules & Guidelines</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-serif text-white uppercase tracking-widest text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm text-elegant-stone">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="shrink-0 mt-0.5 text-subtle-gold" />
              <span>EarthOra Resort, Devkal Phata, Kaas Road, Satara, Maharashtra 415001</span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone size={18} className="shrink-0 mt-0.5 text-subtle-gold" />
              <div className="flex flex-col space-y-1">
                <button onClick={() => redirectToWhatsApp({ Intent: "Inquiry" })} className="hover:text-white transition-colors text-left">8888888162</button>
                <button onClick={() => redirectToWhatsApp({ Intent: "Inquiry" })} className="hover:text-white transition-colors text-left">7219516566</button>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-elegant-stone">
        <p>&copy; {new Date().getFullYear()} EarthOra Resort. All rights reserved.</p>
        <p className="mt-4 md:mt-0">
          Developed by <a href="https://nexturex.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-subtle-gold transition-colors">Nexturex</a>
        </p>
      </div>
    </footer>
  );
}
