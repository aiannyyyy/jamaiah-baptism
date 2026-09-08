import { useState } from "react";
import type { FormEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  User,
  Church,
  Gift,
  Heart,
  MessageCircle,
  PartyPopper,
  CheckCircle2,
  Car,
  Info,
} from "lucide-react";
import {
  RSVP_OPTIONS,
  RSVP_HEADING,
  CELEBRANT,
  SENDING_LOVE_NOTE,
  THANK_YOU_MESSAGES,
  PARKING_INFO,
  PARKING_QUESTION,
  PARKING_OPTIONS,
} from "../constants/eventData";
import { submitRSVP } from "../utils/submitRSVP";
import type { RSVPOptionId, ParkingOptionId, SubmitStatus } from "../types";

const OPTION_ICONS: Record<RSVPOptionId, LucideIcon> = {
  church_reception: Church,
  reception_only: Gift,
  sending_love: Heart,
};

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<RSVPOptionId | null>(null);
  const [vehicle, setVehicle] = useState<ParkingOptionId | null>(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submittedChoice, setSubmittedChoice] = useState<RSVPOptionId | null>(null);

  const canSubmit =
    name.trim() !== "" &&
    selected !== null &&
    (selected === "sending_love" || vehicle !== null) &&
    status !== "submitting";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit || !selected) return;
    if (selected !== "sending_love" && !vehicle) return;

    submitRSVP({
      guestName: name.trim(),
      attendance: selected,
      vehicle: selected === "sending_love" ? "not_applicable" : (vehicle as ParkingOptionId),
      message: message.trim(),
      submittedAt: new Date().toLocaleString("en-PH", {
        timeZone: "Asia/Manila",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    });

    setSubmittedChoice(selected);
    setStatus("success");
  }

  function handleReset() {
    setName("");
    setSelected(null);
    setVehicle(null);
    setMessage("");
    setStatus("idle");
    setSubmittedChoice(null);
  }

  if (status === "success" && submittedChoice) {
    const thankYou = THANK_YOU_MESSAGES[submittedChoice];

    return (
      <section className="px-4 sm:px-5 pb-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-soft text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blush-100 flex items-center justify-center animate-bounce">
              <PartyPopper className="w-8 h-8 sm:w-10 sm:h-10 text-blush-500" />
            </div>
          </div>

          <h2 className="font-script text-2xl sm:text-3xl text-blush-600">
            {thankYou.heading}
          </h2>

          <div className="flex items-center justify-center gap-2 text-blush-500">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="font-serif text-xs sm:text-sm">RSVP received</p>
          </div>

          <div className="space-y-2">
            {thankYou.lines.map((line, i) => (
              <p key={i} className="font-serif text-blush-600 text-xs sm:text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          <div className="pt-3 sm:pt-4 space-y-2">
            <button onClick={handleReset} className="w-full bg-blush-500 hover:bg-blush-600 text-white font-serif font-semibold py-2.5 sm:py-3 rounded-2xl shadow-soft transition-colors text-sm sm:text-base">
              Submit Another RSVP
            </button>
            <p className="text-[10px] sm:text-xs text-blush-400 font-serif italic">
              For other Ninongs/Ninangs using the same device
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-5 pb-6">
      <div className="text-center mb-3 sm:mb-4 flex items-center justify-center gap-2">
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500 shrink-0" />
        <h2 className="font-serif italic text-lg sm:text-xl text-blush-600">RSVP</h2>
        <Heart className="w-4 h-4 text-blush-500 fill-blush-500 shrink-0" />
      </div>

      <p className="font-serif text-blush-700 text-center text-xs sm:text-sm mb-3 sm:mb-4 px-2">
        {RSVP_HEADING}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <NameInput value={name} onChange={setName} />

        <p className="font-serif text-blush-500 text-[11px] sm:text-xs text-center italic">
          Please select one option below
        </p>

        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {RSVP_OPTIONS.map((opt) => (
            <OptionCard
              key={opt.id}
              option={opt}
              isSelected={selected === opt.id}
              onSelect={() => setSelected(opt.id)}
            />
          ))}
        </div>

        {selected === "sending_love" && (
          <div className="bg-blush-100 rounded-2xl p-3 sm:p-4 text-center animate-fade-in">
            <p className="font-serif text-blush-600 text-xs sm:text-sm italic leading-relaxed">
              {SENDING_LOVE_NOTE}
            </p>
          </div>
        )}

        {selected !== "sending_love" && (
          <>
            <ParkingInfoCard />

            <p className="font-serif text-blush-600 text-xs sm:text-sm text-center font-semibold pt-1">
              {PARKING_QUESTION}
            </p>

            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {PARKING_OPTIONS.map((opt) => (
                <ParkingOptionCard
                  key={opt.id}
                  option={opt}
                  isSelected={vehicle === opt.id}
                  onSelect={() => setVehicle(opt.id)}
                />
              ))}
            </div>
          </>
        )}

        <MessageInput value={message} onChange={setMessage} />

        <SubmitButton disabled={!canSubmit} />

        <p className="text-center text-[10px] sm:text-xs text-blush-500 font-serif italic pt-1">
          Your RSVP will help us finalize our headcount and prepare accordingly.
        </p>
      </form>
    </section>
  );
}

function NameInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-soft">
      <User className="w-4 h-4 sm:w-5 sm:h-5 text-blush-400 shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your Name (e.g., Ana Dela Cruz)"
        className="flex-1 bg-transparent outline-none text-blush-700 placeholder:text-blush-400 font-serif font-bold text-base sm:text-lg min-w-0"
        required
      />
    </div>
  );
}

type OptionCardProps = {
  option: (typeof RSVP_OPTIONS)[number];
  isSelected: boolean;
  onSelect: () => void;
};

function OptionCard({ option, isSelected, onSelect }: OptionCardProps) {
  const Icon = OPTION_ICONS[option.id];
  const base = "rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center transition-all shadow-soft border-2 flex flex-col items-center min-h-[100px] sm:min-h-[120px] justify-center";
  const selectedStyle = "bg-blush-500 text-white border-blush-600";
  const unselectedStyle = "bg-white/70 backdrop-blur-sm text-blush-700 border-transparent hover:border-blush-300";

  return (
    <button type="button" onClick={onSelect} className={base + " " + (isSelected ? selectedStyle : unselectedStyle)}>
      <Icon className={"w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-1.5 " + (isSelected ? "text-white fill-white/30" : "text-blush-400")} />
      <p className="font-serif font-semibold text-[10px] sm:text-xs leading-tight mb-0.5 sm:mb-1 uppercase tracking-wide">
        {option.title}
      </p>
      <p className={"text-[8px] sm:text-[10px] leading-tight " + (isSelected ? "text-white/90" : "text-blush-500")}>
        {option.description}
      </p>
    </button>
  );
}

function ParkingInfoCard() {
  return (
    <div className="bg-blush-100 rounded-2xl p-3 sm:p-4 flex gap-2.5 sm:gap-3 items-start">
      <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blush-500 shrink-0 mt-0.5" />
      <div>
        <p className="font-serif font-semibold text-blush-600 text-xs sm:text-sm mb-1">
          {PARKING_INFO.heading}
        </p>
        <p className="font-serif text-blush-600 text-[11px] sm:text-xs leading-relaxed">
          {PARKING_INFO.message}
        </p>
      </div>
    </div>
  );
}

type ParkingOptionCardProps = {
  option: (typeof PARKING_OPTIONS)[number];
  isSelected: boolean;
  onSelect: () => void;
};

function ParkingOptionCard({ option, isSelected, onSelect }: ParkingOptionCardProps) {
  const base = "rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-center transition-all shadow-soft border-2 flex flex-col items-center min-h-[90px] sm:min-h-[100px] justify-center";
  const selectedStyle = "bg-blush-500 text-white border-blush-600";
  const unselectedStyle = "bg-white/70 backdrop-blur-sm text-blush-700 border-transparent hover:border-blush-300";

  return (
    <button type="button" onClick={onSelect} className={base + " " + (isSelected ? selectedStyle : unselectedStyle)}>
      <Car className={"w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-1.5 " + (isSelected ? "text-white" : "text-blush-400")} />
      <p className="font-serif font-semibold text-[10px] sm:text-xs leading-tight mb-0.5 sm:mb-1">
        {option.title}
      </p>
      <p className={"text-[8px] sm:text-[10px] leading-tight " + (isSelected ? "text-white/90" : "text-blush-500")}>
        {option.description}
      </p>
    </button>
  );
}

function MessageInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 flex gap-2 sm:gap-3 shadow-soft">
      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blush-400 shrink-0 mt-1" />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={"Leave a short message for " + CELEBRANT.nickname + " (optional)"}
        rows={2}
        className="flex-1 bg-transparent outline-none text-blush-700 placeholder:text-blush-300 font-serif text-xs sm:text-sm resize-none min-w-0"
      />
    </div>
  );
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <button type="submit" disabled={disabled} className="w-full bg-blush-500 hover:bg-blush-600 disabled:bg-blush-300 disabled:cursor-not-allowed text-white font-serif font-semibold py-2.5 sm:py-3 rounded-2xl shadow-soft transition-colors flex items-center justify-center gap-2 mt-1 text-sm sm:text-base">
      <Heart className="w-4 h-4 fill-white" />
      Submit RSVP
    </button>
  );
}