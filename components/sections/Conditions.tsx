"use client";

import { motion } from "framer-motion";
import { Bone, Activity, Dumbbell, Flame, Accessibility } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const conditions = [
  {
    icon: Bone,
    title: "Dores na Coluna",
    text: "Cervical, dorsal e lombar — recuperando seu movimento e conforto.",
  },
  {
    icon: Activity,
    title: "Dores Articulares",
    text: "Joelhos, ombros, quadris e demais articulações.",
  },
  {
    icon: Dumbbell,
    title: "Lesões Esportivas",
    text: "Recuperação e retorno seguro à sua atividade física.",
  },
  {
    icon: Flame,
    title: "Dores Crônicas",
    text: "Aquela dor persistente que limita o seu dia a dia.",
  },
  {
    icon: Accessibility,
    title: "Limitações de Mobilidade",
    text: "Recuperando autonomia e liberdade de movimento.",
  },
];

export function Conditions() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-regen-glow opacity-50 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <SectionHeading
          eyebrow="Condições Frequentemente Atendidas"
          title={
            <>
              Cuidamos do que está{" "}
              <span className="text-gradient-brand italic">limitando você</span>
            </>
          }
          description="Se a dor ou a limitação de movimento faz parte da sua rotina, há um caminho de recuperação para você."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.09)}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {conditions.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className={`glass-card glass-card-brand glass-card-hover group flex items-start gap-5 p-7 ${
                i === conditions.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border-2 border-brand/50 bg-gradient-to-br from-brand-deep/40 to-brand/20 text-brand-light transition-all duration-500 group-hover:border-brand/80 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/30">
                <c.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-1.5 font-body text-lg leading-relaxed text-slatey-light">
                  {c.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
