import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { redirectToWhatsApp } from "../lib/utils";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirectToWhatsApp({
      Intent: "Contact Form Submission",
      Name: form.name,
      Phone: form.phone,
      Message: form.message
    });
  };

  return (
    <div className="pt-32 pb-20 bg-luxury-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-nature-green uppercase tracking-widest text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-dark-surface"
          >
            Contact EarthOra
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="bg-soft-ivory p-10 space-y-8">
              <h3 className="text-2xl font-serif text-dark-surface border-b border-elegant-stone/20 pb-4">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-subtle-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-dark-surface mb-1">Address</h4>
                  <p className="text-elegant-stone font-light leading-relaxed">EarthOra Resort, Devkal Phata, <br />Kaas Road, Satara, <br />Maharashtra 415001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-subtle-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-dark-surface mb-1">Reservations & Inquiries</h4>
                  <p className="text-elegant-stone font-light">+91 8888888162</p>
                  <p className="text-elegant-stone font-light">+91 7219516566</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-subtle-gold shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-medium text-dark-surface mb-1">Reception Hours</h4>
                  <p className="text-elegant-stone font-light">24 Hours / 7 Days</p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden border border-elegant-stone/20 bg-soft-ivory">
              {/* Fallback map / image */}
              <img src="https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3058.PNG" loading="lazy" alt="Map Location" className="w-full h-full object-cover opacity-70" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 border border-elegant-stone/20 shadow-2xl"
          >
            <h3 className="text-2xl font-serif text-dark-surface mb-8">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-elegant-stone mb-2 font-medium">Full Name</label>
                <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-4 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-elegant-stone mb-2 font-medium">Phone Number</label>
                <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-4 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-elegant-stone mb-2 font-medium">Message</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full bg-soft-ivory border-none px-4 py-4 text-dark-surface focus:ring-1 focus:ring-subtle-gold outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-nature-green text-white py-5 uppercase tracking-widest text-sm hover:bg-premium-olive transition-colors magnetic">
                Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
