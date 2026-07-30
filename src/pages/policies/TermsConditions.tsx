import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { SEO } from "../../components/common/SEO";

export function TermsConditions() {
  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen text-dark-surface">
      <SEO 
        title="Terms & Conditions | EarthOra Resort Satara"
        description="Terms and conditions for booking and staying at EarthOra Resort near Kaas Plateau, Satara."
        canonicalUrl="https://www.earthoraresort.in/terms"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-8 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold">
            <FileText size={16} /> Guest Agreement
          </span>
          <h1 className="text-4xl md:text-5xl font-serif">Terms & Conditions</h1>
          <p className="text-elegant-stone text-sm">Effective Date: July 2026</p>
        </div>

        <div className="space-y-8 text-elegant-stone leading-relaxed font-light text-sm sm:text-base border-t border-black/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">1. Check-In & Check-Out Timings</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Standard Check-In Time:</strong> 1:00 PM</li>
              <li><strong>Standard Check-Out Time:</strong> 11:00 AM</li>
              <li>Early check-in or late check-out is subject to cottage availability and prior management approval.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">2. Reservation & Payment</h2>
            <p>
              Reservations are confirmed upon receipt of advance booking deposit as specified by the resort travel desk. Remaining balance is payable at check-in via UPI, Credit/Debit Cards, or Cash.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">3. Occupancy & Additional Guests</h2>
            <p>
              Cottage capacity is strictly regulated for guest comfort and safety. Additional guests above standard room capacity must be disclosed prior to check-in and will incur extra adult/child charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">4. Resort Property & Conduct</h2>
            <p>
              Guests are expected to respect fellow travelers, staff, and the natural eco-sanctuary surroundings. Loud music outdoors is prohibited after 10:00 PM in accordance with local quiet zone guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">5. Contact Information</h2>
            <p>
              For questions regarding stay terms, reach out to EarthOra Resort Desk at +91 88888 88162 or inquiry@earthoraresort.in.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
