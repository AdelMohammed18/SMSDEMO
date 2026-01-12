import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-subtle to-background pointer-events-none" />
      
      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue-soft text-primary text-sm font-medium mb-8 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>34+ års erfaring med IT-løsninger</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Pålidelig IT-partner for din virksomhed
          </h1>

          {/* Subheadline */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Vi sikrer stabil drift, hurtig support og tryg IT-sikkerhed – så du kan fokusere på det, du er bedst til.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/kontakt">
                Kontakt os
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/loesninger">Se vores løsninger</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-1">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Hurtig respons</span>
              <span className="text-sm text-muted-foreground">Typisk inden for 4 timer</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-1">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Sikker drift</span>
              <span className="text-sm text-muted-foreground">Backup og overvågning</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue-soft flex items-center justify-center mb-1">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Lokal partner</span>
              <span className="text-sm text-muted-foreground">Personlig betjening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
