"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Layers, Repeat, ShieldCheck } from "lucide-react";
import { fadeUp, fromRight, staggerContainer, viewportOnce } from "@/lib/animations";

const reasons = [
  {
    icon: Search,
    title: "Investigamos a causa, não só o sintoma",
    text: "Muitos tratamentos focam apenas em aliviar a dor. Nós buscamos entender a origem real do problema.",
  },
  {
    icon: Layers,
    title: "Plano verdadeiramente individualizado",
    text: "Nada de protocolos genéricos. Cada tratamento é desenhado para o seu corpo e a sua história.",
  },
  {
    icon: Repeat,
    title: "Acompanhamento contínuo",
    text: "Você não fica sozinho. Monitoramos sua evolução e ajustamos o plano conforme necessário.",
  },
  {
    icon: ShieldCheck,
    title: "Tecnologia que faz diferença",
    text: "Recursos diagnósticos avançados que permitem decisões mais precisas e seguras.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 md:py-32">
      <div className="container-premium relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="order-2 lg:order-1"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            O Diferencial
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-display-md font-medium text-white"
          >
            Por que tantos pacientes nos procuram{" "}
            <span className="text-gradient-brand italic">
              após tentarem outros tratamentos?
            </span>
          </motion.h2>

          <motion.div variants={staggerContainer(0.1)} className="mt-10 flex flex-col gap-6">
            {reasons.map((r) => (
              <motion.div
                key={r.title}
                variants={fromRight}
                className="group flex gap-4"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-brand/10 text-brand-light transition-all duration-500 group-hover:bg-brand/20">
                  <r.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-slatey-light/70">
                    {r.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="order-1 lg:order-2"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-premium">
            <Image
              src="/images/dr-geraldo-green.jpeg"
              alt="Dr. Geraldo Henrique em seu consultório de terapia regenerativa"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-brand/10" />
            {/* Glass quote overlay */}
            <div className="absolute inset-x-5 bottom-5 glass-card p-5">
              <p className="font-display text-lg italic leading-snug text-white">
                &ldquo;Meu compromisso é com a sua recuperação — não apenas com o
                alívio temporário.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
