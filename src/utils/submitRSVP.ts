import { GOOGLE_SHEETS_URL } from "../constants/eventData";
import type { RSVPSubmission } from "../types";

export function submitRSVP(data: RSVPSubmission): void {
  const params = new URLSearchParams({
    guestName: data.guestName,
    attendance: data.attendance,
    vehicle: data.vehicle,
    message: data.message || "",
    submittedAt: data.submittedAt,
  });

  const url = GOOGLE_SHEETS_URL + "?" + params.toString();

  fetch(url, { mode: "no-cors" }).catch(() => {
    console.warn("RSVP fetch failed, but data may still have been received.");
  });
}