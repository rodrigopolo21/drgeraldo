"use client";

import { motion } from "framer-motion";
import { Heart, Moon, Users, TrendingDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const impacts = [
  {
    icon: Moon,
    title: "Noites sem descanso",
    text: "A dor rouba o seu sono e o seu descanso, comprometendo cada novo dia.",
  },
  {
    icon: Users,
    title: "Momentos perdidos",
    text: "Limita sua presença com quem você ama e os momentos que mais importam.",
  },
  {
    icon: TrendingDown,
    title: "Autonomia reduzida",
    text: "Restringe sua liberdade de movimento e a independência do dia a dia.",
  },
  {
    icon: Heart,
    title: "Impacto emocional",
    text: "Afeta seu humor, sua disposição e a sua qualidade de vida como um todo.",
  },
];

export function PainSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-danger-glow opacity-40 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <SectionHeading
          eyebrow="O Problema Real"
          eyebrowClassName="eyebrow-danger"
          title={
            <>
              A dor não afeta{" "}
              <span className="text-gradient-danger italic">apenas o corpo.</span>
            </>
          }
          description="Quando a dor se torna constante, ela ultrapassa o físico. Ela muda a forma como você vive, trabalha, dorme e se relaciona. Entender isso é o primeiro passo para recuperar o controle."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass-card glass-card-danger glass-card-hover group flex flex-col gap-4 p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-brand/50 bg-gradient-to-br from-brand/15 to-danger/10 text-brand-light transition-all duration-500 group-hover:border-danger/60 group-hover:from-brand/25 group-hover:to-danger/20 group-hover:text-danger-light group-hover:shadow-lg group-hover:shadow-danger/30">
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="font-body text-lg leading-relaxed text-slatey-light/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl font-medium italic leading-snug text-white md:text-3xl"
        >
          &ldquo;Recuperar a qualidade de vida é recuperar a sua liberdade de
          viver plenamente.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
