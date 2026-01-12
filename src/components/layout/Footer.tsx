import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const footerLinks = {
  services: [{
    name: "IT-support og service",
    href: "/loesninger"
  }, {
    name: "Server- og netværksløsninger",
    href: "/loesninger"
  }, {
    name: "IT-sikkerhed",
    href: "/it-sikkerhed"
  }, {
    name: "Backup og datagendannelse",
    href: "/datagendannelse"
  }],
  company: [{
    name: "Om os",
    href: "/#om-os"
  }, {
    name: "Kontakt",
    href: "/kontakt"
  }, {
    name: "Online Support",
    href: "/online-support"
  }, {
    name: "Privatlivspolitik",
    href: "/privatlivspolitik"
  }]
};
export function Footer() {
  return <footer className="bg-surface-section border-t border-border">
      <div className="container-premium section-padding-sm">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand and contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                SMS
              </div>
              
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Pålidelig IT-partner for virksomheder i mere end 34 år. Vi leverer stabil drift, sikkerhed og hurtig support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ydelser</h4>
            <ul className="space-y-3">
              {footerLinks.services.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Virksomhed</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="tel:57821444" className="text-sm text-foreground hover:text-primary transition-colors">
                    57 82 14 44
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:post@sms-online.dk" className="text-sm text-foreground hover:text-primary transition-colors">
                    post@sms-online.dk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Storgade 24C, 4180 Sorø
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Hverdage 8:30–16:30
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sorø Micro Soft. Alle rettigheder forbeholdes.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privatlivspolitik" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privatlivspolitik
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}