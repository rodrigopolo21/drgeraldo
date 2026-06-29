"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Instagram } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { WHATSAPP_LINK, INSTAGRAM_LINK } from "@/lib/site";
import { fadeUp, staggerContainer, easeOutExpo } from "@/lib/animations";

const FRAME_COUNT = 145;

function getFrameSrc(index: number) {
  return `/frames/frame_${String(index + 1).padStart(3, "0")}.jpg`;
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Desktop: cover fit (zoom in). Mobile: fit both Dr. Geraldo and joelho 100% without cuts
    const isMobile = cw < 768;
    const baseScale = Math.min(cw / iw, ch / ih);
    const scale = isMobile ? baseScale * 2.45 : Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = isMobile ? (cw - sw) / 2 - cw * 0.45 : (cw - sw) * 0.92;
    const sy = isMobile ? (ch - sh) / 2 - ch * 0.12 : (ch - sh) / 2;

    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    function handleResize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      drawFrame(frameIndexRef.current);
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        loadedCount++;
        if (i === 0) {
          handleResize();
        }
        if (loadedCount === FRAME_COUNT) {
          setLoaded(true);
          handleResize();
        }
      };
      img.src = getFrameSrc(i);
      images[i] = img;
    }
    imagesRef.current = images;

    window.addEventListener("resize", handleResize);
    handleResize();

    // GSAP ScrollTrigger setup
    let tween: any = null;

    import("gsap").then(({ gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        const obj = { frame: 0 };

        tween = gsap.to(obj, {
          frame: FRAME_COUNT - 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 2.0}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
          onUpdate: () => {
            const newIndex = Math.round(obj.frame);
            if (newIndex !== frameIndexRef.current) {
              frameIndexRef.current = newIndex;
              if (rafRef.current) cancelAnimationFrame(rafRef.current);
              rafRef.current = requestAnimationFrame(() => {
                drawFrame(newIndex);
              });
            }
          },
        });
      });
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (tween) {
        tween.scrollTrigger?.kill();
        tween.kill();
      }
    };
  }, [mounted, drawFrame]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      suppressHydrationWarning
      className="relative flex h-[92vh] flex-col items-center justify-end pb-20 md:justify-center md:pb-0 overflow-hidden bg-ink"
    >
      {/* Canvas background */}
      {mounted && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      )}

      {/* Dark overlays for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

      {/* Loading indicator */}
      {mounted && !loaded && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-ink/80">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand/30 border-t-brand" />
        </div>
      )}

      <div className="relative z-10 flex w-full items-center px-6 md:px-10 lg:pl-16 xl:pl-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.14, 0.1)}
          className="flex w-full flex-col items-start lg:max-w-[42rem]"
        >
          <motion.h1
            variants={fadeUp}
            className="font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Sua Qualidade de Vida
            <br />
            Não Deve Ser{" "}
            <span className="relative inline-block">
              <span className="text-gradient-brand italic">Limitada</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1, ease: easeOutExpo }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-brand to-transparent"
              />
            </span>{" "}
            Pela Dor.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-3 sm:mt-6 md:mt-8 max-w-xl font-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slatey-light/80"
          >
            Te ajudo a recuperar o prazer de viver sem dor. Através de uma
            avaliação especializada, diagnóstico preciso e um plano de tratamento
            individualizado, ajudamos pessoas a recuperar{" "}
            <span className="text-white">mobilidade, autonomia e qualidade de vida.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 sm:mt-6 md:mt-9 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
            <CTAButton
              href={WHATSAPP_LINK}
              size="lg"
              ariaLabel="Quero agendar minha consulta pelo WhatsApp"
            >
              Quero Agendar Minha Consulta
            </CTAButton>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5 text-sm text-slatey-light/70">
                <ShieldCheck className="h-5 w-5 text-regen" />
                Avaliação especializada e individualizada
              </div>
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
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-slatey-light/50">
          Explore
        </span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-brand-light"
          />
        </div>
      </motion.div>
    </section>
  );
}
