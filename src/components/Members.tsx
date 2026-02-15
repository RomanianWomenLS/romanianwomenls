import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const members = [
  {
    name: "Dr. Andreea Loredana Crețu",
    role: "Head BioMed Entrepreneurship Programs",
    institution: "University of Zürich",
    quote: "Această comunitate există pentru că există o nevoie reală. Când femei românce aleg să se conecteze, se creează nu doar apartenență, ci și potențial de impact.",
    linkedin: "https://www.linkedin.com/in/alcretu/",
  },
  {
    name: "Andreea Stănescu",
    role: "Transformation Architect",
    institution: "Originate LAB",
    quote: "quote here.",
    linkedin: "https://www.linkedin.com/in/andreeastanescu-change/",
  },
  {
    name: "Dr. Anca Denise Ciuta",
    role: "Life Sciences Consultant",
    institution: "Windrose Consulting Group",
    quote: "quote here",
    linkedin: "https://www.linkedin.com/in/aciuta/",
  },
  {
    name: "Dr. Irina Lazăr-Conteș",
    role: "Regulatory Affairs Manager",
    institution: "GSK",
    quote: "quote here",
    linkedin: "https://www.linkedin.com/in/irinalazarcontes/",
  },
  {
    name: "Anca del Rio",
    role: "Consultant Data, AI and Digital Health",
    institution: "World Health Organization (WHO)",
    quote: "quote here",
    linkedin: "https://www.linkedin.com/in/ancapdr/",
  },
  {
    name: "Alexandra Rogojina",
    role: "PhD Candidate Neuroimmunology",
    institution: "University of Zürich",
    quote: "quote here",
    linkedin: "https://www.linkedin.com/in/alexandra-rogojina/",
  },
  {
    name: "Ioana Bolog, MD",
    role: "Learning and Development Consultant",
    institution: "",
    quote: "Daca iti doresti sa inveti, nimeni nu te poate opri; daca nu iti doresti - nimeni nu te poate obliga",
    linkedin: "",
  },
];

const Members = () => {
  return (
    <section id="members" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Membrele noastre
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Cunoaște comunitatea noastră
          </h2>
          <p className="text-muted-foreground text-lg">
            Membrele noastre activează în roluri diverse în cadrul ecosistemului life sciences din Elveția, de la universități și institute de cercetare de top la companii farmaceutice, biotech și organizații conexe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card
              key={index}
              className="group bg-background hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-lg font-semibold text-accent-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.institution}</p>
                  </div>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin size={18} />
                    </a>
                  ) : (
                    <span className="text-muted-foreground/50">
                      <Linkedin size={18} />
                    </span>
                  )}
                </div>
                <blockquote className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    "{member.quote}"
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Și multe alte profesioniste talentate din domeniul life sciences din întreaga Elveție…
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
