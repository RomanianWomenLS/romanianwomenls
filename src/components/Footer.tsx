const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">RWILS</h3>
            <p className="text-background/70 text-sm">
             Conectăm femei românce din domeniul life sciences și sprijinim colaborarea, creșterea profesională și impactul în ecosistemul elvețian.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Linkuri rapide</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">Despre noi<</a></li>
              <li><a href="#story" className="hover:text-background transition-colors">Povestea noastră</a></li>
              <li><a href="#members" className="hover:text-background transition-colors">Membre</a></li>
              <li><a href="#vision" className="hover:text-background transition-colors">Viziune & Misiune</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ia legătura cu noi</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="mailto:contact@rwils.ch" className="hover:text-background transition-colors">contact@rwils.ch</a></li>
              <li><a href="#" className="hover:text-background transition-colors">LinkedIn</a></li>
             % <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
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
