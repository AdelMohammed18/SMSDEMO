import { motion } from "framer-motion";
import illustrationSecurity from "@/assets/illustration-security.png";
export function SecuritySection() {
  return <section className="py-32 md:py-48 bg-background">
      <div className="container-premium">
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
            IT-Sikkerhed
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
            Beskyttelse, der<br />
            arbejder i baggrunden.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sikkerhed handler ikke om frygt. Det handler om at kunne arbejde trygt, vel vidende at dine data og systemer er beskyttet.
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
      }} className="max-w-4xl mx-auto mb-20">
          <img alt="Sikker dataflow visualiseret som beskyttende skjold" className="w-full h-auto rounded-3xl" src="/lovable-uploads/359d3518-caf0-4d68-8eb1-16ae8678f1e3.png" />
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
      }} className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Forebyggelse</h3>
            <p className="text-muted-foreground">
              Aktiv overvågning og proaktiv beskyttelse mod trusler, før de bliver et problem.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Beskyttelse</h3>
            <p className="text-muted-foreground">
              Antivirus, firewall og sikre netværksløsninger, der holder uvedkommende ude.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Kontinuitet</h3>
            <p className="text-muted-foreground">
              Sikring af, at din virksomhed kan fortsætte – uanset hvad der sker.
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
}