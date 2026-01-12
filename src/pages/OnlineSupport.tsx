import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Download,
  Headphones,
  Clock,
  Shield,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Hurtig hjælp",
    description: "Vi kan ofte løse dit problem inden for minutter via fjernsupport.",
  },
  {
    icon: Shield,
    title: "Sikker forbindelse",
    description: "Krypteret forbindelse sikrer at dine data forbliver private.",
  },
  {
    icon: Monitor,
    title: "Ingen installation",
    description: "Du skal blot klikke på linket – ingen permanent software installation.",
  },
];

const OnlineSupport = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-surface-subtle to-background">
        <div className="container-premium text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue-soft text-primary text-sm font-medium mb-6">
            <Headphones className="w-4 h-4" />
            <span>Online Support</span>
          </div>
          <h1 className="mb-6">Fjernsupport til kunder</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Er du eksisterende kunde? Vi kan hjælpe dig med det samme via vores sikre fjernsupport-løsning.
          </p>
        </div>
      </section>

      {/* Support section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="p-8 md:p-12 rounded-3xl bg-surface-section border border-border text-center">
            <div className="w-20 h-20 rounded-3xl bg-accent-blue-soft flex items-center justify-center mx-auto mb-8">
              <Monitor className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="mb-4">Start fjernsupport</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Klik på knappen nedenfor for at downloade vores sikre fjernsupport-software. 
              Vores tekniker vil guide dig igennem processen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="https://download.teamviewer.com/download/TeamViewerQS.exe" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download TeamViewer
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Ring til os på <a href="tel:+4557830082" className="text-primary font-medium hover:underline">57 83 00 82</a> når du har downloadet programmet.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding-sm">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue-soft flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="section-padding bg-surface-section">
        <div className="container-narrow">
          <h2 className="text-center mb-12">Sådan fungerer det</h2>
          
          <div className="space-y-6">
            {[
              "Download TeamViewer-programmet ved at klikke på knappen ovenfor",
              "Kør programmet – du behøver ikke at installere det permanent",
              "Ring til os på 57 83 00 82 og oplys dit ID og password fra TeamViewer",
              "Vores tekniker opretter forbindelse og hjælper dig med dit problem",
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </div>
                <p className="text-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-background border border-border">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">100% sikker forbindelse</h4>
                <p className="text-muted-foreground text-sm">
                  Al kommunikation er krypteret. Forbindelsen lukkes automatisk når supporten er afsluttet, 
                  og vi har ingen adgang uden dit samtykke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineSupport;
