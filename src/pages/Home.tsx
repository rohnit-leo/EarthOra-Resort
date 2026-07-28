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

export function Home() {
  return (
    <div className="w-full overflow-hidden">
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


