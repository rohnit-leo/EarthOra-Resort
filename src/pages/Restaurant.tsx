import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Phone, Flame, UtensilsCrossed, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { redirectToWhatsApp } from "../lib/utils";
import { useRestaurant } from "../lib/useSiteData";

const DEFAULT_KITCHEN_HERO = "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/20%20Basic%20Cooking%20Tips%20Everyone%20Should%20Know%2C%20According%20to%20a%20Pro%20Chef.jpg";

const DEFAULT_KITCHEN_STORY = [
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/LightBox%20-%20India%20Palace.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/Sophisticated%20Food%20Photography%20by%20Natalie%20Chaban%20_%20Capturing%20Gourmet%20Dishes.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/download%20%284%29.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/download%20%285%29.jpg"
];

const DEFAULT_FOOD_GALLERY = [
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/download%20%286%29.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/LightBox%20-%20India%20Palace.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/Sophisticated%20Food%20Photography%20by%20Natalie%20Chaban%20_%20Capturing%20Gourmet%20Dishes.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/20%20Basic%20Cooking%20Tips%20Everyone%20Should%20Know%2C%20According%20to%20a%20Pro%20Chef.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/download%20%284%29.jpg",
  "https://frevuykpcqueimke.public.blob.vercel-storage.com/restaurant%20/download%20%285%29.jpg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3068.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3069.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3070.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3072.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3073.JPG.jpeg",
  "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/restaurant%20page%20/IMG_3074.JPG.jpeg"
];

export function Restaurant() {
  const { restaurantItems } = useRestaurant();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Extract custom images from dynamic items if present
  const dynamicImages = restaurantItems
    .map((item: any) => item.image)
    .filter((img: any) => typeof img === "string" && img.length > 0);

  const heroImage = dynamicImages[0] || DEFAULT_KITCHEN_HERO;
  const kitchenStory = DEFAULT_KITCHEN_STORY;
  const foodGallery = dynamicImages.length > 0 ? Array.from(new Set([...dynamicImages, ...DEFAULT_FOOD_GALLERY])) : DEFAULT_FOOD_GALLERY;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null && foodGallery.length > 0) {
      setActiveImageIndex((activeImageIndex + 1) % foodGallery.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null && foodGallery.length > 0) {
      setActiveImageIndex((activeImageIndex - 1 + foodGallery.length) % foodGallery.length);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-luxury-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors mb-12 uppercase tracking-widest text-xs font-medium">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Header Story */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-nature-green uppercase tracking-[0.2em] text-xs font-semibold"
          >
            <UtensilsCrossed size={16} /> A Pure Farm-To-Table Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface"
          >
            The EarthOra Dining Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-elegant-stone text-base md:text-lg font-light leading-relaxed"
          >
            At EarthOra, dining is an intimate celebration of nature's bounty. We believe that true food begins with wholesome, soil-grown ingredients, honest traditional recipes, and an open hearth where every step of preparation is visible and celebrated.
          </motion.p>
        </div>

        {/* Hero Kitchen Image with Overlay Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden mb-24 shadow-2xl border border-elegant-stone/10 group"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full">
            <img 
              src={heroImage} 
              alt="EarthOra Resort Kitchen Preparation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/90 via-dark-surface/30 to-transparent flex items-end p-8 md:p-16">
              <div className="text-white max-w-2xl">
                <span className="inline-flex items-center gap-2 bg-subtle-gold/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-white border border-white/20 mb-4">
                  <Flame size={14} className="text-subtle-gold" /> Live Kitchen Experience
                </span>
                <h2 className="text-3xl md:text-5xl font-serif mb-4">Where Freshness Meets Fire</h2>
                <p className="text-white/80 font-light leading-relaxed text-sm md:text-base">
                  Watch our dedicated culinary team craft delicious meals right before your eyes. From piping hot Maharashtrian specialties to mouth-watering delicacies, hygiene and taste are paramount.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Kitchen Craft Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div className="space-y-6">
            <span className="text-nature-green uppercase tracking-widest text-xs font-medium block">Hygiene & Craftsmanship</span>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-surface">
              Behind The Scenes <br />
              <span className="italic text-elegant-stone font-light">In Our Kitchen</span>
            </h2>
            <p className="text-elegant-stone font-light leading-relaxed">
              Our kitchen operates with strict quality controls. Fresh vegetables are brought in daily from local farms surrounding Satara, while spices are ground in-house to retain essential oils and authentic aromas.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-subtle-gold pl-4">
                <h4 className="font-serif text-lg text-dark-surface">100% Fresh</h4>
                <p className="text-xs text-elegant-stone font-light mt-1">Sourced directly from local village farms</p>
              </div>
              <div className="border-l-2 border-nature-green pl-4">
                <h4 className="font-serif text-lg text-dark-surface">Made To Order</h4>
                <p className="text-xs text-elegant-stone font-light mt-1">Cooked hot and fresh upon every order</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {kitchenStory.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md group"
              >
                <img 
                  src={img} 
                  alt={`Kitchen prep ${i+1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dishes Showcase Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-nature-green uppercase tracking-widest text-xs font-medium block mb-3">Authentic Plating</span>
            <h2 className="text-3xl md:text-5xl font-serif text-dark-surface mb-4">A Taste of EarthOra</h2>
            <p className="text-elegant-stone font-light text-sm md:text-base">
              Explore a photo story of our signature preparations, vibrant salads, rich gravies, and delicious home-style Maharashtrian dishes.
            </p>
          </div>

          {/* Food Photo Gallery Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {foodGallery.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm border border-elegant-stone/10"
                onClick={() => setActiveImageIndex(i)}
              >
                <img 
                  src={img} 
                  alt={`EarthOra delicacy ${i + 1}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Sparkles size={24} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Info & Booking Box */}
        <div className="bg-soft-ivory rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-elegant-stone/10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-subtle-gold">
                <Clock size={18} />
                <span className="font-serif font-medium text-dark-surface">Operating Hours</span>
              </div>
              <p className="text-xs text-elegant-stone">Breakfast: 7:30 AM – 10:30 AM</p>
              <p className="text-xs text-elegant-stone">Lunch: 12:30 PM – 3:30 PM</p>
              <p className="text-xs text-elegant-stone">Dinner: 7:30 PM – 10:30 PM</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-subtle-gold">
                <MapPin size={18} />
                <span className="font-serif font-medium text-dark-surface">Dining Setting</span>
              </div>
              <p className="text-xs text-elegant-stone">Main Dining Pavilion & Garden Lawn</p>
              <p className="text-xs text-elegant-stone">Open-air seating with mountain breeze</p>
            </div>

            <div className="text-center md:text-right">
              <button 
                onClick={() => redirectToWhatsApp({ Intent: "Table Reservation" })}
                className="w-full md:w-auto px-8 py-4 bg-nature-green text-white uppercase tracking-widest text-xs font-medium hover:bg-premium-olive transition-all rounded-xl shadow-md"
              >
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && foodGallery[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-[100] bg-dark-surface/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveImageIndex(null); }} 
              className="absolute top-6 right-6 text-white hover:text-subtle-gold p-2 z-50 transition-colors"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={handlePrev}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <img 
              src={foodGallery[activeImageIndex]} 
              alt="Delicacy Full View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button 
              onClick={handleNext}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white hover:text-subtle-gold p-4 z-50 transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 tracking-widest text-sm">
              {activeImageIndex + 1} / {foodGallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
