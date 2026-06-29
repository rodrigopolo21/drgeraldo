"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const testimonials = [
  {
    name: "Maria Silva",
    title: "Professora",
    comment: "Passei 3 anos com dor na coluna que não deixava eu viver normalmente. Aqui descobri que o problema não era só físico, era tudo interligado. Em 2 meses voltei a dar aula sem ficar com dor. O Dr. Geraldo é um gênio!",
    rating: 5,
  },
  {
    name: "João Santos",
    title: "Empresário",
    comment: "Já tinha desistido de jogar futebol. Consultei em vários lugares e ninguém achava a origem do meu problema no joelho. A tecnologia que usam aqui é impressionante, descobriu exatamente o que estava errado. Voltei ao campo! 🏟️",
    rating: 5,
  },
  {
    name: "Ana Costa",
    title: "Jornalista",
    comment: "O que mais me impressionou foi o atendimento humanizado. Não é aquele consultório frio e robótico. O Dr. Geraldo ouve, entende sua história e monta um plano só pra você. Resultado? Dores crônicas sumiram em 3 meses!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    title: "Advogado",
    comment: "Trabalho o dia inteiro sentado. Minhas costas estavam destruídas. Fiz o tratamento regenerativo aqui e foi tipo reiniciar meu corpo. Não aguento de mais energia agora! A clínica tem tecnologia de verdade, não promessa vazia.",
    rating: 5,
  },
  {
    name: "Patricia Oliveira",
    title: "Arquiteta",
    comment: "Lesão no ombro que durava 2 anos. Consultei a doutora (sim, tem profissional mulher no time!) e em 6 semanas eu conseguia movimentar normalmente. O pós-tratamento deles é impecável, orientação total. Super recomendo!",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    title: "Aposentado",
    comment: "Aos 65 anos achei que tinha perdido minha mobilidade pra sempre. Aqui me devolveram a qualidade de vida. Agora passeio com meu neto, danço com minha esposa... é como ter ganhado anos de vida de volta. Obrigado, Dr. Geraldo!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-brand-glow opacity-30 blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <SectionHeading
          eyebrow="Histórias Reais"
          title={
            <>
              O que nossos pacientes{" "}
              <span className="text-gradient-brand italic">dizem sobre</span> a recuperação
            </>
          }
          description="Vidas transformadas. Qualidade de vida recuperada. Histórias de pessoas que voltaram a fazer aquilo que amam."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 transition-all duration-500 hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-brand/20"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="font-body text-sm text-slatey-light/60">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-brand text-brand transition-transform duration-300 group-hover:scale-110"
                  />
                ))}
              </div>

              <p className="font-body text-base leading-relaxed text-slatey-light/80">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-16 rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/10 to-brand/5 p-8 text-center md:p-12"
        >
          <p className="font-body text-lg text-slatey-light/80 md:text-xl">
            <span className="font-semibold text-brand">+150 pacientes</span> já transformaram suas vidas através da
            <span className="font-semibold text-brand"> medicina regenerativa e tratamento personalizado</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
