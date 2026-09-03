export const CELEBRANT = {
  fullName: "Jamaiah Gabrielle Ticatic Sarabia",
  shortName: "Jamaiah",
  event: "Baptismal Celebration",
} as const;

export const EVENT_DATE = "September 27, 2026";

export const BAPTISM = {
  time: "9:00 AM",
  venue: "Immaculate Conception Parish of Mataasnakahoy",
  mapUrl: "https://maps.app.goo.gl/1S2s6FyWMyH8EvoaA",
} as const;

export const RECEPTION = {
  time: "11:00 AM onwards",
  venue: "Ticatic Residence",
  mapUrl: "https://maps.app.goo.gl/YbKswhpn2ZYtSNrB8",
} as const;

export const RSVP_CONTACTS = [
  { name: "Jeneth",  phone: "09174331509" },
  { name: "Geneber", phone: "09171820022" },
] as const;

export const RSVP_OPTIONS = [
  {
    id: "church_reception",
    title: "Church + Reception",
    description: "I'll be attending both.",
  },
  {
    id: "reception_only",
    title: "Reception Only",
    description: "I'll be attending the reception only.",
  },
  {
    id: "sending_love",
    title: "Sending Love From Afar",
    description: "I won't be able to attend, but sending my love.",
  },
] as const;

// Paste your Google Apps Script Web App URL here in Step 3
export const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwV8-gIfzLAY0yR50JoTksIAx6LE1UGfLmf5xhMKu1Qg25x4okHUlyBuA4WWySz6mvheg/exec";