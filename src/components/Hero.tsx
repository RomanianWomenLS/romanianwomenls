import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Romanian Women in Life Sciences Switzerland hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent text-accent-foreground rounded-full">
            Empowering Romanian Women in Life Sciences
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Romanian Women in <br />
            <span className="text-primary">Life Sciences</span> Switzerland
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Românce in Life Sciences este o comunitate dedicată femeilor românce din domeniul life sciences din Elveția. Obiectivul nostru este să construim un spațiu de încredere, colaborare și vizibilitate, care să conecteze ecosistemele științifice, academice, industriale și antreprenoriale din România și Elveția.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
