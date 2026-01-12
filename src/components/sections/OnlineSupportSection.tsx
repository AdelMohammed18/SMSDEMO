import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function OnlineSupportSection() {
  return (
    <section className="py-32 md:py-48 bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            For eksisterende kunder
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Online support.
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
            Hurtig fjernadgang til din computer, så vi kan hjælpe dig direkte – uden at du behøver forlade dit skrivebord.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <a
                href="https://download.teamviewer.com/download/TeamViewerQS.exe"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download fjernsupport
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Ring til os på <a href="tel:57821444" className="text-primary hover:underline">57 82 14 44</a> inden du starter programmet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
