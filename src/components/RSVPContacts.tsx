import { Phone } from "lucide-react";
import { RSVP_CONTACTS } from "../constants/eventData";

export default function RSVPContacts() {
  return (
    <section className="px-5 pb-4">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex gap-4 items-start shadow-soft">
        <div className="text-blush-500 mt-0.5 shrink-0">
          <Phone className="w-5 h-5" />
        </div>
        <div className="text-blush-700 font-serif flex-1">
          <p className="font-semibold mb-1.5">RSVP / Confirmation</p>
          {RSVP_CONTACTS.map((c) => (
            <p key={c.phone} className="leading-relaxed">
              {c.name} —{" "}
              <a href={"tel:" + c.phone} className="hover:text-blush-500 transition-colors">
                {c.phone}
              </a>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}