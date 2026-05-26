import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const members = [
  {
    name: "Dr. Andreea Loredana Crețu",
    role: "Head BioMed Entrepreneurship Programs",
    institution: "University of Zürich",
    quote: "Această comunitate există pentru că există o nevoie reală. Când femei românce aleg să se conecteze, se creează nu doar apartenență, ci și potențial de impact.",
    linkedin: "https://www.linkedin.com/in/alcretu/",
    badge: "Founder & Operational Lead",
  },
  {
    name: "Andreea Stănescu",
    role: "Transformation Architect",
    institution: "Originate LAB",
    quote: "",
    linkedin: "https://www.linkedin.com/in/andreeastanescu-change/",
  },
  {
    name: "Anca del Rio",
    role: "Consultant Data, Artificial Intelligence and Digital Health",
    institution: "World Health Organization (WHO)",
    quote: "I live and breathe digital health, AI, and system innovation. Pe scurt, încerc să fac sistemele de sănătate un pic mai inteligente, mai echitabile și mai pregătite pentru viitor. Lucrez cu OMS și HIMSS și am colaborat, de asemenea, cu Comisia Europeană (EIT, EIT Health), organizații din domeniul sănătății și ecosisteme de inovare. My \u201Ehappy place\u201D este acolo unde sănătatea publică întâlnește tehnologia și ideile mari se transformă în impact.",
    linkedin: "https://www.linkedin.com/in/ancapdr/",
  },

  {
    name: "Ioana Bolog, MD",
    role: "Learning and Development Consultant",
    institution: "",
    quote: "Daca iti doresti sa inveti, nimeni nu te poate opri; daca nu iti doresti - nimeni nu te poate obliga",
    linkedin: "https://www.linkedin.com/in/ioana-bolog-a7863788/",
  },
  {
    name: "Roxana-Cristina Petrus",
    role: "Licensed Psychologist | Counselling & Training",
    institution: "Being Human GmbH",
    quote: "Cred cu tarie intr-o lume in care ne tratam unii pe altii cu mai multa bunatate, respect si grija, unde majoritatea oamenilor se simt conectati, gasesc sens in ceea ce traiesc si sunt impliniti prin munca lor. Merita sa contribuim impreuna la construirea acestei lumi!",
    linkedin: "https://www.linkedin.com/in/roxana-petrus-counselling-psychology/",
  },
  {
    name: "Dr. Oliviana Calin-Eller",
    role: "Patent Attorney",
    institution: "E. Blum & Co AG",
    quote: "",
    linkedin: "https://www.linkedin.com/in/oliviana-calin-eller-77a89717/",
  },
  {
    name: "Alina Gologan",
    role: "Sr. Clinical Research Manager",
    institution: "MedTech",
    quote: "Lead me not into temptation, I know the way. În afară de sarcasm, sunt o persoană ușor introvertă, ador cafeaua și călătoriile, activitățile outdoor împreună cu fetița mea, fac parte dintr-o familie bi-culturală, îmi plac oamenii ambițioși și discuțiile civilizate. Not a small-talk person.",
    linkedin: "https://www.linkedin.com/in/alinagologan/",
  },
  {
    name: "Livia Diana Neacșu",
    role: "Consilier / Terapeut",
    institution: "Consiliere pt. persoanele diagnosticate cu infertilitate; Consiliere pt. persoanele indecise dacă vor copii",
    quote: "In a world full of people who seem to know everything, passionately, based on little (often slanted) information, where certainty is often mistaken for power, what a relief it is to be in the company of someone confident enough to stay unsure; that is, perpetually curious.",
    linkedin: "https://www.linkedin.com/in/diana-l-neacsu/",
  },
];

const Members = () => {
  const { t } = useLanguage();
  return (
    <section id="members" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            {t("members.tag")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            {t("members.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("members.intro")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <Card
              key={index}
              className="group relative bg-background hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              {member.badge && (
                <div className="absolute -top-3 -right-2 z-10">
                  <div className="bg-primary text-primary-foreground text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-md shadow-lg border border-primary-foreground/10">
                    {member.badge}
                  </div>
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
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
                {member.quote && (
                  <blockquote className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      "{member.quote}"{member.attribution && ` — ${member.attribution}`}
                    </p>
                  </blockquote>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("members.more")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
