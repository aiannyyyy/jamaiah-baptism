import { Calendar, Church, Utensils, MapPin, Clock } from "lucide-react";
import { EVENT_DATE, BAPTISM, RECEPTION } from "../constants/eventData";
import type { ReactNode } from "react";

export default function EventDetails() {
  return (
    <section className="px-4 sm:px-5 pb-4 space-y-3">
      <DetailCard icon={<Calendar className="w-5 h-5" />}>
        <p className="font-serif text-base sm:text-lg font-semibold">{EVENT_DATE}</p>
      </DetailCard>

      <DetailCard icon={<Church className="w-5 h-5" />}>
        <p className="font-semibold text-sm sm:text-base mb-1">Gabbie's Baptism</p>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-blush-600">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>{BAPTISM.time}</span>
        </div>
        <VenueLink name={BAPTISM.venue} url={BAPTISM.mapUrl} />
      </DetailCard>

      <DetailCard icon={<Utensils className="w-5 h-5" />}>
        <p className="font-semibold text-sm sm:text-base mb-1">Reception</p>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-blush-600">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>{RECEPTION.time}</span>
        </div>
        <VenueLink name={RECEPTION.venue} url={RECEPTION.mapUrl} />
      </DetailCard>
    </section>
  );
}

function DetailCard({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 sm:p-4 flex gap-3 sm:gap-4 items-start shadow-soft">
      <div className="text-blush-500 mt-0.5 shrink-0">{icon}</div>
      <div className="text-blush-700 font-serif flex-1 min-w-0">{children}</div>
    </div>
  );
}

function VenueLink({ name, url }: { name: string; url: string }) {
  const linkClass = "text-xs sm:text-sm text-blush-600 mt-1 inline-flex items-start gap-1 hover:text-blush-500 transition-colors group";

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-70 group-hover:opacity-100" />
      <span className="underline decoration-blush-300 decoration-dotted underline-offset-2 break-words">{name}</span>
    </a>
  );
}