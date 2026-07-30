import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { SEO } from "../../components/common/SEO";

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen text-dark-surface">
      <SEO 
        title="Privacy Policy | EarthOra Resort Satara"
        description="Privacy policy for EarthOra Resort near Kaas Plateau, Satara. Read how we protect guest information, booking privacy, and data security."
        canonicalUrl="https://www.earthoraresort.in/privacy"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-8 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold">
            <ShieldCheck size={16} /> Trust & Transparency
          </span>
          <h1 className="text-4xl md:text-5xl font-serif">Privacy Policy</h1>
          <p className="text-elegant-stone text-sm">Last updated: July 2026</p>
        </div>

        <div className="space-y-8 text-elegant-stone leading-relaxed font-light text-sm sm:text-base border-t border-black/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">1. Data Collection & Guest Information</h2>
            <p>
              At EarthOra Resort, accessible from https://www.earthoraresort.in/, one of our main priorities is the privacy of our visitors and stay guests. We collect information necessary to process reservations, verify identity upon check-in, and provide personalized hospitality experiences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">2. How We Use Your Information</h2>
            <p>
              The guest details provided during booking inquiries (such as Name, Phone Number, Check-in/Check-out dates, and Stay preferences) are used solely for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processing booking requests and communicating stay details via WhatsApp or Phone</li>
              <li>Fulfilling legal hotel guest register requirements as mandated by local authorities</li>
              <li>Improving resort amenities, dining options, and guest services</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">3. Data Security & Confidentiality</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to safeguard your personal information against unauthorized access, loss, or disclosure. We never sell, rent, or trade guest personal information to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">4. Government ID Requirements</h2>
            <p>
              In compliance with local law enforcement and tourism regulations in Satara, Maharashtra, all adult guests must present a valid government-issued photo ID (Aadhaar Card, Passport, Voter ID, or Driving License) upon physical check-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Privacy Policy or your personal data, please contact our resort desk at <a href="mailto:inquiry@earthoraresort.in" className="text-nature-green underline">inquiry@earthoraresort.in</a> or call +91 88888 88162.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
