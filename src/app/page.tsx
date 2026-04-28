import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-neuron-dark text-white min-h-screen selection:bg-neuron-purple selection:text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Industries />
      <ContactCTA />
    </main>
  );
}
