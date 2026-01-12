import { motion } from "framer-motion";

export function CollaborationSection() {
  return (
    <section className="py-32 md:py-48 bg-surface-section">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Sådan arbejder vi
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Simpelt samarbejde.<br />
            Klare aftaler.
          </h2>
        </motion.div>

        <div className="space-y-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Vi starter med en samtale</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ikke et salgsmøde. En ærlig dialog om, hvad din virksomhed har brug for – og hvad der ikke giver mening.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Vi opsætter det rigtige</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Servere, netværk, sikkerhed – præcis det, I har brug for. Ikke mere, ikke mindre. Med gennemsigtig prissætning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Vi er her, når I ringer</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Løbende support, overvågning og vedligeholdelse. I kender de mennesker, der tager telefonen – og de kender jeres systemer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
