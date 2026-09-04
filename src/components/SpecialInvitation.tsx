import { Heart } from "lucide-react";
import { INVITATION_MESSAGE } from "../constants/eventData";

export default function SpecialInvitation() {
  return (
    <section className="px-4 sm:px-5 pt-6 sm:pt-8 pb-4 sm:pb-6">
      <div className="text-center mb-4 flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500 shrink-0" />
        <h2 className="font-serif italic text-lg sm:text-xl text-blush-600">
          {INVITATION_MESSAGE.heading}
        </h2>
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500 shrink-0" />
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-soft space-y-3 sm:space-y-4">
        {INVITATION_MESSAGE.paragraphs.map((text, i) => (
          <p
            key={i}
            className={
              "font-serif text-sm sm:text-base text-blush-700 leading-relaxed text-center " +
              (i === 0 ? "font-semibold text-blush-600" : "")
            }
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}