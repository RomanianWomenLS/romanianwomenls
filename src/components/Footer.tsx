import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 bg-foreground text-background relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">{t("site.title")}</h3>
            <p className="text-background/70 text-sm mb-4">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">{t("footer.about")}</a></li>
              <li><a href="#story" className="hover:text-background transition-colors">{t("footer.story")}</a></li>
              <li><a href="#members" className="hover:text-background transition-colors">{t("footer.members")}</a></li>
              <li><a href="#vision" className="hover:text-background transition-colors">{t("footer.vision")}</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.getInTouch")}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="mailto:hello@romanianwomenls.com" className="hover:text-background transition-colors">hello@romanianwomenls.com</a></li>
              <li><a href="https://www.linkedin.com/company/rom%C3%A2nce-%C3%AEn-life-sciences/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">LinkedIn</a></li>
              <li><a href="https://forms.gle/tFWmNy2hS7zXckkc8" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">{t("footer.formLink")}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {currentYear} {t("site.title")} - Switzerland. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
