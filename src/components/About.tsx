import { Users, Target, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Community",
    description: "A supportive network of Romanian women scientists working across Switzerland's leading institutions.",
  },
  {
    icon: Target,
    title: "Career Growth",
    description: "Mentorship programs, workshops, and resources to advance your scientific career.",
  },
  {
    icon: Heart,
    title: "Cultural Connection",
    description: "Celebrating our Romanian heritage while embracing our Swiss scientific community.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Fostering collaboration and groundbreaking research across life science disciplines.",
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
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg">
            We are a dynamic community of Romanian women making significant contributions 
            to life sciences research and innovation across Switzerland. From biotech startups 
            to world-renowned research institutions, our members are shaping the future of science.
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
