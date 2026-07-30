import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  BedDouble, 
  Sparkles, 
  Star, 
  Compass, 
  UtensilsCrossed, 
  Plus, 
  Trash2, 
  Save, 
  Upload, 
  CheckCircle, 
  ArrowLeft,
  X,
  Image as ImageIcon,
  DollarSign,
  Info
} from "lucide-react";
import { 
  useRooms, saveRoomData, 
  useExperiences, saveExperience, deleteExperience, 
  useTestimonials, saveTestimonial, deleteTestimonial, 
  useTourism, saveTourismPlace, deleteTourismPlace, resetTourismToDefault,
  useRestaurant, saveRestaurantItem, deleteRestaurantItem 
} from "../lib/useSiteData";
import { compressImageFile } from "../lib/imageUtils";

export function Admin() {
  const [activeTab, setActiveTab] = useState<"rooms" | "experiences" | "reviews" | "tourism" | "restaurant">("rooms");
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  // Firestore Live Hooks
  const { rooms } = useRooms();
  const { experiences } = useExperiences();
  const { testimonials } = useTestimonials();
  const { tourismList } = useTourism();
  const { restaurantItems } = useRestaurant();

  // Controlled State for Rooms
  const [standardForm, setStandardForm] = useState<any>(null);
  const [premiumForm, setPremiumForm] = useState<any>(null);

  // Sync rooms hook data into controlled forms
  useEffect(() => {
    if (rooms.standard) {
      setStandardForm({ ...rooms.standard });
    }
    if (rooms.premium) {
      setPremiumForm({ ...rooms.premium });
    }
  }, [rooms]);

  // Local state for adding new items
  const [newExpImage, setNewExpImage] = useState("");
  const [newReview, setNewReview] = useState({ name: "", date: "Just now", rating: 5, text: "" });
  const [newTourism, setNewTourism] = useState({ title: "", subtitle: "", distance: "", desc: "", highlights: "", images: "" });
  const [newRestItem, setNewRestItem] = useState({ title: "", category: "Culinary Specialty", desc: "", image: "" });

  const triggerSuccess = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(null), 3500);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, callback: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const compressedBase64 = await compressImageFile(file, 1200, 1200, 0.8);
        callback(compressedBase64);
      } catch (err) {
        console.error("Image upload compression error:", err);
      }
    }
  };

  // --- SAVE ROOMS ---
  const handleSaveStandard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!standardForm) return;
    try {
      await saveRoomData("standard", standardForm);
      triggerSuccess("Standard Cottage pricing & details updated permanently on server!");
    } catch (err: any) {
      alert("Failed to save Standard Cottage: " + err.message);
    }
  };

  const handleSavePremium = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!premiumForm) return;
    try {
      await saveRoomData("premium", premiumForm);
      triggerSuccess("Premium Cottage pricing & details updated permanently on server!");
    } catch (err: any) {
      alert("Failed to save Premium Cottage: " + err.message);
    }
  };

  // --- EXPERIENCES (IMAGE ONLY) HANDLERS ---
  const handleAddExperienceImage = async (imageUrl: string) => {
    if (!imageUrl) return;
    await saveExperience({ image: imageUrl });
    setNewExpImage("");
    triggerSuccess("New Experience photo added to website!");
  };

  // --- REVIEW HANDLERS ---
  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    await saveTestimonial(newReview);
    setNewReview({ name: "", date: "Just now", rating: 5, text: "" });
    triggerSuccess("Guest review added successfully!");
  };

  // --- TOURISM HANDLERS ---
  const handleAddTourism = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTourism.title) return;
    const item = {
      ...newTourism,
      desc: [newTourism.desc],
      highlights: newTourism.highlights ? newTourism.highlights.split(",").map(s => s.trim()) : [],
      images: newTourism.images ? [newTourism.images] : []
    };
    await saveTourismPlace(item);
    setNewTourism({ title: "", subtitle: "", distance: "", desc: "", highlights: "", images: "" });
    triggerSuccess("Tourism spot added permanently to website!");
  };

  const handleSaveTourismItem = async (place: any) => {
    await saveTourismPlace(place);
    triggerSuccess(`Updated ${place.title} on server!`);
  };

  // --- RESTAURANT HANDLERS ---
  const handleAddRestaurant = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRestItem.title) return;
    await saveRestaurantItem(newRestItem);
    setNewRestItem({ title: "", category: "Culinary Specialty", desc: "", image: "" });
    triggerSuccess("Dining item added permanently!");
  };

  return (
    <div className="pt-28 pb-24 bg-luxury-white min-h-screen text-dark-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-black/10 mb-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-nature-green hover:text-subtle-gold transition-colors text-xs font-semibold uppercase tracking-widest mb-2">
              <ArrowLeft size={14} /> Return to Main Resort Site
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif text-dark-surface">EarthOra Resort CRM & Admin Panel</h1>
            <p className="text-elegant-stone text-sm font-light mt-1">
              Real-time Firestore Database Synchronization • Changes update permanently across all pages.
            </p>
          </div>

          {saveSuccessMsg && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-nature-green text-white px-5 py-3 rounded-2xl shadow-lg text-xs font-semibold"
            >
              <CheckCircle size={18} /> {saveSuccessMsg}
            </motion.div>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-black/10 pb-4">
          <button
            onClick={() => setActiveTab("rooms")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "rooms" 
                ? "bg-dark-surface text-white shadow-md" 
                : "bg-soft-ivory text-elegant-stone hover:bg-black/5"
            }`}
          >
            <BedDouble size={16} /> Rooms & Tariffs
          </button>
          <button
            onClick={() => setActiveTab("experiences")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "experiences" 
                ? "bg-dark-surface text-white shadow-md" 
                : "bg-soft-ivory text-elegant-stone hover:bg-black/5"
            }`}
          >
            <Sparkles size={16} /> Experience Photos
          </button>
          <button
            onClick={() => setActiveTab("tourism")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "tourism" 
                ? "bg-dark-surface text-white shadow-md" 
                : "bg-soft-ivory text-elegant-stone hover:bg-black/5"
            }`}
          >
            <Compass size={16} /> Regional Tourism
          </button>
          <button
            onClick={() => setActiveTab("restaurant")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "restaurant" 
                ? "bg-dark-surface text-white shadow-md" 
                : "bg-soft-ivory text-elegant-stone hover:bg-black/5"
            }`}
          >
            <UtensilsCrossed size={16} /> Dining & Gallery
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "reviews" 
                ? "bg-dark-surface text-white shadow-md" 
                : "bg-soft-ivory text-elegant-stone hover:bg-black/5"
            }`}
          >
            <Star size={16} /> Guest Reviews
          </button>
        </div>

        {/* --- TAB 1: ROOMS & PRICING --- */}
        {activeTab === "rooms" && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Standard Cottage Editor */}
              {standardForm ? (
                <form onSubmit={handleSaveStandard} className="bg-soft-ivory rounded-3xl p-8 border border-black/10 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <div>
                      <h2 className="text-2xl font-serif text-dark-surface">Standard Eco Cottage</h2>
                      <span className="text-[10px] uppercase tracking-wider text-nature-green font-bold">Standard Accommodation Type</span>
                    </div>
                    <span className="text-xs font-mono font-semibold bg-nature-green/10 text-nature-green px-3 py-1 rounded-full">ID: standard</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Cottage Title</label>
                      <input 
                        type="text" 
                        value={standardForm.title || ""}
                        onChange={(e) => setStandardForm({ ...standardForm, title: e.target.value })}
                        className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm font-serif font-bold text-dark-surface"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Nightly Tariff Rate (₹ INR)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nature-green font-bold text-sm">₹</span>
                        <input 
                          type="number" 
                          value={standardForm.price || 4999}
                          onChange={(e) => setStandardForm({ ...standardForm, price: Number(e.target.value) })}
                          className="w-full bg-white pl-8 pr-4 py-3 rounded-xl border border-black/10 text-base font-bold text-nature-green"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Subtitle / Tagline</label>
                      <input 
                        type="text" 
                        value={standardForm.subtitle || ""}
                        onChange={(e) => setStandardForm({ ...standardForm, subtitle: e.target.value })}
                        className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Description</label>
                      <textarea 
                        rows={3}
                        value={standardForm.description || ""}
                        onChange={(e) => setStandardForm({ ...standardForm, description: e.target.value })}
                        className="w-full bg-white p-4 rounded-xl border border-black/10 text-sm leading-relaxed"
                      />
                    </div>

                    {/* Image Gallery Manager for Standard Cottage */}
                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-2">Cottage Photo Gallery</label>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {(standardForm.images || []).map((imgUrl: string, idx: number) => (
                          <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-black/10 bg-black/5">
                            <img src={imgUrl} alt={`Photo ${idx+1}`} className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => {
                                const updated = standardForm.images.filter((_: any, i: number) => i !== idx);
                                setStandardForm({ ...standardForm, images: updated });
                              }}
                              className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Delete Photo"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Add Image Controls */}
                      <div className="flex gap-2">
                        <label className="flex-1 bg-white border border-black/10 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer hover:bg-black/5 flex items-center justify-center gap-2">
                          <Upload size={14} className="text-nature-green" /> Upload Local Image
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(e, (url) => {
                              const imgs = standardForm.images ? [...standardForm.images, url] : [url];
                              setStandardForm({ ...standardForm, images: imgs });
                            })} 
                          />
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-nature-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-premium-olive transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Save size={16} /> Save Standard Cottage Permanently
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center text-sm text-gray-500 bg-soft-ivory rounded-3xl">Loading Standard Cottage data...</div>
              )}

              {/* Premium Cottage Editor */}
              {premiumForm ? (
                <form onSubmit={handleSavePremium} className="bg-soft-ivory rounded-3xl p-8 border border-black/10 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <div>
                      <h2 className="text-2xl font-serif text-dark-surface">Premium Valley View Cottage</h2>
                      <span className="text-[10px] uppercase tracking-wider text-subtle-gold font-bold">Premium Accommodation Type</span>
                    </div>
                    <span className="text-xs font-mono font-semibold bg-subtle-gold/20 text-dark-surface px-3 py-1 rounded-full">ID: premium</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Cottage Title</label>
                      <input 
                        type="text" 
                        value={premiumForm.title || ""}
                        onChange={(e) => setPremiumForm({ ...premiumForm, title: e.target.value })}
                        className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm font-serif font-bold text-dark-surface"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Nightly Tariff Rate (₹ INR)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nature-green font-bold text-sm">₹</span>
                        <input 
                          type="number" 
                          value={premiumForm.price || 7499}
                          onChange={(e) => setPremiumForm({ ...premiumForm, price: Number(e.target.value) })}
                          className="w-full bg-white pl-8 pr-4 py-3 rounded-xl border border-black/10 text-base font-bold text-nature-green"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Subtitle / Tagline</label>
                      <input 
                        type="text" 
                        value={premiumForm.subtitle || ""}
                        onChange={(e) => setPremiumForm({ ...premiumForm, subtitle: e.target.value })}
                        className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Description</label>
                      <textarea 
                        rows={3}
                        value={premiumForm.description || ""}
                        onChange={(e) => setPremiumForm({ ...premiumForm, description: e.target.value })}
                        className="w-full bg-white p-4 rounded-xl border border-black/10 text-sm leading-relaxed"
                      />
                    </div>

                    {/* Image Gallery Manager for Premium Cottage */}
                    <div>
                      <label className="text-xs uppercase font-semibold text-elegant-stone block mb-2">Cottage Photo Gallery</label>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {(premiumForm.images || []).map((imgUrl: string, idx: number) => (
                          <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-black/10 bg-black/5">
                            <img src={imgUrl} alt={`Photo ${idx+1}`} className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => {
                                const updated = premiumForm.images.filter((_: any, i: number) => i !== idx);
                                setPremiumForm({ ...premiumForm, images: updated });
                              }}
                              className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Delete Photo"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Add Image Controls */}
                      <div className="flex gap-2">
                        <label className="flex-1 bg-white border border-black/10 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer hover:bg-black/5 flex items-center justify-center gap-2">
                          <Upload size={14} className="text-nature-green" /> Upload Local Image
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(e, (url) => {
                              const imgs = premiumForm.images ? [...premiumForm.images, url] : [url];
                              setPremiumForm({ ...premiumForm, images: imgs });
                            })} 
                          />
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-nature-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-premium-olive transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Save size={16} /> Save Premium Cottage Permanently
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center text-sm text-gray-500 bg-soft-ivory rounded-3xl">Loading Premium Cottage data...</div>
              )}

            </div>
          </div>
        )}

        {/* --- TAB 2: EXPERIENCES (IMAGE ONLY) --- */}
        {activeTab === "experiences" && (
          <div className="space-y-10">
            {/* Add Experience Photo Header */}
            <div className="bg-soft-ivory p-8 rounded-3xl border border-black/10 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-serif text-dark-surface flex items-center gap-2">
                    <Sparkles size={20} className="text-nature-green" /> Experience Photo Gallery Management
                  </h2>
                  <p className="text-xs text-elegant-stone mt-1">
                    Direct image-based gallery management as requested. Add, remove, or upload experience photos.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3 pt-2">
                <input 
                  type="text" 
                  placeholder="Paste Image URL (https://...)" 
                  value={newExpImage}
                  onChange={(e) => setNewExpImage(e.target.value)}
                  className="flex-1 bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                />
                <button
                  type="button"
                  onClick={() => handleAddExperienceImage(newExpImage)}
                  disabled={!newExpImage}
                  className="px-6 py-3 bg-nature-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-premium-olive disabled:opacity-50 cursor-pointer"
                >
                  Add Photo URL
                </button>
                <label className="bg-white border border-black/10 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-black/5 flex items-center justify-center gap-2 shrink-0">
                  <Upload size={14} className="text-nature-green" /> Upload Local Photo
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => handleImageUpload(e, (url) => handleAddExperienceImage(url))} 
                  />
                </label>
              </div>
            </div>

            {/* Experience Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {experiences.map((exp: any) => (
                <div key={exp.id} className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-xs group relative aspect-[4/3]">
                  <img src={exp.image} alt="Experience photo" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button 
                      onClick={() => { if(confirm("Remove this experience photo permanently?")) deleteExperience(exp.id); }}
                      className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg hover:bg-red-700 cursor-pointer"
                    >
                      <Trash2 size={14} /> Remove Photo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TAB 3: REGIONAL TOURISM --- */}
        {activeTab === "tourism" && (
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-soft-ivory p-6 rounded-3xl border border-black/10 shadow-xs">
              <div>
                <h3 className="font-serif text-lg text-dark-surface font-bold">Regional Tourism Guide</h3>
                <p className="text-xs text-elegant-stone">Manage attraction details, distances, and high-resolution photo galleries.</p>
              </div>
              <button
                type="button"
                onClick={async () => {
                  if (confirm("Reset all tourism attractions and images back to clean original defaults?")) {
                    await resetTourismToDefault();
                    setSaveSuccessMsg("Tourism data restored to clean original defaults!");
                    setTimeout(() => setSaveSuccessMsg(null), 3000);
                  }
                }}
                className="px-5 py-2.5 bg-dark-surface text-white hover:bg-nature-green text-xs font-bold uppercase tracking-widest rounded-xl transition-colors cursor-pointer self-start sm:self-auto shrink-0"
              >
                Reset Images & Data to Defaults
              </button>
            </div>

            {/* Add New Tourism Spot Form */}
            <form onSubmit={handleAddTourism} className="bg-soft-ivory p-8 rounded-3xl border border-black/10 space-y-6 shadow-sm">
              <h2 className="text-xl font-serif text-dark-surface flex items-center gap-2">
                <Plus size={20} className="text-nature-green" /> Add New Tourism Spot
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Attraction Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Thoseghar Waterfalls" 
                    value={newTourism.title}
                    onChange={(e) => setNewTourism({ ...newTourism, title: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Distance / Driving Time</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 25 mins from EarthOra" 
                    value={newTourism.distance}
                    onChange={(e) => setNewTourism({ ...newTourism, distance: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Subtitle / Tagline</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Thunderous Cascades & Lush Valleys" 
                    value={newTourism.subtitle}
                    onChange={(e) => setNewTourism({ ...newTourism, subtitle: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Description</label>
                  <textarea 
                    rows={3} 
                    placeholder="Detailed description of the attraction..." 
                    value={newTourism.desc}
                    onChange={(e) => setNewTourism({ ...newTourism, desc: e.target.value })}
                    className="w-full bg-white p-4 rounded-xl border border-black/10 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Photo URL or Upload</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="https://..." 
                      value={newTourism.images}
                      onChange={(e) => setNewTourism({ ...newTourism, images: e.target.value })}
                      className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                    />
                    <label className="bg-white border px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer shrink-0 flex items-center gap-1 hover:bg-black/5">
                      <Upload size={14} className="text-nature-green" /> Upload
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleImageUpload(e, (url) => setNewTourism({ ...newTourism, images: url }))} 
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Highlights (comma separated)</label>
                  <input 
                    type="text" 
                    placeholder="Waterfall view, Trekking trail, Lush green" 
                    value={newTourism.highlights}
                    onChange={(e) => setNewTourism({ ...newTourism, highlights: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                  />
                </div>
              </div>
              <button type="submit" className="px-6 py-3.5 bg-nature-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-premium-olive shadow-sm cursor-pointer">
                Save New Tourism Attraction
              </button>
            </form>

            {/* List Existing Tourism Spots */}
            <div className="space-y-8">
              {tourismList.map((place: any) => (
                <div key={place.id} className="bg-white rounded-3xl p-8 border border-black/10 shadow-sm space-y-6">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b pb-4">
                    <div>
                      <span className="text-xs font-semibold text-nature-green uppercase tracking-wider">{place.distance}</span>
                      <h3 className="font-serif text-2xl font-bold text-dark-surface">{place.title}</h3>
                      {place.subtitle && <p className="text-xs text-subtle-gold font-medium">{place.subtitle}</p>}
                    </div>
                    <button 
                      onClick={() => { if(confirm(`Delete ${place.title}?`)) deleteTourismPlace(place.id); }}
                      className="text-red-600 hover:bg-red-50 p-2.5 rounded-xl text-xs flex items-center gap-1 font-bold self-start cursor-pointer"
                    >
                      <Trash2 size={16} /> Delete Attraction
                    </button>
                  </div>

                  {/* Photo Gallery for Place */}
                  <div>
                    <label className="text-xs uppercase font-semibold text-elegant-stone block mb-2">Attraction Photos</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {(place.images || []).map((imgUrl: string, i: number) => (
                        <div key={i} className="relative group aspect-[4/3] rounded-xl overflow-hidden border border-black/10">
                          <img src={imgUrl} alt={`${place.title} ${i+1}`} className="w-full h-full object-cover" />
                          <button
                            onClick={() => {
                              const updatedImgs = place.images.filter((_: any, idx: number) => idx !== i);
                              handleSaveTourismItem({ ...place, images: updatedImgs });
                            }}
                            className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            title="Remove Photo"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      ))}
                      
                      {/* Upload Photo Button */}
                      <label className="aspect-[4/3] border-2 border-dashed border-black/20 rounded-xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:border-nature-green hover:bg-nature-green/5 transition-all">
                        <Upload size={20} className="text-nature-green mb-1" />
                        <span className="text-[10px] uppercase font-bold text-dark-surface">Add Photo</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleImageUpload(e, (url) => {
                            const updatedImgs = place.images ? [...place.images, url] : [url];
                            handleSaveTourismItem({ ...place, images: updatedImgs });
                          })} 
                        />
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TAB 4: DINING & RESTAURANT --- */}
        {activeTab === "restaurant" && (
          <div className="space-y-10">
            <form onSubmit={handleAddRestaurant} className="bg-soft-ivory p-8 rounded-3xl border border-black/10 space-y-6 shadow-sm">
              <h2 className="text-xl font-serif text-dark-surface flex items-center gap-2">
                <Plus size={20} className="text-nature-green" /> Add Culinary Item / Food Photo
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Item Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Maharashtrian Thali Special" 
                    value={newRestItem.title}
                    onChange={(e) => setNewRestItem({ ...newRestItem, title: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Category</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Regional Cuisine" 
                    value={newRestItem.category}
                    onChange={(e) => setNewRestItem({ ...newRestItem, category: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Description</label>
                  <textarea 
                    rows={2} 
                    placeholder="Dish or dining highlight description..." 
                    value={newRestItem.desc}
                    onChange={(e) => setNewRestItem({ ...newRestItem, desc: e.target.value })}
                    className="w-full bg-white p-4 rounded-xl border border-black/10 text-sm"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Photo URL or Upload</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="https://..." 
                      value={newRestItem.image}
                      onChange={(e) => setNewRestItem({ ...newRestItem, image: e.target.value })}
                      className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                    />
                    <label className="bg-white border border-black/10 px-4 py-3 rounded-xl text-xs font-semibold cursor-pointer shrink-0 flex items-center gap-1 hover:bg-black/5">
                      <Upload size={14} className="text-nature-green" /> Upload Local Photo
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleImageUpload(e, (url) => setNewRestItem({ ...newRestItem, image: url }))} 
                      />
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="px-6 py-3.5 bg-nature-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-premium-olive shadow-sm cursor-pointer">
                Save Culinary Item
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurantItems.map((item: any) => (
                <div key={item.id} className="bg-white rounded-2xl p-6 border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
                  {item.image && <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-xl border border-black/5" />}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-subtle-gold tracking-wider">{item.category}</span>
                    <h3 className="font-serif text-lg font-bold text-dark-surface mt-1">{item.title}</h3>
                    <p className="text-xs text-elegant-stone mt-1 font-light">{item.desc}</p>
                  </div>
                  <button 
                    onClick={() => { if(confirm("Delete this dining item?")) deleteRestaurantItem(item.id); }}
                    className="self-end text-red-600 hover:text-red-800 p-2 text-xs flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- TAB 5: GUEST REVIEWS --- */}
        {activeTab === "reviews" && (
          <div className="space-y-10">
            <form onSubmit={handleAddReview} className="bg-soft-ivory p-8 rounded-3xl border border-black/10 space-y-6 shadow-sm">
              <h2 className="text-xl font-serif text-dark-surface flex items-center gap-2">
                <Plus size={20} className="text-nature-green" /> Add Guest Testimonial
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Guest Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ramesh K." 
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Stay Date / Label</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 1 week ago" 
                    value={newReview.date}
                    onChange={(e) => setNewReview({ ...newReview, date: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Rating (1 to 5 Stars)</label>
                  <input 
                    type="number" 
                    min={1} 
                    max={5} 
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-white px-4 py-3 rounded-xl border border-black/10 text-sm font-semibold text-subtle-gold"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="text-xs uppercase font-semibold text-elegant-stone block mb-1">Review Message</label>
                  <textarea 
                    rows={3} 
                    placeholder="Guest review details..." 
                    value={newReview.text}
                    onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                    className="w-full bg-white p-4 rounded-xl border border-black/10 text-sm"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="px-6 py-3.5 bg-nature-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-premium-olive shadow-sm cursor-pointer">
                Save Guest Review
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((rev: any) => (
                <div key={rev.id} className="bg-white rounded-2xl p-6 border border-black/10 shadow-xs flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex text-subtle-gold mb-2">
                      {[...Array(rev.rating || 5)].map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" stroke="none" />
                      ))}
                    </div>
                    <p className="text-xs text-elegant-stone italic">"{rev.text}"</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-black/10 pt-3">
                    <div>
                      <h4 className="font-semibold text-xs text-dark-surface">{rev.name}</h4>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    <button 
                      onClick={() => { if(confirm("Delete this review?")) deleteTestimonial(rev.id); }}
                      className="text-red-600 hover:text-red-800 p-1 text-xs cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
