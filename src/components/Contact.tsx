import { Mail, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Ia legătura cu noi
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Alătură-te comunității noastre
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Fie că ești interesată să devii membră, să colaborezi cu noi sau pur și simplu să afli mai multe despre rețeaua noastră, ne-ar face plăcere să te cunoaștem.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Scrie-ne la</p>
                  <a href="mailto:hello@romanianwomenls.com" className="text-foreground hover:text-primary transition-colors">
                    hello@romanianwomenls.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              Completează formularul și te vom contacta în cel mai scurt timp.
            </p>
            <Button size="lg" asChild>
              <a href="https://forms.gle/tFWmNy2hS7zXckkc8" target="_blank" rel="noopener noreferrer">
                Deschide formularul
              </a>
            </Button>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Urmărește-ne pe Linkedin</p>
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

          {/* Contact CTA — commented out, content moved to left column
          <div className="bg-background p-8 rounded-xl border border-border flex flex-col items-center justify-center text-center gap-6">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Ia legătura cu noi
            </h3>
            <p className="text-muted-foreground">
              Completează formularul și te vom contacta în cel mai scurt timp.
            </p>
            <Button size="lg" asChild>
              <a href="https://forms.gle/tFWmNy2hS7zXckkc8" target="_blank" rel="noopener noreferrer">
                Deschide formularul
              </a>
            </Button>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
