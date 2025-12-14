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
                    Est. 2018
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
              Our Story
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              From a Small Gathering to a Thriving Network
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                In 2018, a small group of Romanian women scientists working in Switzerland's 
                life sciences sector came together over coffee in Zürich. What started as an 
                informal meetup quickly revealed a shared need: a supportive community that 
                understood the unique challenges of being both Romanian and a woman in science.
              </p>
              <p>
                Inspired by this connection, we founded the Romanian Women in Life Sciences 
                Switzerland network. Our goal was simple yet powerful: to create a platform 
                where Romanian women scientists could share experiences, support each other's 
                careers, and celebrate our contributions to Swiss science.
              </p>
              <p>
                Today, our network spans across major Swiss cities including Basel, Zürich, 
                Geneva, and Lausanne. We host regular events, mentorship programs, and 
                collaborative initiatives that continue to strengthen our community and 
                advance women in life sciences.
              </p>
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Years Strong</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary">4</p>
                <p className="text-sm text-muted-foreground">Swiss Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
