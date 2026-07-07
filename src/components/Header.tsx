import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const aboutLinks = [
    { href: "#story", label: t("nav.story") },
    { href: "#vision", label: t("nav.vision") },
    { href: "#members", label: t("nav.members") },
  ];

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <button
      onClick={() => setLang(lang === "ro" ? "en" : "ro")}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors ${className}`}
      aria-label="Toggle language"
    >
      <Globe size={14} />
      <span className={lang === "ro" ? "text-primary" : ""}>RO</span>
      <span className="text-muted-foreground">/</span>
      <span className={lang === "en" ? "text-primary" : ""}>EN</span>
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-serif text-xl font-semibold text-primary">
            {t("site.title")}
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  {t("nav.about")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2 bg-background border border-border rounded-md shadow-lg">
                    {aboutLinks.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <a
                            href={link.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                          >
                            {link.label}
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-4 py-2"
                  >
                    {t("nav.contact")}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center gap-3">
            <LangToggle />
            <Button size="sm" asChild>
              <a href="#join">
                {t("join.title")}
              </a>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t("nav.about")}</p>
                {aboutLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors pl-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </a>
              <Button size="sm" className="w-fit" asChild>
                <a href="#join" onClick={() => setIsMenuOpen(false)}>
                  {t("join.title")}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
