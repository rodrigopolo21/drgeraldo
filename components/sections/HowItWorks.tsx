"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, ScanSearch, FileHeart, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const steps = [
  {
    icon: Stethoscope,
    step: "01",
    title: "Consulta",
    text: "Uma escuta atenta e uma análise clínica profunda da sua história e seus sintomas.",
  },
  {
    icon: ScanSearch,
    step: "02",
    title: "Diagnóstico Avançado",
    text: "Tecnologia de precisão para identificar a verdadeira origem da sua dor.",
  },
  {
    icon: FileHeart,
    step: "03",
    title: "Plano Personalizado",
    text: "Um tratamento desenhado exclusivamente para você e os seus objetivos.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Tratamento e Acompanhamento",
    text: "Execução cuidadosa e monitoramento contínuo da sua evolução.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-ink py-24 md:py-32"
    >
      <div className="container-premium relative z-10">
        <SectionHeading
          eyebrow="Como Funciona"
          title={
            <>
              Sua jornada de{" "}
              <span className="text-gradient-brand italic">recuperação</span> em 4
              passos
            </>
          }
          description="Um processo claro, humano e estruturado — pensado para conduzir você de volta à sua melhor versão."
        />

        <div className="relative mt-20">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[44px] hidden lg:block">
            <div className="mx-auto h-px w-[78%] bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full origin-left bg-gradient-to-r from-brand-deep via-brand to-regen"
              />
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.18)}
            className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {steps.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Node */}
                <div className="relative mb-7">
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-white/10 bg-ink-soft shadow-premium transition-all duration-500 group-hover:border-brand/50 group-hover:shadow-glow">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand text-white">
                      <s.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border border-brand/30 bg-ink font-stat text-xs font-bold text-brand-light">
                    {s.step}
                  </span>
                </div>

                <h3 className="font-sans text-2xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 max-w-[320px] font-body text-lg leading-relaxed text-slatey-light">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partner Logo Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-24 flex flex-col items-center gap-8 md:mt-32"
        >
          <div className="text-center">
            <h3 className="mb-2 font-sans text-2xl font-semibold text-white md:text-3xl">
              Parceria com Tecnologia Avançada
            </h3>
            <p className="mx-auto max-w-2xl font-body text-base text-slatey-light/75 md:text-lg">
              Contamos com as melhores plataformas de diagnóstico e guia de procedimentos em tempo real,
              garantindo precisão em cada etapa do seu tratamento regenerativo e recuperação.
            </p>
          </div>
          <div className="relative w-full max-w-sm">
            <Image
              src="/images/luma-logo.jpeg"
              alt="Tecnologia parceira de diagnóstico avançado"
              width={400}
              height={300}
              className="rounded-xl border border-white/10 shadow-premium"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
