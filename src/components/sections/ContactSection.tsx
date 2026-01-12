import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-32 md:py-48 bg-foreground text-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-background">
            Lad os tale sammen.
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-xl mx-auto leading-relaxed mb-12">
            Ingen forpligtelser. Bare en ærlig samtale om, hvad din virksomhed har brug for.
          </p>
          
          <Button variant="hero" size="xl" asChild className="mb-16">
            <Link to="/kontakt">
              Kontakt os
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 text-center border-t border-muted-foreground/20 pt-16"
        >
          <div>
            <p className="font-medium text-background mb-2">Ring til os</p>
            <a 
              href="tel:57821444" 
              className="text-muted-foreground/80 hover:text-primary transition-colors text-lg"
            >
              57 82 14 44
            </a>
          </div>
          <div>
            <p className="font-medium text-background mb-2">Skriv til os</p>
            <a 
              href="mailto:post@sms-online.dk" 
              className="text-muted-foreground/80 hover:text-primary transition-colors"
            >
              post@sms-online.dk
            </a>
          </div>
          <div>
            <p className="font-medium text-background mb-2">Besøg os</p>
            <p className="text-muted-foreground/80">
              Sorø Micro Soft<br />
              Storgade 24C, 4180 Sorø
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground/60">
            Åbent hverdage 8:30–16:30
          </p>
        </motion.div>
      </div>
    </section>
  );
}
