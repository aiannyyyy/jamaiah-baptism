import HeroBanner from "./components/HeroBanner";
import EventDetails from "./components/EventDetails";
import RSVPContacts from "./components/RSVPContacts";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-blush-100 py-0 sm:py-8">
      <div className="max-w-md mx-auto bg-blush-50 sm:shadow-soft sm:rounded-3xl overflow-hidden">
        <HeroBanner />
        <EventDetails />
        <RSVPContacts />
        <RSVPForm />
        <Footer />
      </div>
    </div>
  );
}