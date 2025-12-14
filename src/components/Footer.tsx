const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">RWILS</h3>
            <p className="text-background/70 text-sm">
              Romanian Women in Life Sciences Switzerland - Empowering women 
              scientists and advancing research together.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#story" className="hover:text-background transition-colors">Our Story</a></li>
              <li><a href="#members" className="hover:text-background transition-colors">Members</a></li>
              <li><a href="#vision" className="hover:text-background transition-colors">Vision & Mission</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="mailto:contact@rwils.ch" className="hover:text-background transition-colors">contact@rwils.ch</a></li>
              <li><a href="#" className="hover:text-background transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>© {currentYear} Romanian Women in Life Sciences Switzerland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
