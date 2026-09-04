import { ChevronDown, ChevronUp } from "lucide-react";
import { COVER_TEXT } from "../constants/eventData";

type Props = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function CoverSection({ onToggle, isOpen }: Props) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <div className="w-64 sm:w-72 aspect-square rounded-3xl overflow-hidden shadow-soft mb-8">
        <img
          src="/bg-baptism.png"
          alt="Jamaiah Gabrielle"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <p className="font-serif italic text-lg text-blush-500 mb-2">
        {COVER_TEXT.opening}
      </p>
      <h1 className="font-script text-4xl sm:text-5xl text-blush-600 leading-tight mb-2">
        {COVER_TEXT.highlight}
      </h1>
      <p className="font-serif italic text-lg text-blush-500 mb-10">
        {COVER_TEXT.closing}
      </p>

      <button onClick={onToggle} className="bg-blush-500 hover:bg-blush-600 text-white font-serif font-semibold px-8 py-3 rounded-full shadow-soft transition-all hover:scale-105 flex items-center gap-2">
        {isOpen ? "Close Invitation" : COVER_TEXT.buttonLabel}
        {isOpen
          ? <ChevronUp className="w-4 h-4" />
          : <ChevronDown className="w-4 h-4 animate-bounce" />
        }
      </button>
    </section>
  );
}