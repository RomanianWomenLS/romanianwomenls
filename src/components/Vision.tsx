import { Eye, Compass, CheckCircle } from "lucide-react";

const Vision = () => {
  const missionPoints = [
    "Conectează femei românce din toate domeniile life sciences",
    "Sprijină creșterea profesională și personală",
    "Facilitează colaborări, mentorat și vizibilitate",
    "Oferă inspirație, povești și suport reciproc",
    "Contribuie la reprezentarea și integrarea profesională a femeilor românce în Elveția",
  ];

  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Viziune & Misiune
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
            Construim conexiuni care contează
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <div className="relative p-8 rounded-xl bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-4">Viziunea noastră</h3>
              
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Să devenim principala rețea a femeilor românce din life sciences din Elveția, recunoscută pentru conexiune, colaborare, mentorat și vizibilitate — un pod real între ecosistemele științifice, antreprenoriale și de politici publice din România și Elveția.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative p-8 rounded-xl bg-card border border-border overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 ro-tricolor-h" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-accent-foreground" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Să construim un spațiu care:</h3>
              
              <ul className="space-y-3">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
