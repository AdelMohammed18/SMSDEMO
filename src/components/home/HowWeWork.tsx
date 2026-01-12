import { Clock, FileText, Headphones, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Headphones,
    step: "01",
    title: "Kontakt os",
    description: "Ring eller skriv til os. Vi lytter til dine udfordringer og behov.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Hurtig respons",
    description: "Vi reagerer typisk inden for 4 timer og aftaler en løsning.",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Problemet løses",
    description: "Vi løser opgaven effektivt – on-site eller via fjernsupport.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Gennemsigtig afregning",
    description: "Du betaler kun for den tid, vi bruger. Ingen overraskelser.",
  },
];

export function HowWeWork() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Sådan fungerer samarbejdet</h2>
          <p className="text-lg text-muted-foreground">
            Enkelt, effektivt og gennemsigtigt. Ingen langvarige kontrakter – bare professionel service når du har brug for det.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-accent-blue-soft flex items-center justify-center">
                    <step.icon className="w-9 h-9 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-accent-blue-soft">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium text-foreground">
              Typisk responstid: <span className="text-primary font-bold">under 4 timer</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
