import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Endpoint Protection",
    description: "Beskyt alle enheder mod virus, malware og ransomware med enterprise-grade sikkerhedsløsninger.",
  },
  {
    icon: Lock,
    title: "Firewall og netværkssikkerhed",
    description: "Professionelle firewall-løsninger der beskytter dit netværk mod uautoriseret adgang.",
  },
  {
    icon: Eye,
    title: "Overvågning og alarm",
    description: "24/7 overvågning af dine systemer med automatiske alarmer ved mistænkelig aktivitet.",
  },
  {
    icon: AlertTriangle,
    title: "Sikkerhedsopdateringer",
    description: "Vi holder dine systemer opdateret med de seneste sikkerhedspatches og opdateringer.",
  },
];

const benefits = [
  "Beskyttelse mod ransomware og malware",
  "Sikker mail med spam- og phishing-filter",
  "Krypteret dataoverførsel",
  "Regelmæssige sikkerhedstjek",
  "Medarbejderuddannelse i IT-sikkerhed",
  "Hændelsesrespons og genopretning",
];

const ITSecurity = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-surface-subtle to-background">
        <div className="container-premium text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue-soft text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>IT-sikkerhed</span>
          </div>
          <h1 className="mb-6">Beskyt din virksomhed</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cybertrusler er en konstant risiko. Vi hjælper dig med at beskytte dine data, systemer og forretning mod moderne trusler.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl border border-border bg-background"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-surface-section">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">Komplet sikkerhed for din virksomhed</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vi tilbyder en helhedsløsning der dækker alle aspekter af IT-sikkerhed – fra forebyggelse til hurtig respons ved hændelser.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Få en sikkerhedsvurdering
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITSecurity;
