import { Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { SEO } from "../../components/common/SEO";

export function CancellationPolicy() {
  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen text-dark-surface">
      <SEO 
        title="Cancellation & Refund Policy | EarthOra Resort Satara"
        description="Cancellation and refund policies for stay bookings at EarthOra Resort near Kaas Plateau, Satara."
        canonicalUrl="https://www.earthoraresort.in/cancellation"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-8 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold">
            <RefreshCw size={16} /> Transparent Policies
          </span>
          <h1 className="text-4xl md:text-5xl font-serif">Cancellation & Refund Policy</h1>
          <p className="text-elegant-stone text-sm">Effective Date: July 2026</p>
        </div>

        <div className="space-y-8 text-elegant-stone leading-relaxed font-light text-sm sm:text-base border-t border-black/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">1. Cancellation Timelines & Refunds</h2>
            <p>
              We understand plans can change. Cancellations made prior to scheduled check-in are eligible for refunds according to the following schedule:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>14 days or more before check-in:</strong> 90% refund of advance deposit (10% processing fee).</li>
              <li><strong>7 to 13 days before check-in:</strong> 50% refund of advance deposit.</li>
              <li><strong>Less than 7 days before check-in:</strong> Advance deposit is non-refundable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">2. Date Rescheduling Option</h2>
            <p>
              In lieu of cancellation, guests may request a one-time date modification up to 7 days before check-in without penalty, subject to cottage availability within 60 days of the original stay date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">3. Peak Season & Peak Flower Season</h2>
            <p>
              During Kaas Plateau peak flower blooming season (August to October) and Long Weekend / Festive periods, bookings are non-refundable within 14 days of check-in due to high seasonal demand.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">4. Processing Refunds</h2>
            <p>
              Approved refunds will be processed via bank transfer or original payment method within 5–7 working days from cancellation approval.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
