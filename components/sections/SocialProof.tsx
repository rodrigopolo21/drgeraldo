"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Quote, ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const testimonials = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/depoimento-${i + 1}.jpeg`,
  alt: `Depoimento real de paciente do Dr. Geraldo Henrique (${i + 1})`,
}));

// Highlighted quotes pulled from the real conversations
const pullQuotes = [
  "Tô 99% do tornozelo e já 90% do calcanhar. Zero dor!",
  "Nunca me senti tão normal em alguns anos. Sem cansaço, disposto.",
  "Quando dobro em pé sem peso do corpo não sinto mais dor.",
];

export function SocialProof() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % testimonials.length)),
    []
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + testimonials.length) % testimonials.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-ink-soft py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-glow opacity-40 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <SectionHeading
          eyebrow="Provas Sociais"
          title={
            <>
              Histórias reais de quem{" "}
              <span className="text-gradient-brand italic">
                recuperou a vida
              </span>
            </>
          }
          description="Mensagens reais de pacientes ao longo dos seus tratamentos. Resultados que falam por si."
        />

        {/* Pull-quote marquee */}
        <div className="relative mt-14 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-4">
            {[...pullQuotes, ...pullQuotes].map((q, i) => (
              <div
                key={i}
                className="glass-card flex items-center gap-3 px-6 py-4"
              >
                <Quote className="h-5 w-5 flex-shrink-0 text-brand-light" />
                <span className="whitespace-nowrap font-display text-xl italic text-white">
                  {q}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {testimonials.map((t, i) => (
            <motion.button
              key={t.src}
              variants={fadeUp}
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-premium transition-all duration-500 hover:border-brand/40 hover:shadow-card-hover"
              aria-label={`Ampliar ${t.alt}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={1080}
                height={720}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/90 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" />
              </div>
            </motion.button>
          ))}
        </motion.div>

        <p className="mt-10 text-center font-body text-sm text-slatey-light/70">
          * Resultados podem variar de acordo com cada paciente e cada quadro
          clínico.
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md md:p-8"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 md:left-8"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] w-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 shadow-premium"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={testimonials[openIndex].src}
                alt={testimonials[openIndex].alt}
                width={1080}
                height={720}
                className="h-auto max-h-[85vh] w-auto object-contain"
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 md:right-8"
              aria-label="Próximo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-sm text-slatey-light">
              {openIndex + 1} / {testimonials.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
