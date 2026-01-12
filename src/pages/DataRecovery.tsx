import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  HardDrive, 
  Database,
  Layers,
  CheckCircle,
  ArrowRight,
  AlertCircle
} from "lucide-react";

const services = [
  {
    icon: HardDrive,
    title: "HDD-gendannelse",
    description: "Professionel datagendannelse fra harddiske – uanset om skaden er mekanisk, logisk eller forårsaget af strømsvigt.",
    scenarios: ["Mekanisk fejl", "Logisk korruption", "Slettet data", "Formateret disk"],
  },
  {
    icon: Database,
    title: "SSD-gendannelse",
    description: "Specialiseret gendannelse fra SSD-drev. Vi arbejder med alle producenter og controllertyper.",
    scenarios: ["Controller-fejl", "NAND-fejl", "Firmware-problemer", "Wear-leveling issues"],
  },
  {
    icon: Layers,
    title: "RAID-gendannelse",
    description: "Ekspert-gendannelse fra alle RAID-konfigurationer. Vi rekonstruerer arrays og gendanner data.",
    scenarios: ["RAID 0, 1, 5, 6, 10", "NAS-systemer", "Server-RAID", "Degraderet array"],
  },
];

const process = [
  {
    step: "1",
    title: "Gratis vurdering",
    description: "Send eller aflever dit medie. Vi laver en gratis diagnose og giver dig et tilbud.",
  },
  {
    step: "2",
    title: "Godkendelse",
    description: "Du godkender tilbuddet før vi går i gang. Ingen overraskelser.",
  },
  {
    step: "3",
    title: "Gendannelse",
    description: "Vores eksperter arbejder på at gendanne dine data med professionelt udstyr.",
  },
  {
    step: "4",
    title: "Levering",
    description: "Du modtager dine gendannede data på et nyt medie.",
  },
];

const DataRecovery = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-surface-subtle to-background">
        <div className="container-premium text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue-soft text-primary text-sm font-medium mb-6">
            <HardDrive className="w-4 h-4" />
            <span>Datagendannelse</span>
          </div>
          <h1 className="mb-6">Gendannelse af tabte data</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Har du mistet vigtige data? Vi har mere end 30 års erfaring med at gendanne data fra alle typer medier.
          </p>
        </div>
      </section>

      {/* Alert */}
      <section className="py-8">
        <div className="container-premium">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-amber-50 border border-amber-200">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">Vigtig råd</h4>
              <p className="text-amber-700">
                Stop med at bruge enheden med det samme. Jo mindre du bruger den, jo større er chancen for fuld gendannelse. Kontakt os med det samme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="mb-4">Vores ekspertiser</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vi gendanner data fra alle typer lagringsmedier med høj succesrate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border border-border bg-background"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.scenarios.map((scenario) => (
                    <div key={scenario} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface-section">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="mb-4">Sådan foregår processen</h2>
            <p className="text-lg text-muted-foreground">
              En enkel og gennemsigtig proces fra start til slut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">
                Kontakt os nu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataRecovery;
