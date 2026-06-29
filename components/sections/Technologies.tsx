"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScanLine, Thermometer, Dna } from "lucide-react";
import { fadeUp, fromRight, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";

const regenVisuals = [
  {
    src: "/images/regen-cells.jpg",
    alt: "Medicina regenerativa em nível celular",
    label: "Regeneração Celular",
  },
];

const technologies = [
  {
    icon: ScanLine,
    title: "Ultrassonografia Intervencionista",
    text: "Procedimentos guiados por imagem em tempo real, garantindo precisão milimétrica e maior segurança a cada aplicação.",
  },
  {
    icon: Thermometer,
    title: "Termografia Clínica",
    text: "Mapeamento térmico que revela padrões inflamatórios e ajuda a localizar a origem da dor de forma não invasiva.",
  },
  {
    icon: Dna,
    title: "Terapias Regenerativas",
    text: "Estímulo aos mecanismos naturais de regeneração do corpo, promovendo recuperação real dos tecidos.",
  },
];

export function Technologies() {
  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden bg-ink-soft py-24 md:py-32"
    >
      <div className="container-premium relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Two framed squares (hero-style) with regenerative imagery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="grid gap-6"
        >
          {regenVisuals.map((item) => (
            <motion.div
              key={item.src}
              variants={scaleIn}
              className="group relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] shadow-premium backdrop-blur-xl transition-all duration-500 hover:border-brand/40 hover:shadow-card-hover"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                quality={100}
                sizes="(max-width: 1024px) 90vw, 448px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 glass-card flex items-center gap-2.5 px-4 py-3">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-regen" />
                <span className="font-sans text-sm font-medium text-white">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-regen" />
            Tecnologias Utilizadas
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-md font-medium text-white"
          >
            Precisão e inovação em cada{" "}
            <span className="text-gradient-brand italic">diagnóstico</span>
          </motion.h2>

          <motion.div variants={staggerContainer(0.1)} className="mt-10 flex flex-col gap-4">
            {technologies.map((t) => (
              <motion.div
                key={t.title}
                variants={fromRight}
                className="glass-card glass-card-hover group flex gap-5 p-6"
              >
                <div className="flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-deep/10 p-3 text-brand-light transition-transform duration-500 group-hover:scale-110">
                  <t.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-sans text-base font-semibold text-white md:text-lg">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-slatey-light/70">
                    {t.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
