import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import illustrationBackup from "@/assets/illustration-backup.png";
export function BackupSection() {
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
            Backup & Datagendannelse
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
            Når det uventede sker,<br />
            <span className="text-muted-foreground">står du ikke alene.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tab af data er ikke kun teknisk. Det er tab af tid, tillid og omsætning. Derfor sikrer vi, at dine data altid kan gendannes – hvad enten det er fra harddiske, SSD eller RAID-systemer.
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
      }} className="max-w-4xl mx-auto mb-16">
          <img alt="Data backup og gendannelse visualiseret som geometriske former" className="w-full h-auto rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]" src="/lovable-uploads/24b75177-5eec-48d5-afe7-d6196876cdaa.png" />
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-center">
          <Button variant="outline" size="lg" asChild className="group">
            <Link to="/datagendannelse">
              Læs mere om datagendannelse
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
}