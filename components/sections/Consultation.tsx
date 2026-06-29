"use client";

import { motion } from "framer-motion";
import { Clock, ClipboardList, MessageSquareHeart, Microscope } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const expectations = [
  {
    icon: MessageSquareHeart,
    title: "Escuta atenta",
    text: "Um tempo dedicado para entender sua história, suas dores e seus objetivos de vida.",
  },
  {
    icon: ClipboardList,
    title: "Avaliação completa",
    text: "Análise clínica detalhada, considerando todo o seu contexto — não apenas o sintoma.",
  },
  {
    icon: Microscope,
    title: "Diagnóstico de precisão",
    text: "Uso de tecnologia avançada para identificar a verdadeira origem do seu problema.",
  },
  {
    icon: Clock,
    title: "Próximos passos claros",
    text: "Você sai da consulta entendendo seu quadro e o caminho de tratamento proposto.",
  },
];

export function Consultation() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-premium relative z-10">
        <SectionHeading
          eyebrow="A Experiência"
          eyebrowClassName="eyebrow-regen"
          title={
            <>
              O que esperar da{" "}
              <span className="text-gradient-regen italic">sua consulta</span>
            </>
          }
          description="Uma consulta diferente de tudo que você já viveu. Aqui, o foco é você — e a construção de um caminho real para a sua recuperação."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {expectations.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass-card glass-card-regen glass-card-hover group relative overflow-hidden p-7"
            >
              <span className="absolute -right-2 -top-3 font-display text-7xl font-bold text-white/[0.04]">
                0{i + 1}
              </span>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-brand/50 bg-gradient-to-br from-brand/15 to-regen/15 text-brand-light transition-all duration-500 group-hover:border-regen/60 group-hover:from-brand/25 group-hover:to-regen/25 group-hover:text-regen-soft group-hover:shadow-lg group-hover:shadow-regen/30">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="font-body text-lg leading-relaxed text-slatey-light/70">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
