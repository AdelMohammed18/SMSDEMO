import { motion } from "framer-motion";
import illustrationSupport from "@/assets/illustration-support.png";
export function SupportSection() {
  return <section className="py-32 md:py-48 bg-surface-section">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              IT-Support
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              Hjælp, når du<br />
              har brug for det.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Vores support er ikke et telefonsystem. Det er mennesker, du kender, som forstår din virksomhed og løser problemer – typisk inden for fire timer.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl font-semibold text-primary">4t</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Typisk responstid</p>
                <p className="text-sm text-muted-foreground">Fra opkald til løsning</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="relative">
            <img alt="Samarbejde og dialog visualiseret" className="w-full h-auto rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]" src="/lovable-uploads/7a243215-1c1b-4db6-96d8-2c7da6a08407.png" />
          </motion.div>
        </div>
      </div>
    </section>;
}