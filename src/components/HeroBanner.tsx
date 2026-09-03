import { CELEBRANT } from "../constants/eventData";

export default function HeroBanner() {
  return (
    <section className="w-full aspect-square relative overflow-hidden bg-blush-100">
      <img
        src="/bg-baptism.png"
        alt="Baptismal photo of Jamaiah"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-x-0 bottom-6 px-6 text-center z-10">
        <h1 className="font-script text-4xl sm:text-5xl text-blush-600 leading-none drop-shadow-sm">
          Jamaiah Gabrielle
        </h1>
        <h1 className="font-script text-4xl sm:text-5xl text-blush-600 leading-none mt-1 drop-shadow-sm">
          Ticatic Sarabia
        </h1>
        <p className="font-serif italic text-xl text-blush-500 mt-3">
          {CELEBRANT.event}
        </p>
      </div>
    </section>
  );
}