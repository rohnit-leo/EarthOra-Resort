import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({
  title = "EarthOra Resort | Luxury Eco Sanctuary Near Kaas Plateau, Satara",
  description = "Experience EarthOra Resort near UNESCO Kaas Plateau, Satara. Premium eco cottages, live open-kitchen dining, peaceful mountain views, and nature safaris.",
  canonicalUrl = "https://www.earthoraresort.in/",
  keywords = "EarthOra Resort, Kaas Plateau resort, Satara luxury resort, eco resort Satara, Kaas pathar hotels, resort near Kaas flower valley, luxury cottages Satara",
  ogImage = "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3053.PNG",
}: SEOProps) {
  useEffect(() => {
    // Set Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (nameAttr: string, keyName: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${keyName}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(nameAttr, keyName);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentVal);
    };

    // Helper to update canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Meta Tags
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:site_name", "EarthOra Resort");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // Schema JSON-LD for Hotel / Resort
    let schemaScript = document.querySelector("#earthora-jsonld");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.setAttribute("id", "earthora-jsonld");
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Resort",
      "name": "EarthOra Resort",
      "alternateName": "EarthOra Eco Luxury Sanctuary",
      "url": "https://www.earthoraresort.in/",
      "logo": "https://falh4wp7xhmztgpi.public.blob.vercel-storage.com/IMG_2996.PNG",
      "image": [
        "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3053.PNG",
        "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3055.PNG",
        "https://3t11ypwbknpvqnak.public.blob.vercel-storage.com/resort/IMG_3066.PNG"
      ],
      "description": "Luxury eco resort situated near Kaas Plateau (UNESCO World Heritage Site), Satara, Maharashtra. Offering premium cottages, open-kitchen dining, and scenic valley views.",
      "telephone": "+918888888162",
      "email": "inquiry@earthoraresort.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Kaas Plateau Road",
        "addressLocality": "Satara",
        "addressRegion": "Maharashtra",
        "postalCode": "415013",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.7127441,
        "longitude": 73.8659753
      },
      "hasMap": "https://maps.google.com/?q=17.7127441,73.8659753",
      "priceRange": "₹4999 - ₹12000",
      "starRating": {
        "@type": "Rating",
        "ratingValue": "4.9"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Live Open Kitchen Restaurant", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free High Speed WiFi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Onsite Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pet Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Open-air Event Lawn & Hall", "value": true }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [title, description, canonicalUrl, keywords, ogImage]);

  return null;
}
