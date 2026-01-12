import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Server, 
  HardDrive, 
  Battery, 
  Shield, 
  Monitor, 
  Cloud,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const solutions = [
  {
    icon: Server,
    title: "Serveropsætning",
    description: "Professionel opsætning og konfiguration af servere tilpasset din virksomheds behov. Vi sikrer optimal ydeevne og sikkerhed.",
    features: ["Windows Server", "Linux servere", "Virtualisering", "Active Directory"],
  },
  {
    icon: HardDrive,
    title: "Backup-løsninger",
    description: "Automatiske backup-løsninger der sikrer dine data. Vi opsætter både lokal og cloud-baseret backup.",
    features: ["Daglig backup", "Cloud backup", "Hurtig gendannelse", "Krypteret opbevaring"],
  },
  {
    icon: Battery,
    title: "UPS og batteribackup",
    description: "Beskyt dit udstyr mod strømsvigt. UPS-systemer holder dine servere kørende og sikrer kontrolleret nedlukning.",
    features: ["Strømstabilisering", "Nødstrøm", "Automatisk nedlukning", "Fjernmonitorering"],
  },
  {
    icon: Shield,
    title: "Antivirus og sikkerhed",
    description: "Enterprise-grade sikkerhedsløsninger der beskytter mod virus, malware og ransomware.",
    features: ["Endpoint protection", "Firewall", "Spamfilter", "Web-filter"],
  },
  {
    icon: Monitor,
    title: "Arbejdsstationer",
    description: "Komplette arbejdsstationsløsninger inklusiv hardware, software og opsætning.",
    features: ["PC og laptop", "Skærme og periferi", "Software installation", "Brugeropsætning"],
  },
  {
    icon: Cloud,
    title: "Microsoft 365",
    description: "Fuldt administrerede Microsoft 365-løsninger med mail, fjernadgang og samarbejdsværktøjer.",
    features: ["Exchange mail", "Teams", "SharePoint", "OneDrive"],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-surface-subtle to-background">
        <div className="container-premium text-center">
          <h1 className="mb-6">IT-løsninger der virker</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fra servere og netværk til backup og sikkerhed. Vi leverer komplette IT-løsninger tilpasset din virksomheds behov.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="p-8 rounded-2xl border border-border bg-background hover:shadow-premium-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-surface-section">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Klar til at opgradere din IT?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Kontakt os for en uforpligtende snak om dine behov.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/kontakt">
              Kontakt os
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
