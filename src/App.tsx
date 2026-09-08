import { useState } from "react";
import CoverSection from "./components/CoverSection";
import SpecialInvitation from "./components/SpecialInvitation";
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

type Step = "cover" | "invitation" | "rsvp";

export default function App() {
  const [step, setStep] = useState<Step>("cover");

  return (
    <div className="min-h-screen bg-blush-100 py-0 sm:py-8">
      <div className="max-w-md mx-auto bg-blush-50 sm:shadow-soft sm:rounded-3xl overflow-hidden">
        {step === "cover" && (
          <CoverSection onOpen={() => setStep("invitation")} />
        )}

        {step === "invitation" && (
          <div className="animate-fade-in">
            <SpecialInvitation
              onAccept={() => setStep("rsvp")}
              onBack={() => setStep("cover")}
            />
          </div>
        )}

        {step === "rsvp" && (
          <div className="animate-fade-in">
            <BackButton onClick={() => setStep("invitation")} />
            <EventDetails />
            <RSVPForm />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="px-4 sm:px-5 pt-4 sm:pt-6 pb-2">
      <button
        onClick={onClick}
        className="flex items-center gap-1.5 text-blush-500 hover:text-blush-600 font-serif text-xs sm:text-sm transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back
      </button>
    </div>
  );
}