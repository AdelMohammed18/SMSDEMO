import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";
import { useState } from "react";

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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    window.location.href = `mailto:post@sms-online.dk?subject=Henvendelse fra ${formData.name}&body=${formData.message}`;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-surface-subtle to-background">
        <div className="container-premium text-center">
          <h1 className="mb-6">Kontakt os</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vi er klar til at hjælpe dig med din IT. Ring til os, send en mail, eller udfyld formularen nedenfor.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send os en besked</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Virksomhed
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Besked *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  <Send className="w-5 h-5" />
                  Send besked
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Kontaktoplysninger</h2>
              
              <div className="space-y-6 mb-10">
                <a
                  href="tel:+4557830082"
                  className="flex items-center gap-4 p-5 rounded-xl bg-surface-section border border-border hover:border-primary/20 hover:shadow-premium-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Telefon</div>
                    <div className="font-semibold text-foreground text-lg">57 83 00 82</div>
                  </div>
                </a>

                <a
                  href="mailto:post@sms-online.dk"
                  className="flex items-center gap-4 p-5 rounded-xl bg-surface-section border border-border hover:border-primary/20 hover:shadow-premium-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold text-foreground text-lg">post@sms-online.dk</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-xl bg-surface-section border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Åbningstider</div>
                    <div className="font-semibold text-foreground text-lg">Man-Fre: 08:00 - 16:00</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-xl bg-surface-section border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue-soft flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Adresse</div>
                    <div className="font-semibold text-foreground text-lg">Sorø, Danmark</div>
                  </div>
                </div>
              </div>

              {/* Team */}
              <h3 className="text-xl font-semibold mb-4">Vores team</h3>
              <div className="space-y-4">
                {team.map((person) => (
                  <div
                    key={person.name}
                    className="p-5 rounded-xl bg-surface-section border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent-blue-soft flex items-center justify-center text-primary font-bold">
                        {person.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{person.name}</div>
                        <div className="text-sm text-muted-foreground mb-2">{person.role}</div>
                        <div className="flex flex-wrap gap-3 text-sm">
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
    </Layout>
  );
};

export default ContactPage;
