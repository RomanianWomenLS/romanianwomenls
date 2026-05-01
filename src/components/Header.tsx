import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const aboutLinks = [
    { href: "#story", label: "Povestea Noastră" },
    { href: "#vision", label: "Viziune & Misiune" },
    { href: "#members", label: "Membre active" },
  ];

  const memberLinks: { href: string; label: string }[] = [
    // { href: "#oportunitati", label: "Oportunități" }, // hidden for now
    // { href: "/evenimente", label: "Evenimente", isRoute: true }, // hidden for now
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-serif text-xl font-semibold text-primary">
            RWILS
          </a>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Despre noi
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
                <NavigationMenuTrigger className="bg-transparent">
                  Member Area
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2 bg-background border border-border rounded-md shadow-lg">
                    {memberLinks.map((link) => (
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
                    Contact
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center">
            <Button size="sm" asChild>
              <a href="https://forms.gle/p7osfEhshFFtJHcY8" target="_blank" rel="noopener noreferrer">
                Join Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Despre noi</p>
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
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Member Area</p>
                {memberLinks.map((link) => (
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
                Contact
              </a>
              <Button size="sm" className="w-fit" asChild>
                <a href="https://forms.gle/p7osfEhshFFtJHcY8" target="_blank" rel="noopener noreferrer">
                  Join Us
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
