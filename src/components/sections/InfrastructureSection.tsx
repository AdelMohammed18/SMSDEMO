import { motion } from "framer-motion";
import illustrationInfrastructure from "@/assets/illustration-infrastructure.png";
export function InfrastructureSection() {
  return <section className="py-32 md:py-48 bg-foreground text-background">
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
        }} className="order-2 lg:order-1">
            <img alt="Netværksinfrastruktur visualiseret som forbundne noder" className="w-full h-auto rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]" src="/lovable-uploads/feccbdf4-e23d-4893-93a0-156204abff43.png" />
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
        }} className="order-1 lg:order-2">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground/60 mb-6">
              Servere & Infrastruktur
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-background">
              Fundamentet, du<br />
              ikke tænker over.
            </h2>
            <p className="text-xl text-muted-foreground/80 leading-relaxed mb-8">
              De bedste systemer er dem, der bare virker. Vi opsætter og vedligeholder servere, netværk og terminalløsninger, der giver din virksomhed et solidt fundament.
            </p>
            <ul className="space-y-4 text-muted-foreground/80">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Serveropsætning og vedligeholdelse
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Microsoft 365 og terminalserver
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Netværk og fjernadgang
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>;
}