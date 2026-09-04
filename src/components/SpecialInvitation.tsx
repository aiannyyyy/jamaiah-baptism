import { Heart } from "lucide-react";
import { INVITATION_MESSAGE } from "../constants/eventData";

export default function SpecialInvitation() {
  return (
    <section className="px-5 pt-8 pb-6">
      <div className="text-center mb-4 flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500" />
        <h2 className="font-serif italic text-xl text-blush-600">
          {INVITATION_MESSAGE.heading}
        </h2>
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500" />
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft space-y-4">
        {INVITATION_MESSAGE.paragraphs.map((text, i) => (
          <p
            key={i}
            className={
              "font-serif text-blush-700 leading-relaxed text-center " +
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