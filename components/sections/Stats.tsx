"use client";

import { motion } from "framer-motion";
import { Award, Users, HeartPulse, GraduationCap } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const stats = [
  {
    icon: Award,
    prefix: "+",
    value: 15,
    suffix: "",
    label: "Anos de experiência",
    desc: "Dedicados ao tratamento da dor",
  },
  {
    icon: Users,
    prefix: "+",
    value: 7000,
    suffix: "",
    label: "Pacientes atendidos",
    desc: "Histórias de recuperação",
  },
  {
    icon: HeartPulse,
    prefix: "+",
    value: 98,
    suffix: "%",
    label: "Satisfação",
    desc: "Confiança comprovada",
  },
  {
    icon: GraduationCap,
    prefix: "+",
    value: 8,
    suffix: "",
    label: "Especializações",
    desc: "Formação de excelência",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-soft py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group relative flex flex-col items-center gap-3 bg-ink p-8 text-center transition-colors duration-500 hover:bg-ink-soft md:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-deep/40 to-brand/20 text-brand-light transition-transform duration-500 group-hover:scale-110">
                <stat.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div className="font-stat text-4xl font-bold text-white md:text-5xl">
                <Counter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="font-sans text-sm font-semibold text-white">
                {stat.label}
              </div>
              <div className="font-body text-xs text-slatey-light/80">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
