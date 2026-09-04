import { ChevronDown, ChevronUp } from "lucide-react";
import { COVER_TEXT } from "../constants/eventData";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function CoverSection({ onToggle, isOpen }: Props) {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 text-center relative py-10">
      <div className="w-48 sm:w-64 md:w-72 aspect-square rounded-3xl overflow-hidden shadow-soft mb-6 sm:mb-8">
        <img
          src="/bg-baptism.png"
          alt="Jamaiah Gabrielle"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <p className="font-serif italic text-base sm:text-lg text-blush-500 mb-2">
        {COVER_TEXT.opening}
      </p>
      <h1 className="font-script text-3xl sm:text-4xl md:text-5xl text-blush-600 leading-tight mb-2">
        {COVER_TEXT.highlight}
      </h1>
      <p className="font-serif italic text-base sm:text-lg text-blush-500 mb-8 sm:mb-10">
        {COVER_TEXT.closing}
      </p>

      <button onClick={onToggle} className="bg-blush-500 hover:bg-blush-600 text-white font-serif font-semibold px-6 sm:px-8 py-3 rounded-full shadow-soft transition-all hover:scale-105 flex items-center gap-2 text-sm sm:text-base">
        {isOpen ? "Close Invitation" : COVER_TEXT.buttonLabel}
        {isOpen
          ? <ChevronUp className="w-4 h-4" />
          : <ChevronDown className="w-4 h-4 animate-bounce" />
        }
      </button>
    </section>
  );
}