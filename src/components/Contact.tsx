import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Scrie-ne la </p>
                  <a href="mailto:contact@rwils.ch" className="text-foreground hover:text-primary transition-colors">
                    contact@rwils.ch
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ne găsești în</p>
                  <p className="text-foreground">Zürich, Switzerland</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Urmărește-ne pe Linkedin</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/110125288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-xl border border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Ia legătura cu noi
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nume
                  </label>
                  <Input id="name" placeholder="Numele tău" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="adresa@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subiect
                </label>
                <Input id="subject" placeholder="Cum te putem ajuta?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  placeholder="Spune-ne câteva lucruri despre tine și interesul tău pentru Românce in Life Sciences"
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full">
                Trimite mesajul
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
