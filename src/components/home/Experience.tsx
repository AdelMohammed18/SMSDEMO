import { Award, Building2, Users2, Handshake } from "lucide-react";

const stats = [
  { value: "34+", label: "Års erfaring", icon: Award },
  { value: "500+", label: "Virksomheder hjulpet", icon: Building2 },
  { value: "10.000+", label: "Sager løst", icon: Users2 },
  { value: "98%", label: "Kundetilfredshed", icon: Handshake },
];

export function Experience() {
  return (
    <section id="om-os" className="section-padding bg-foreground text-background">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-background mb-6">
              34 års erfaring i at holde virksomheder kørende
            </h2>
            <div className="space-y-6 text-lg opacity-80 leading-relaxed">
              <p>
                Siden 1990 har Sorø Micro Soft hjulpet virksomheder i hele Danmark med at få deres IT til at fungere. Ikke med flotte ord, men med stabil drift og hurtig hjælp når det virkelig gælder.
              </p>
              <p>
                Vi kender de udfordringer, små og mellemstore virksomheder står overfor. Derfor tilbyder vi løsninger, der er lige så praktiske som de er sikre – uden unødvendig kompleksitet eller overflødige omkostninger.
              </p>
              <p>
                Vores tilgang er enkel: Vi tager ansvar for din IT, så du kan tage dig af din forretning.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-background/5 border border-background/10"
              >
                <stat.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-4xl font-bold text-background mb-1">{stat.value}</div>
                <div className="text-sm opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
