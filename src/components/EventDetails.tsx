import { Calendar, Church, Utensils, MapPin } from "lucide-react";
import { EVENT_DATE, BAPTISM, RECEPTION } from "../constants/eventData";
import type { ReactNode } from "react";

export default function EventDetails() {
  return (
    <section className="px-5 pt-6 pb-4 space-y-3">
      <DetailCard icon={<Calendar className="w-5 h-5" />}>
        <p className="font-serif text-lg font-semibold">{EVENT_DATE}</p>
      </DetailCard>

      <DetailCard icon={<Church className="w-5 h-5" />}>
        <p>
          <span className="font-semibold">Baptism</span> — {BAPTISM.time}
        </p>
        <VenueLink name={BAPTISM.venue} url={BAPTISM.mapUrl} />
      </DetailCard>

      <DetailCard icon={<Utensils className="w-5 h-5" />}>
        <p>
          <span className="font-semibold">Reception</span> — {RECEPTION.time}
        </p>
        <VenueLink name={RECEPTION.venue} url={RECEPTION.mapUrl} />
      </DetailCard>
    </section>
  );
}

function DetailCard({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 flex gap-4 items-start shadow-soft">
      <div className="text-blush-500 mt-0.5 shrink-0">{icon}</div>
      <div className="text-blush-700 font-serif flex-1">{children}</div>
    </div>
  );
}

function VenueLink({ name, url }: { name: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-blush-600 mt-1 inline-flex items-start gap-1 hover:text-blush-500 transition-colors group">
      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-70 group-hover:opacity-100" />
      <span className="underline decoration-blush-300 decoration-dotted underline-offset-2">{name}</span>
    </a>
  );
}