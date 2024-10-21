import CTA from "@/components/pages/home/CTA";
import Features from "@/components/pages/home/Features";
import Footer from "@/components/pages/home/Footer";
import Hero from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="bg-primary-foreground">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
