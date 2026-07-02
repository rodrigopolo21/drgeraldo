"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { WHATSAPP_LINK } from "@/lib/site";

const faqs = [
  {
    q: "O tratamento dói?",
    a: "Trabalhamos com técnicas modernas e guiadas por imagem que priorizam o seu conforto. Eventuais desconfortos costumam ser leves e temporários, e tudo é cuidadosamente conduzido para minimizar qualquer incômodo.",
  },
  {
    q: "Terei melhora já no primeiro atendimento?",
    a: "Muitos pacientes relatam alívio e clareza já na primeira Consulta, pois saem entendendo a origem do problema e o plano de tratamento. A evolução completa, porém, é construída ao longo do acompanhamento individualizado.",
  },
  {
    q: "Já tentei outros tratamentos. Vale a pena fazer uma Consulta?",
    a: "Sim. Grande parte dos nossos pacientes chega justamente após tentar outras abordagens sem sucesso. A diferença está em investigar a verdadeira causa da dor, e não apenas tratar o sintoma.",
  },
  {
    q: "Como saber se esse tratamento é indicado para mim?",
    a: "A Consulta especializada existe exatamente para isso. Nela, analisamos seu caso de forma completa e individual para definir se — e como — a terapia regenerativa pode ajudar você.",
  },
  {
    q: "Quanto tempo leva para perceber resultados?",
    a: "Varia conforme o quadro de cada paciente. Alguns percebem melhora rapidamente; outros, de forma progressiva ao longo do tratamento. Tudo é acompanhado de perto para garantir a melhor evolução possível.",
  },
  {
    q: "Quanto tempo dura a consulta?",
    a: "A consulta é conduzida sem pressa. Reservamos o tempo necessário para uma escuta atenta, Consulta completa e orientações claras sobre os próximos passos.",
  },
  {
    q: "Posso levar exames anteriores?",
    a: "Com certeza. Exames e laudos anteriores são muito bem-vindos e ajudam a compor um diagnóstico ainda mais preciso do seu quadro.",
  },
  {
    q: "Atende convênios?",
    a: "Entre em contato pelo WhatsApp para verificarmos as condições de atendimento e as formas disponíveis para o seu caso. Teremos prazer em orientar você.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="container-premium relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Perguntas Frequentes"
              title={
                <>
                  Tudo o que você precisa{" "}
                  <span className="text-gradient-brand italic">saber</span>
                </>
              }
              description="Reunimos as dúvidas mais comuns. Se a sua não estiver aqui, fale diretamente conosco."
            />
            <div className="mt-8 hidden lg:block">
              <CTAButton href={WHATSAPP_LINK} variant="outline" ariaLabel="Tirar dúvidas pelo WhatsApp">
                Ainda tenho dúvidas
              </CTAButton>
            </div>
          </div>

          {/* Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer(0.06)}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.q}
                  variants={fadeUp}
                  className={cn(
                    "glass-card overflow-hidden transition-colors duration-300",
                    isOpen && "border-brand/40 bg-white/[0.05]"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-base font-semibold text-white md:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-brand-light transition-all duration-300",
                        isOpen && "rotate-45 bg-brand/20"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 font-body text-sm leading-relaxed text-slatey-light/75 md:text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
