export const CELEBRANT = {
  fullName: "Jamaiah Gabrielle Ticatic Sarabia",
  nickname: "Gabbie",
  event: "Baptismal Celebration",
} as const;

export const COVER_TEXT = {
  opening: "A special day for our little girl...",
  highlight: "Jamaiah Gabrielle",
  closing: "is getting baptized! 💕",
  buttonLabel: "Open Invitation",
} as const;

export const INVITATION_MESSAGE = {
  heading: "A Special Invitation for You",
  paragraphs: [
    "We would be honored to have you as Gabbie's Ninong/Ninang.",
    "As she grows, we hope she'll be surrounded by people who will guide her, support her, and love her through every chapter of her life.",
    "Thank you for accepting this special role in Gabbie's life. 💕",
  ],
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

export const RSVP_HEADING = "We'd love to know how you'll be celebrating with Gabbie.";

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

export const SENDING_LOVE_NOTE =
  "We completely understand! Thank you for keeping Gabbie in your thoughts and prayers. 💕";

export const THANK_YOU_MESSAGES = {
  church_reception: {
    heading: "Thank you, Ninong/Ninang! 💕",
    lines: [
      "Your RSVP has been submitted.",
      "We can't wait to celebrate Gabbie's special day with you!",
      "See you on September 27!",
    ],
  },
  reception_only: {
    heading: "Thank you, Ninong/Ninang! 💕",
    lines: [
      "Your RSVP has been submitted.",
      "We can't wait to celebrate with you at the reception!",
    ],
  },
  sending_love: {
    heading: "Thank you, Ninong/Ninang! 💕",
    lines: [
      "We'll miss having you there, but your love and warm wishes for Gabbie mean so much to us.",
    ],
  },
} as const;

export const PARKING_INFO = {
  heading: "Parking Information",
  message:
    "As our reception will be held at our home, parking space is limited. If you'll be bringing a vehicle, please let us know in your RSVP so we can make the necessary parking arrangements. We'll do our best to accommodate everyone.",
} as const;

export const PARKING_QUESTION = "Will you be bringing a vehicle?";

export const PARKING_OPTIONS = [
  {
    id: "bringing_vehicle",
    title: "Yes, Bringing a Vehicle",
    description: "I'll need a parking space.",
  },
  {
    id: "no_vehicle",
    title: "No Vehicle",
    description: "I won't be bringing a vehicle.",
  },
] as const;

export const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwV8-gIfzLAY0yR50JoTksIAx6LE1UGfLmf5xhMKu1Qg25x4okHUlyBuA4WWySz6mvheg/exec";