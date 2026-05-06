import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background relative">
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Românce in Life Sciences</h3>
            <p className="text-background/70 text-sm mb-4">
             Conectăm femei românce din domeniul life sciences și sprijinim colaborarea, creșterea profesională și impactul în ecosistemul elvețian.
            </p>
            {/* <Button asChild variant="secondary" size="sm">
              <Link to="/evenimente">
                <Calendar className="mr-2 h-4 w-4" />
                Vezi evenimente
              </Link>
            </Button> */}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Linkuri rapide</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">Despre noi</a></li>
              <li><a href="#story" className="hover:text-background transition-colors">Povestea noastră</a></li>
              <li><a href="#members" className="hover:text-background transition-colors">Membre</a></li>
              <li><a href="#vision" className="hover:text-background transition-colors">Viziune & Misiune</a></li>
              {/* <li><Link to="/evenimente" className="hover:text-background transition-colors">Evenimente</Link></li> */}
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ia legătura cu noi</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="mailto:info@romanceinlifesciences.ch" className="hover:text-background transition-colors">info@romanceinlifesciences.ch</a></li>
              <li><a href="https://www.linkedin.com/company/rom%C3%A2nce-%C3%AEn-life-sciences/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">LinkedIn</a></li>
              <li><a href="https://forms.gle/tFWmNy2hS7zXckkc8" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">Formular de înscriere</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {currentYear} Românce in Life Sciences - Elveția. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
