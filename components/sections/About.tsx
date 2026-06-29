"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Stethoscope, Award, Users, HeartPulse, GraduationCap, Instagram } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, fromLeft, fromRight, staggerContainer, viewportOnce } from "@/lib/animations";
import { WHATSAPP_LINK, INSTAGRAM_LINK, DOCTOR } from "@/lib/site";

const highlights = [
  "Especialista em Terapia Regenerativa e Tratamento da Dor",
  "Diagnóstico de precisão guiado por tecnologia avançada",
  "Atendimento individualizado e centrado no paciente",
  "Abordagem moderna focada na recuperação da qualidade de vida",
];

export function About() {
  return (
    <section id="medico" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-brand-glow opacity-50 blur-3xl" />
      </div>

      <div className="container-premium relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fromLeft}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 shadow-premium">
            <Image
              src="/images/dr-geraldo-portrait.jpeg"
              alt={`${DOCTOR.fullName}, especialista em ${DOCTOR.specialty}`}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-top"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-card absolute -bottom-6 -right-4 max-w-[230px] p-5 shadow-premium md:-right-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-light">
                <Stethoscope className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-sans text-sm font-semibold text-white">
                  {DOCTOR.rqe}
                </div>
                <div className="font-body text-xs text-slatey-light/60">
                  Registro de Qualificação
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Conheça o Dr. Geraldo
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-display-md font-medium text-white"
          >
            Experiência, Tecnologia e Atendimento Individualizado
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-slatey-light/75 md:text-lg"
          >
            O Dr. Geraldo Henrique dedica sua carreira a uma missão clara:
            devolver às pessoas a liberdade de viver sem dor. Unindo ciência,
            tecnologia de ponta e um olhar verdadeiramente humano, cada plano de
            tratamento é construído de forma única — porque cada paciente é
            único.
          </motion.p>

          <motion.ul variants={staggerContainer(0.08)} className="mt-8 flex flex-col gap-3.5">
            {highlights.map((item) => (
              <motion.li
                key={item}
                variants={fromRight}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-regen" />
                <span className="font-body text-sm text-slatey-light/85 md:text-base">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <CTAButton href={WHATSAPP_LINK} ariaLabel="Agendar avaliação com o Dr. Geraldo">
              Agendar Avaliação
            </CTAButton>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="flex items-center justify-center rounded-full p-2 text-slatey-light/70 transition-colors hover:text-brand"
              title="Seguir no Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="mt-16">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: Award, prefix: "+", value: 15, suffix: "", label: "Anos de experiência" },
                { icon: Users, prefix: "+", value: 7000, suffix: "", label: "Pacientes atendidos" },
                { icon: HeartPulse, prefix: "", value: 99, suffix: "%", label: "De satisfação" },
                { icon: GraduationCap, prefix: "+", value: 8, suffix: "", label: "Especializações" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-start gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/20 text-brand-light">
                    <stat.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="font-stat text-2xl font-bold text-white md:text-3xl">
                    <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="font-sans text-sm text-slatey-light/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
