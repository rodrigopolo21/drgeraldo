"use client";

import { Instagram, MessageCircle, MapPin } from "lucide-react";
import {
  DOCTOR,
  NAV_LINKS,
  WHATSAPP_LINK,
  WHATSAPP_DISPLAY,
  INSTAGRAM_LINK,
} from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-soft">
      <div className="container-premium relative z-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              {DOCTOR.shortName}
            </h3>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-brand-light/80">
              {DOCTOR.specialty}
            </p>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-slatey-light/85">
              Dedicado à recuperação da sua qualidade de vida, mobilidade e
              autonomia através da Terapia regenerativa e do tratamento
              especializado da dor.
            </p>

            <div className="mt-6 flex flex-col gap-1.5 text-sm text-slatey-light/85">
              <span className="font-medium text-white">{DOCTOR.fullName}</span>
              <span>{DOCTOR.rqe}</span>
              <span>{DOCTOR.clinic}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-slatey-light/85 transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <div className="mt-5 flex flex-col gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slatey-light/85 transition-colors hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-regen transition-colors group-hover:bg-white/10">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="font-body text-sm">{WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slatey-light/85 transition-colors hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-light transition-colors group-hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="font-body text-sm">Instagram</span>
              </a>
              <div className="flex items-center gap-3 text-slatey-light/85">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slatey-light">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-body text-sm">Maranhão, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-body text-xs text-slatey-light/70">
            © {year} {DOCTOR.fullName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-xs text-slatey-light/75 transition-colors hover:text-slatey-light"
            >
              Política de Privacidade
            </a>
            <span className="font-body text-xs text-slatey-light/65">
              {DOCTOR.rqe}
            </span>
          </div>
        </div>

        <p className="mt-8 text-center font-body text-[11px] leading-relaxed text-slatey-light/65">
          Este conteúdo tem caráter informativo e não substitui a consulta médica
          presencial. Resultados podem variar de acordo com cada paciente.
        </p>
      </div>
    </footer>
  );
}
