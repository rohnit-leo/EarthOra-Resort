/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Lenis from "lenis";

function HashAdminHandler() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkHash = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#admin" || currentHash === "#/admin" || hash === "#admin") {
        navigate("/admin", { replace: true });
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, [pathname, hash, navigate]);

  return null;
}
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/layout/CustomCursor";
import { FloatingMenuCTA } from "./components/layout/FloatingMenuCTA";
import { Preloader } from "./components/layout/Preloader";
import { Home } from "./pages/Home";
import { Stay } from "./pages/Stay";
import { Gallery } from "./pages/Gallery";
import { Experiences } from "./pages/Experiences";
import { Contact } from "./pages/Contact";
import { StandardCottage } from "./pages/rooms/StandardCottage";
import { PremiumCottage } from "./pages/rooms/PremiumCottage";
import { Restaurant } from "./pages/Restaurant";
import { Tourism } from "./pages/Tourism";
import { PrivacyPolicy } from "./pages/policies/PrivacyPolicy";
import { TermsConditions } from "./pages/policies/TermsConditions";
import { CancellationPolicy } from "./pages/policies/CancellationPolicy";
import { HouseRules } from "./pages/policies/HouseRules";
import { Admin } from "./pages/Admin";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    // Skip Lenis smooth scroll on mobile touch devices for instant 60/120Hz native scrolling performance
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    if (isMobile) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <HashAdminHandler />
      <ScrollToTop />
      <Preloader />
      <div className="min-h-screen bg-luxury-white flex flex-col relative selection:bg-nature-green selection:text-white">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stay" element={<Stay />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/room/standard" element={<StandardCottage />} />
            <Route path="/room/premium" element={<PremiumCottage />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/tourism" element={<Tourism />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/cancellation" element={<CancellationPolicy />} />
            <Route path="/rules" element={<HouseRules />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <FloatingMenuCTA />
      </div>
    </Router>
  );
}




