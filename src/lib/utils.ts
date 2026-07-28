import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// WhatsApp redirect helper
export function redirectToWhatsApp(details: Record<string, string>) {
  const phone = "918888888162";
  const message = Object.entries(details)
    .filter(([_, value]) => value)
    .map(([key, value]) => `*${key}:* ${value}`)
    .join("\n");
  
  const encodedMessage = encodeURIComponent(`Hello EarthOra Resort, I would like to make an inquiry:\n\n${message}`);
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
}
