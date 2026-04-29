const getMonthsSinceOctober2025 = () => {
  const start = new Date(2025, 9, 1); // October 2025 (month is 0-indexed)
  const now = new Date();
  return (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
};

const Story = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-accent">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary">🇷🇴</span>
                  </div>
                  <p className="font-serif text-2xl text-foreground font-semibold">
                    Est. 2025
                  </p>
                  <p className="text-muted-foreground mt-2">Zürich, Switzerland</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-lg -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Povestea Noastră
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Uneori, comunitățile se nasc dintr-o nevoie clară. Alteori, dintr-o conversație care refuză să se termine.
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Andreea Loredana Crețu și Andreea Stănescu s-au cunoscut în Zürich, într-o întâlnire programată inițial pentru 30 de minute. 
                Doar că discuția a continuat aproape două ore. 
                Nu pentru că ar fi fost planificat așa, ci pentru că subiectele curgeau natural: cariere în life sciences, viața profesională în Elveția, provocările și oportunitățile pentru femeile românce, și mai ales — câte femei extraordinare românce cunosc fiecare dintre ele în acest domeniu.
              </p>
              <p>
                Ce a urmat a fost o masă de prânz aparent casual, care s-a transformat rapid într-o conversație despre sens, impact și responsabilitatea de a crea ceva mai mare decât ele. 
                Amândouă aveau aceeași senzație: de-a lungul anilor întâlniseră românce remarcabile în cercetare, industrie, antreprenoriat și consultanță, dar aceste întâlniri se întâmplau fragmentat, întâmplător, fără un spațiu comun care să le aducă împreună.
              </p>
              <p>
                Din această energie a apărut o misiune clară: să creeze un loc unde româncele din life sciences din Elveția se pot conecta autentic, pot împărtăși experiențe, pot colabora și se pot sprijini reciproc.
                Așa s-a născut Românce in Life Sciences — nu ca un proiect formal, ci ca o comunitate construită pe încredere, curiozitate și dorința de a crește împreună.
              </p>
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Membre active</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">{getMonthsSinceOctober2025()}</p>
                <p className="text-sm text-muted-foreground"> Luni de activitate</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Orașe din Elveția</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
