import { GOOGLE_SHEETS_URL } from "../constants/eventData";
import type { RSVPSubmission } from "../types";

export function submitRSVP(data: RSVPSubmission): void {
  const params = new URLSearchParams({
    guestName: data.guestName,
    attendance: data.attendance,
    message: data.message || "",
    submittedAt: data.submittedAt,
  });

  const url = GOOGLE_SHEETS_URL + "?" + params.toString();

  // Fire and forget — Google handles it in the background
  fetch(url, { mode: "no-cors" }).catch(() => {
    // Silent fail — data usually still reaches the sheet
    console.warn("RSVP fetch failed, but data may still have been received.");
  });
}