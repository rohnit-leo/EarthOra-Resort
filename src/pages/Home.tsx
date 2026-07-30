import { Hero } from "../components/home/Hero";
import { Marquee } from "../components/home/Marquee";
import { About } from "../components/home/About";
import { RoomsPreview } from "../components/home/RoomsPreview";
import { RestaurantSection } from "../components/home/RestaurantSection";
import { ParallaxHero } from "../components/home/ParallaxHero";
import { NearbyAttractions } from "../components/home/NearbyAttractions";
import { PetsSection } from "../components/home/PetsSection";
import { Testimonials } from "../components/home/Testimonials";
import { InstagramGrid } from "../components/home/InstagramGrid";
import { InteractiveExplore } from "../components/home/InteractiveExplore";
import { SeasonalCharm } from "../components/home/SeasonalCharm";
import { BentoFeatures } from "../components/home/BentoFeatures";
import { ExperiencesSection } from "../components/home/ExperiencesSection";
import { ResortAtmosphere } from "../components/home/ResortAtmosphere";
import { SEO } from "../components/common/SEO";

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      <SEO 
        title="EarthOra Resort | Luxury Eco Sanctuary Near Kaas Plateau, Satara"
        description="Official Website of EarthOra Resort near UNESCO World Heritage Kaas Plateau, Satara. Luxury eco cottages, live open kitchen dining, serene valley views, and nature safaris."
        canonicalUrl="https://www.earthoraresort.in/"
      />
      <Hero />
      <Marquee />
      <About />
      <BentoFeatures />
      <ExperiencesSection />
      <InteractiveExplore />
      <RoomsPreview />
      <SeasonalCharm />
      <ParallaxHero />
      <RestaurantSection />
      <ResortAtmosphere />
      <NearbyAttractions />
      <PetsSection />
      <Testimonials />
      <InstagramGrid />
    </div>
  );
}


