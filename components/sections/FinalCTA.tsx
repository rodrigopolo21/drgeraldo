"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-36">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/dr-geraldo-purple.jpeg"
          alt="Dr. Geraldo Henrique"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-glow opacity-60 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.14)}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="eyebrow mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-regen" />
            Dê o Primeiro Passo
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg font-medium text-white"
          >
            O primeiro passo para recuperar sua qualidade de vida pode começar{" "}
            <span className="text-gradient-brand italic">hoje.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl font-body text-base leading-relaxed text-slatey-light/80 md:text-lg"
          >
            Sua recuperação merece atenção especializada. Agende sua avaliação e
            descubra o caminho para viver com mais liberdade, mobilidade e
            autonomia.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <CTAButton
              href={WHATSAPP_LINK}
              size="lg"
              ariaLabel="Quero agendar minha consulta pelo WhatsApp"
            >
              Quero Agendar Minha Consulta
            </CTAButton>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-regen transition-colors group-hover:bg-white/10">
                <Phone className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="font-sans text-xs uppercase tracking-wider text-slatey-light/60">
                  WhatsApp
                </span>
                <span className="font-stat text-lg font-semibold text-white">
                  {WHATSAPP_DISPLAY}
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
