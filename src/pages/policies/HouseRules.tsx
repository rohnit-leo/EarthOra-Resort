import { Link } from "react-router-dom";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { SEO } from "../../components/common/SEO";

export function HouseRules() {
  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen text-dark-surface">
      <SEO 
        title="House Rules & Guidelines | EarthOra Resort Satara"
        description="Resort guidelines, pet policy, quiet hours, and house rules for guests staying at EarthOra Resort near Kaas Plateau."
        canonicalUrl="https://www.earthoraresort.in/rules"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-8 uppercase tracking-widest text-xs font-semibold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold">
            <Sparkles size={16} /> Serene Eco Living
          </span>
          <h1 className="text-4xl md:text-5xl font-serif">House Rules & Guidelines</h1>
          <p className="text-elegant-stone text-sm">Ensuring peace, safety, and comfort for all guests</p>
        </div>

        <div className="space-y-8 text-elegant-stone leading-relaxed font-light text-sm sm:text-base border-t border-black/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">1. Eco & Nature Sanctuary Respect</h2>
            <p>
              EarthOra is located amidst sensitive mountain ecology near Kaas Plateau. Guests are requested not to litter or damage flora on property or surrounding nature trails.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">2. Pet Policy & Resident Dogs</h2>
            <p>
              We are a pet-friendly resort! Guests bringing pets are asked to keep them leashed in common dining spaces. Please note our friendly resident dogs (Don & Ora) roam the property safely and welcome guests warmly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">3. Quiet Hours & Music</h2>
            <p>
              To maintain the tranquil sanctuary experience, outdoor music and loud speakers are restricted after 10:00 PM.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-dark-surface">4. Smoking & Safety</h2>
            <p>
              Smoking is strictly prohibited inside cottages for fire safety and guest health. Designated outdoor smoking zones are available.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
