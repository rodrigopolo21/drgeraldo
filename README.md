# Dr. Geraldo Henrique — Landing Page

Landing page premium de página única para **Dr. Geraldo Henrique Costa Mendes Filho** (RQE 1122161608), especialista em Terapia Regenerativa e Tratamento da Dor. Foco na conversão para agendamento via WhatsApp.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — paleta médica premium (dark)
- **Framer Motion** — animações de entrada/scroll
- **GSAP ScrollTrigger** — animação de frames do Hero (scroll scrub)
- **Lenis** — smooth scroll (sincronizado com o ticker do GSAP)

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento → http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
```

## Estrutura

```
app/
  layout.tsx      # metadata, fontes, schema.org (SEO)
  page.tsx        # composição das seções
  sitemap.ts      # /sitemap.xml
  robots.ts       # /robots.txt
  globals.css     # tokens e utilitários CSS
components/
  Navbar.tsx
  sections/       # 15 seções da página
  ui/             # componentes reutilizáveis
  providers/      # SmoothScroll (Lenis + GSAP)
lib/              # animações, config do site, utils
public/
  frames/         # 145 frames do Hero (scroll animation)
  images/         # fotos do médico, depoimentos, regenerativa
```

> `_originais/` (fora do deploy, no `.gitignore`) guarda os assets-fonte originais enviados pelo cliente.

## Deploy (Vercel)

1. Suba o repositório para o GitHub.
2. Importe o projeto no [Vercel](https://vercel.com/new) — o framework Next.js é detectado automaticamente.
3. Não há variáveis de ambiente obrigatórias.
4. Deploy. O domínio de produção esperado é `drgeraldohenrique.com.br` (ajuste `SITE_URL` em `app/layout.tsx`, `app/sitemap.ts` e `app/robots.ts` se mudar).

## Contato configurado

- WhatsApp: `(98) 98406-2269` → `wa.me/5598984062269` (em `lib/site.ts`)
