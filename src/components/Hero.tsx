import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Romanian Women in Life Sciences Switzerland hero background"
          width={1920}
          height={1088}
          className="w-full h-full object-cover object-[42%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/65 to-background/85" />
      </div>

      <div className="container relative z-10 px-4 pt-20 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-accent text-accent-foreground rounded-full">
            {t("hero.badge")}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t("hero.title1")} <br />
            <span className="text-primary">{t("hero.title2")}</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground font-medium max-w-2xl mx-auto mb-8">
            {t("hero.subtitle")}
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="font-medium" asChild>
              <a href="https://forms.gle/p7osfEhshFFtJHcY8" target="_blank" rel="noopener noreferrer">
                {t("hero.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>

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
