import { Eye, Compass, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Vision = () => {
  const { t } = useLanguage();
  const missionPoints = [
    t("vision.m1"),
    t("vision.m2"),
    t("vision.m3"),
    t("vision.m4"),
    t("vision.m5"),
  ];

  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t("vision.tag")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
            {t("vision.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative p-8 rounded-xl bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>

              <h3 className="font-serif text-2xl font-bold mb-4">{t("vision.visionTitle")}</h3>

              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                {t("vision.visionText")}
              </p>
            </div>
          </div>

          <div className="relative p-8 rounded-xl bg-card border border-border overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-accent-foreground" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                {t("vision.missionTitle")}
              </h3>

              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
