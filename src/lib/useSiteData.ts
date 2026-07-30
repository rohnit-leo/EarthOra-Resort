import { useState, useEffect } from "react";
import { collection, doc, onSnapshot, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";
import {
  DEFAULT_ROOMS,
  DEFAULT_EXPERIENCES,
  DEFAULT_TESTIMONIALS,
  DEFAULT_TOURISM,
  DEFAULT_RESTAURANT
} from "../data/defaultData";

// --- ROOMS HOOK & FUNCTIONS ---
export function useRooms() {
  const [rooms, setRooms] = useState(DEFAULT_ROOMS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "rooms"), (snapshot) => {
      if (!snapshot.empty) {
        const roomData: any = { ...DEFAULT_ROOMS };
        snapshot.docs.forEach((docSnap) => {
          roomData[docSnap.id] = { id: docSnap.id, ...docSnap.data() };
        });
        setRooms(roomData);
      } else {
        // Seed default rooms if empty
        Object.entries(DEFAULT_ROOMS).forEach(([key, val]) => {
          setDoc(doc(db, "rooms", key), val).catch(() => {});
        });
      }
      setLoading(false);
    }, (err) => {
      console.warn("Firestore room snapshot error, using defaults:", err);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return { rooms, loading };
}

export async function saveRoomData(roomId: string, data: any) {
  const roomRef = doc(db, "rooms", roomId);
  await setDoc(roomRef, data, { merge: true });
}

// --- EXPERIENCES HOOK & FUNCTIONS ---
export function useExperiences() {
  const [experiences, setExperiences] = useState(DEFAULT_EXPERIENCES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "experiences"), (snapshot) => {
      if (!snapshot.empty) {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as any[];
        setExperiences(list);
      } else {
        DEFAULT_EXPERIENCES.forEach((item) => {
          setDoc(doc(db, "experiences", item.id), item).catch(() => {});
        });
      }
      setLoading(false);
    }, () => setLoading(false));

    return () => unsub();
  }, []);

  return { experiences, loading };
}

export async function saveExperience(item: any) {
  const id = item.id || `exp_${Date.now()}`;
  await setDoc(doc(db, "experiences", id), { ...item, id });
}

export async function deleteExperience(id: string) {
  await deleteDoc(doc(db, "experiences", id));
}

// --- TESTIMONIALS HOOK & FUNCTIONS ---
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "testimonials"), (snapshot) => {
      if (!snapshot.empty) {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as any[];
        setTestimonials(list);
      } else {
        DEFAULT_TESTIMONIALS.forEach((item) => {
          setDoc(doc(db, "testimonials", item.id), item).catch(() => {});
        });
      }
      setLoading(false);
    }, () => setLoading(false));

    return () => unsub();
  }, []);

  return { testimonials, loading };
}

export async function saveTestimonial(item: any) {
  const id = item.id || `rev_${Date.now()}`;
  await setDoc(doc(db, "testimonials", id), { ...item, id });
}

export async function deleteTestimonial(id: string) {
  await deleteDoc(doc(db, "testimonials", id));
}

// --- TOURISM HOOK & FUNCTIONS ---
export function useTourism() {
  const [tourismList, setTourismList] = useState(DEFAULT_TOURISM);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tourism"), (snapshot) => {
      if (!snapshot.empty) {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as any[];
        
        // Auto sanitize and enforce accurate specific images per spot
        list.forEach(item => {
          const defaultItem = DEFAULT_TOURISM.find(d => d.id === item.id);
          if (defaultItem) {
            const validDefaultImages = defaultItem.images;
            const currentImages = Array.isArray(item.images) ? item.images : [];
            
            // Check if current images are missing any default images or contain bad/cross-pollinated images
            const isMissingDefaultImages = validDefaultImages.some(img => !currentImages.includes(img));
            const hasInvalidImage = currentImages.some((img: string) => {
              if (typeof img !== 'string') return true;
              if (img.toLowerCase().includes('restaurant') || img.toLowerCase().includes('cooking')) return true;
              if (item.id !== 'kaas' && (img.includes('IMG_3090') || img.includes('IMG_3093'))) return true;
              return false;
            });

            if (isMissingDefaultImages || hasInvalidImage || currentImages.length === 0) {
              item.images = [...validDefaultImages];
              setDoc(doc(db, "tourism", item.id), item).catch(() => {});
            }
          }
        });

        // Check if any default items are missing and seed them
        const existingIds = new Set(list.map(i => i.id));
        DEFAULT_TOURISM.forEach(defaultItem => {
          if (!existingIds.has(defaultItem.id)) {
            setDoc(doc(db, "tourism", defaultItem.id), defaultItem).catch(() => {});
            list.push(defaultItem);
          }
        });

        setTourismList(list);
      } else {
        DEFAULT_TOURISM.forEach((item) => {
          setDoc(doc(db, "tourism", item.id), item).catch(() => {});
        });
        setTourismList(DEFAULT_TOURISM);
      }
      setLoading(false);
    }, () => setLoading(false));

    return () => unsub();
  }, []);

  return { tourismList, loading };
}

export async function resetTourismToDefault() {
  for (const item of DEFAULT_TOURISM) {
    await setDoc(doc(db, "tourism", item.id), item);
  }
}

export async function saveTourismPlace(item: any) {
  const id = item.id || `place_${Date.now()}`;
  await setDoc(doc(db, "tourism", id), { ...item, id });
}

export async function deleteTourismPlace(id: string) {
  await deleteDoc(doc(db, "tourism", id));
}

// --- RESTAURANT HOOK & FUNCTIONS ---
export function useRestaurant() {
  const [restaurantItems, setRestaurantItems] = useState(DEFAULT_RESTAURANT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "restaurant"), (snapshot) => {
      if (!snapshot.empty) {
        const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() })) as any[];
        setRestaurantItems(list);
      } else {
        DEFAULT_RESTAURANT.forEach((item) => {
          setDoc(doc(db, "restaurant", item.id), item).catch(() => {});
        });
      }
      setLoading(false);
    }, () => setLoading(false));

    return () => unsub();
  }, []);

  return { restaurantItems, loading };
}

export async function saveRestaurantItem(item: any) {
  const id = item.id || `rest_${Date.now()}`;
  await setDoc(doc(db, "restaurant", id), { ...item, id });
}

export async function deleteRestaurantItem(id: string) {
  await deleteDoc(doc(db, "restaurant", id));
}
