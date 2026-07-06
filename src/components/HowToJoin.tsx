import { ClipboardCheck, Mail, Bell, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: ClipboardCheck, key: "join.step1" },
  { icon: Mail, key: "join.step2" },
  { icon: Bell, key: "join.step3" },
  { icon: MessageCircle, key: "join.step4" },
] as const;

const HowToJoin = () => {
  const { t } = useLanguage();

  return (
    <section id="join" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t("join.tag")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            {t("join.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("join.intro")}
          </p>
        </div>

        <div className="relative">
          {/* connecting line - desktop only */}
          <div className="hidden md:block absolute top-12 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-border" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* step number + icon bubble */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm mb-6">
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center border-2 border-background">
                      {index + 1}
                    </div>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="font-semibold text-foreground mb-2">
                    {t(`${step.key}.title` as any)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px]">
                    {t(`${step.key}.desc` as any)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-14">
          <Button size="lg" asChild>
            <a
              href="https://forms.gle/p7osfEhshFFtJHcY8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("join.cta")}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t("join.ctaNote")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
