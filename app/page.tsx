import Image from "next/image";
import AppToolbar from "./components/toolbar/AppToolbar";
import HeroSection from "./components/hero/hero"
import AdvertSection from "./components/advert/advert";
import ValueSection from "./components/value/value";
import CurriculumSection from "./components/Curriculum/curriculum";
import ResearchSection from "./components/research/research";
import PricingSection from "./components/pricing/pricing";
import FaqsSection from "./components/faqs/faqs";
import AppFooter from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col">
        <HeroSection />
        <AdvertSection />
        <ValueSection />
        <CurriculumSection />
        <ResearchSection />
        <PricingSection />
        <FaqsSection />
      </main>
    </div>
  );
}
