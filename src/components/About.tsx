import { Users, Target, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Comunitate profesionala",
    description: "O retea de sprijin a femeilor românce care studiaza si lucreaza in domeniul life sciences in Elvetia.",
  },
  {
    icon: Target,
    title: "Dezvoltare profesionala",
    description: "Mentorat, ateliere si resurse dedicate evolutiei carierei tale in life sciences.",
  },
  {
    icon: Heart,
    title: "Conexiune culturala",
    description: "Ne onoram identitatea romaneasca, fiind in acelasi timp parte activa a ecosistemului elvetian de life sciences.",
  },
  {
    icon: Sparkles,
    title: "Colaborare si inovatie",
    description: "Incurajam colaborari interdisciplinare si contributii relevante la cercetare, inovatie si antreprenoriat in life sciences.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Cine suntem
          </h2>
          <p className="text-muted-foreground text-lg">
          Suntem o comunitate de femei românce unite de interesul pentru life sciences, care contribuie din roluri diverse la ecosistemul elvețian — de la cercetare și industrie la antreprenoriat, consultanță, drept și finanțe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
