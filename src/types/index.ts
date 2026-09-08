import { RSVP_OPTIONS } from "../constants/eventData";

// Derives the union type "church_reception" | "reception_only" | "sending_love"
// automatically from the constants — so if you edit the ids in eventData.ts,
// the types stay in sync.
export type RSVPOptionId = (typeof RSVP_OPTIONS)[number]["id"];

export type RSVPSubmission = {
  guestName: string;
  attendance: RSVPOptionId;
  vehicle: ParkingOptionId;
  message: string;
  submittedAt: string;
};

export type ParkingOptionId = "bringing_vehicle" | "no_vehicle" | "not_applicable";

export type SubmitStatus = "idle" | "submitting" | "success" | "error";