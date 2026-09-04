import { useState, useRef } from "react";
import CoverSection from "./components/CoverSection";
import SpecialInvitation from "./components/SpecialInvitation";
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const invitationRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    if (!opened) {
      setOpened(true);
      setTimeout(() => {
        invitationRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setOpened(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="min-h-screen bg-blush-100 py-0 sm:py-8">
      <div className="max-w-md mx-auto bg-blush-50 sm:shadow-soft sm:rounded-3xl overflow-hidden">
        <CoverSection onToggle={handleToggle} isOpen={opened} />

        {opened && (
          <div ref={invitationRef} className="animate-fade-in">
            <SpecialInvitation />
            <EventDetails />
            <RSVPForm />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}