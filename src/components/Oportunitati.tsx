import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Unlock } from "lucide-react";

const Oportunitati = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "test" && password === "test") {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Credențiale invalide");
    }
  };

  return (
    <section id="oportunitati" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Exclusiv
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Oportunități
          </h2>
        </div>

        {!isUnlocked ? (
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-6">
                Această secțiune este protejată. Introduceți credențialele pentru acces.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Utilizator"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-center"
                />
                <Input
                  type="password"
                  placeholder="Parolă"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center"
                />
                {error && <p className="text-destructive text-sm">{error}</p>}
                <Button type="submit" className="w-full">
                  Accesează
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-2 text-primary mb-6">
                <Unlock className="w-5 h-5" />
                <span className="text-sm font-medium">Acces acordat</span>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  Bine ați venit în secțiunea de oportunități exclusive pentru membrii RWILS.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Poziții deschise</h3>
                    <p className="text-sm text-muted-foreground">Coming soon...</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Colaborări</h3>
                    <p className="text-sm text-muted-foreground">Coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Oportunitati;
