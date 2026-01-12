import { Link } from "react-router-dom";
import { 
  Monitor, 
  Server, 
  Mail, 
  Shield, 
  HardDrive, 
  MessageSquare,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT-support og service",
    description: "Professionel support til din daglige drift. Vi løser problemer hurtigt og effektivt.",
    href: "/loesninger",
  },
  {
    icon: Server,
    title: "Server- og netværksløsninger",
    description: "Stabile server- og netværksopsætninger der vokser med din virksomhed.",
    href: "/loesninger",
  },
  {
    icon: Mail,
    title: "Microsoft mail og fjernadgang",
    description: "Sikker mailløsning og fjernadgang via terminalserver – arbejd fra hvor som helst.",
    href: "/loesninger",
  },
  {
    icon: Shield,
    title: "IT-sikkerhed",
    description: "Beskyt din virksomhed mod cybertrusler med moderne sikkerhedsløsninger.",
    href: "/it-sikkerhed",
  },
  {
    icon: HardDrive,
    title: "Backup og datagendannelse",
    description: "Automatisk backup og professionel gendannelse af data fra alle medietyper.",
    href: "/datagendannelse",
  },
  {
    icon: MessageSquare,
    title: "IT-rådgivning",
    description: "Strategisk rådgivning om IT-investeringer og fremtidssikring af din infrastruktur.",
    href: "/kontakt",
  },
];

export function Services() {
  return (
    <section className="section-padding bg-surface-section">
      <div className="container-premium">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Vores kerneydelser</h2>
          <p className="text-lg text-muted-foreground">
            Alt hvad din virksomhed har brug for – samlet hos én pålidelig IT-partner.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-premium-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                <span>Læs mere</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
