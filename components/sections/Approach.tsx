"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crosshair, Cpu, UserCog, HeartHandshake } from "lucide-react";
import { fadeUp, fromLeft, staggerContainer, viewportOnce } from "@/lib/animations";

const pillars = [
  {
    icon: Crosshair,
    title: "Diagnóstico Mais Preciso",
    text: "Identificamos a real origem da dor com Consulta detalhada e tecnologia de ponta.",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    text: "Recursos modernos de imagem e terapias regenerativas a favor da sua recuperação.",
  },
  {
    icon: UserCog,
    title: "Tratamento Personalizado",
    text: "Cada plano é único, desenhado para o seu corpo, sua rotina e seus objetivos.",
  },
  {
    icon: HeartHandshake,
    title: "Acompanhamento Individualizado",
    text: "Suporte contínuo e ajustes precisos em cada etapa da sua jornada.",
  },
];

export function Approach() {
  return (
    <section
      id="abordagem"
      className="relative overflow-hidden bg-ink-soft py-24 md:py-32"
    >
      {/* DNA regenerative image as ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/regen-dna.jpg"
          alt=""
          fill
          aria-hidden="true"
          sizes="100vw"
          className="object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-soft via-ink-soft/85 to-ink-soft" />
      </div>

      <div className="container-premium relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: heading + DNA framed image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-regen" />
            Abordagem Terapêutica
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-md font-medium text-white"
          >
            Uma abordagem que trata a{" "}
            <span className="text-gradient-brand italic">causa</span>, não apenas
            a dor.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg font-body text-base leading-relaxed text-slatey-light/75 md:text-lg"
          >
            A Terapia regenerativa atua estimulando os mecanismos naturais de
            recuperação do próprio corpo. Combinada a um diagnóstico preciso, ela
            permite resultados mais duradouros e uma verdadeira retomada da
            qualidade de vida.
          </motion.p>

          <motion.div
            variants={fromLeft}
            className="mt-9 overflow-hidden rounded-2xl border border-white/10 shadow-premium"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/regen-dna.jpg"
                alt="Representação de Terapia regenerativa e regeneração celular"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: pillar cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid gap-5 sm:grid-cols-2"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="glass-card glass-card-hover group flex flex-col gap-4 p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-regen/15 text-white transition-transform duration-500 group-hover:scale-110">
                <p.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-base font-semibold text-white">
                {p.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-slatey-light">
                {p.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
