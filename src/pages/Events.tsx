import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  price: string;
  registrationUrl: string;
  isPast: boolean;
  category: string;
}

const events: Event[] = [
  {
    id: "1",
    title: "Networking Brunch - Zurich",
    date: "25 Ianuarie 2025",
    time: "10:00 - 13:00",
    location: "Zurich, Elveția",
    description: "Alătură-te pentru un brunch de networking cu profesioniste din domeniul life sciences. O oportunitate perfectă pentru a face noi conexiuni.",
    price: "CHF 35",
    registrationUrl: "#",
    isPast: false,
    category: "Networking"
  },
  {
    id: "2",
    title: "Women in Pharma Summit",
    date: "15 Februarie 2025",
    time: "14:00 - 18:00",
    location: "Basel, Elveția",
    description: "Summit dedicat femeilor din industria farmaceutică. Prezentări, panel discussions și sesiuni de networking.",
    price: "CHF 75",
    registrationUrl: "#",
    isPast: false,
    category: "Conferință"
  },
  {
    id: "3",
    title: "Career Development Workshop",
    date: "8 Martie 2025",
    time: "09:00 - 12:00",
    location: "Geneva, Elveția",
    description: "Workshop interactiv despre dezvoltarea carierei în life sciences. Strategii și sfaturi practice de la lideri din industrie.",
    price: "CHF 50",
    registrationUrl: "#",
    isPast: false,
    category: "Workshop"
  },
  {
    id: "4",
    title: "Biotech Networking Evening",
    date: "22 Martie 2025",
    time: "18:00 - 21:00",
    location: "Lausanne, Elveția",
    description: "O seară de networking dedicată sectorului biotech. Aperitive și băuturi incluse în preț.",
    price: "CHF 45",
    registrationUrl: "#",
    isPast: false,
    category: "Networking"
  }
];

const Events = () => {
  const upcomingEvents = events.filter(e => !e.isPast);
  const pastEvents = events.filter(e => e.isPast);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Evenimente
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participă la evenimentele noastre de networking și dezvoltare profesională. 
              Conectează-te cu femei extraordinare din industria life sciences.
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="h-7 w-7 text-primary" />
              Evenimente viitoare
            </h2>
            
            {upcomingEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {event.category}
                          </Badge>
                          <CardTitle className="font-serif text-xl">{event.title}</CardTitle>
                        </div>
                        <Badge variant="outline" className="text-primary border-primary whitespace-nowrap">
                          {event.price}
                        </Badge>
                      </div>
                      <CardDescription className="flex flex-col gap-1 mt-2">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                          Înscrie-te
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">Nu există evenimente programate momentan. Revino curând!</p>
              </Card>
            )}
          </section>

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Evenimente trecute
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="border-border opacity-70">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {event.category}
                      </Badge>
                      <CardTitle className="font-serif text-lg">{event.title}</CardTitle>
                      <CardDescription>
                        {event.date} • {event.location}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
