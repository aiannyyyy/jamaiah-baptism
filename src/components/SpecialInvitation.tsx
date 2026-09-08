import { Heart } from "lucide-react";
import { INVITATION_MESSAGE } from "../constants/eventData";

const HIGHLIGHT_PHRASE = "Gabbie's Ninong/Ninang";

type Props = {
  onAccept: () => void;
};

export default function SpecialInvitation({ onAccept }: Props) {
  return (
    <section className="px-4 sm:px-5 pt-6 sm:pt-8 pb-4 sm:pb-6">
      <div className="text-center mb-4 flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500 shrink-0" />
        <h2 className="font-serif italic text-3xl sm:text-4xl text-blush-600">
          {INVITATION_MESSAGE.heading}
        </h2>
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500 shrink-0" />
      </div>

      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-soft space-y-3 sm:space-y-4">
        {INVITATION_MESSAGE.paragraphs.map((text, i) => {
          const parts = text.split(HIGHLIGHT_PHRASE);
          const hasHighlight = parts.length > 1;

          return (
            <p
              key={i}
              className={
                "font-serif leading-relaxed text-center " +
                (i === 0
                  ? "text-lg sm:text-xl font-semibold text-blush-600"
                  : "text-sm sm:text-base text-blush-700")
              }
            >
              {hasHighlight
                ? parts.map((part, idx) => (
                    <span key={idx}>
                      {part}
                      {idx < parts.length - 1 && (
                        <span className="font-bold">{HIGHLIGHT_PHRASE}</span>
                      )}
                    </span>
                  ))
                : text}
            </p>
          );
        })}

        <div className="pt-2 sm:pt-3">
          <button
            onClick={onAccept}
            className="w-full bg-blush-500 hover:bg-blush-600 text-white font-serif font-semibold py-2.5 sm:py-3 rounded-2xl shadow-soft transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Heart className="w-4 h-4 fill-white" />
            Accept Invitation
          </button>
        </div>
      </div>
    </section>
  );
}