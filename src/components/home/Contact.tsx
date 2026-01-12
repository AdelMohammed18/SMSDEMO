import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Henrik Jensen",
    role: "Direktør",
    phone: "+45 57 83 00 82",
    email: "hj@sms-online.dk",
  },
  {
    name: "Michael Sørensen",
    role: "Teknisk chef",
    phone: "+45 57 83 00 82",
    email: "ms@sms-online.dk",
  },
];

export function Contact() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <div>
            <h2 className="mb-4">Klar til at tale?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Vi er klar til at hjælpe dig med din IT. Ring til os, eller send en mail – vi vender hurtigt tilbage.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <a
                href="tel:+4557830082"
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/20 hover:shadow-premium-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div className="font-semibold text-foreground">57 83 00 82</div>
                </div>
              </a>

              <a
                href="mailto:post@sms-online.dk"
                className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/20 hover:shadow-premium-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground">post@sms-online.dk</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Åbningstider</div>
                  <div className="font-semibold text-foreground">Man-Fre: 08:00 - 16:00</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adresse</div>
                  <div className="font-semibold text-foreground">Sorø, Danmark</div>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/kontakt">
                Kontakt os nu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right side - Team */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Tal med vores team</h3>
            <p className="text-muted-foreground mb-8">
              Hos os får du personlig betjening af erfarne IT-folk, der kender dig og din virksomhed.
            </p>

            <div className="space-y-4">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="p-6 rounded-2xl bg-background border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent-blue-soft flex items-center justify-center text-primary font-bold text-lg">
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{person.name}</div>
                      <div className="text-sm text-muted-foreground mb-3">{person.role}</div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <a
                          href={`tel:${person.phone.replace(/\s/g, "")}`}
                          className="text-primary hover:underline"
                        >
                          {person.phone}
                        </a>
                        <a
                          href={`mailto:${person.email}`}
                          className="text-primary hover:underline"
                        >
                          {person.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
