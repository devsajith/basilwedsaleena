import { HeroSection } from "@/components/HeroSection";
import { WeddingDetails } from "@/components/WeddingDetails";
import { CountdownTimer } from "@/components/CountdownTimer";
import { InvitationCardSection } from "@/components/InvitationCardSection";
import { MapSection } from "@/components/MapSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <WeddingDetails />
      <CountdownTimer />
      <InvitationCardSection />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </main>
  );
}
