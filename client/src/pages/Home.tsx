import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import WhyWaterSection from "@/components/WhyWaterSection";
import ActionSection from "@/components/ActionSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <WhyWaterSection />
        <ActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
