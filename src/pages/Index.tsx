import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Story from "@/components/Story";
import Members from "@/components/Members";
import Vision from "@/components/Vision";
import Oportunitati from "@/components/Oportunitati";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Story />
        <Members />
        <Vision />
        <Oportunitati />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
