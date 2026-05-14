import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              {t("contact.tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t("contact.intro")}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:hello@romanianwomenls.com" className="text-foreground hover:text-primary transition-colors">
                    hello@romanianwomenls.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {t("contact.formNote")}
            </p>
            <Button size="lg" asChild>
              <a href="https://forms.gle/tFWmNy2hS7zXckkc8" target="_blank" rel="noopener noreferrer">
                {t("contact.formCta")}
              </a>
            </Button>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">{t("contact.followUs")}</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/rom%C3%A2nce-%C3%AEn-life-sciences/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
