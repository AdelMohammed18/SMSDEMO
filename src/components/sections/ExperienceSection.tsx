import { motion } from "framer-motion";
import illustrationExperience from "@/assets/illustration-experience.png";
export function ExperienceSection() {
  return <section className="py-32 md:py-48 bg-background">
      <div className="container-premium">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.8
        }} className="text-center mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Siden 1990
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
              34 års erfaring.<br />
              <span className="text-muted-foreground">Samme ro.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Vi har set teknologier komme og gå. Det, der ikke ændrer sig, er behovet for en partner, der forstår din virksomhed og tager ansvar.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true,
          margin: "-50px"
        }} transition={{
          duration: 1
        }} className="relative">
            <img alt="34 års erfaring visualiseret som bølgende lag" className="w-full h-auto rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]" src="/lovable-uploads/4aca1f2e-5156-4f9d-be72-d1331d31268a.png" />
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="grid grid-cols-3 gap-8 mt-20 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-foreground mb-2">34+</p>
              <p className="text-muted-foreground">års erfaring</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-foreground mb-2">Lokal</p>
              <p className="text-muted-foreground">tilstedeværelse</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-foreground mb-2">100%</p>
              <p className="text-muted-foreground">fokus på dig</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}