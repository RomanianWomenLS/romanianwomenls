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
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-accent relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif text-4xl text-primary">🇨🇭</span>
                  </div>
                  <div className="ro-tricolor h-1 w-24 mx-auto rounded-full mb-4 opacity-70" />
                  <p className="font-serif text-2xl text-foreground font-semibold">
                    Est. 2025
                  </p>
                  <p className="text-muted-foreground mt-2">Zürich, Switzerland</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ro-yellow/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-ro-blue/15 rounded-lg -z-10" />
          </div>

          {/* Text Side */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Cum a început
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Uneori, comunitățile se nasc dintr-o nevoie clară. Alteori, dintr-o conversație care refuză să se termine.
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Totul a pornit în Zürich, de la o întâlnire programată pentru 30 de minute între Andreea Loredana Crețu și Andreea Stănescu, care s-a transformat într-o discuție de aproape două ore. Subiectele au curs natural: cariere în life sciences, viața profesională în Elveția, provocările și oportunitățile pentru femeile românce și, mai ales, câte femei extraordinare românce cunoaște fiecare în acest domeniu.
              </p>
              <p>
                A urmat un prânz aparent casual, care a deschis o conversație mai profundă despre sens, impact și responsabilitatea de a crea ceva mai mare. De-a lungul anilor, amândouă întâlniseră românce remarcabile în cercetare, industrie, antreprenoriat și consultanță, însă aceste conexiuni apăreau fragmentat, fără un spațiu comun care să le aducă împreună.
              </p>
              <p>
                Din această energie a prins contur ideea unei comunități: un loc în care româncele din life sciences din Elveția să se poată conecta autentic, să împărtășească experiențe, să colaboreze și să se sprijine reciproc.
              </p>
              <p>
                Astăzi, această viziune continuă să crească prin Românce in Life Sciences, construită pe încredere, curiozitate și dorința de a evolua împreună.
              </p>
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-ro-blue">50+</p>
                <p className="text-sm text-muted-foreground">Membre active</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-ro-yellow">{getMonthsSinceOctober2025()}</p>
                <p className="text-sm text-muted-foreground"> Luni de activitate</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-ro-red">4</p>
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
