import { useLanguage } from "@/contexts/LanguageContext";

const getMonthsSinceOctober2025 = () => {
  const start = new Date(2025, 9, 1);
  const now = new Date();
  return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
};

const Story = () => {
  const { t } = useLanguage();
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-accent relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary">🇨🇭</span>
                  </div>
                  <div className="bg-primary h-1 w-24 mx-auto rounded-full mb-4 opacity-70" />
                  <p className="font-serif text-2xl text-foreground font-semibold">
                    {t("story.est")}
                  </p>
                  <p className="text-muted-foreground mt-2">Zürich, Switzerland</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/15 rounded-lg -z-10" />
          </div>

          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {t("story.tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {t("story.title")}
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <p>{t("story.p3")}</p>
              <p>{t("story.p4")}</p>
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">{t("story.stat1")}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">{getMonthsSinceOctober2025()}</p>
                <p className="text-sm text-muted-foreground">{t("story.stat2")}</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">{t("story.stat3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
