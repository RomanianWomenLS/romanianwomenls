import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const members = [
  {
    name: "Dr. Maria Ionescu",
    role: "Molecular Biologist",
    institution: "ETH Zürich",
    quote: "This network has been instrumental in my career growth and finding collaborators.",
  },
  {
    name: "Dr. Elena Popa",
    role: "Pharmacologist",
    institution: "Novartis, Basel",
    quote: "Being part of RWILS means having a second family in Switzerland.",
  },
  {
    name: "Dr. Ana Moldovan",
    role: "Neuroscientist",
    institution: "EPFL Lausanne",
    quote: "The mentorship I received here shaped my path to becoming a group leader.",
  },
  {
    name: "Dr. Cristina Dumitrescu",
    role: "Biotech Entrepreneur",
    institution: "Geneva Biotech Hub",
    quote: "From researcher to founder, RWILS supported me every step of the way.",
  },
  {
    name: "Dr. Ioana Radu",
    role: "Immunologist",
    institution: "Roche, Basel",
    quote: "Connecting with fellow Romanian scientists enriches both my work and life.",
  },
  {
    name: "Dr. Raluca Stanescu",
    role: "Computational Biologist",
    institution: "University of Basel",
    quote: "The workshops and events have opened doors I never knew existed.",
  },
];

const Members = () => {
  return (
    <section id="members" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Members
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Meet Our Community
          </h2>
          <p className="text-muted-foreground text-lg">
            Our members work at the forefront of life sciences across Switzerland's 
            top universities, research institutes, and pharmaceutical companies.
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
                  <button
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </button>
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
            And many more talented scientists across Switzerland...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Members;
