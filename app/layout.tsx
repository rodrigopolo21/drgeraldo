import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://drgeraldohenrique.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Geraldo Henrique | Terapia Regenerativa e Tratamento da Dor",
    template: "%s | Dr. Geraldo Henrique",
  },
  description:
    "Recupere sua qualidade de vida sem dor. Consulta especializada, diagnóstico preciso e tratamento individualizado em terapia regenerativa e tratamento da dor com o Dr. Geraldo Henrique.",
  keywords: [
    "terapia regenerativa",
    "tratamento da dor",
    "Terapia regenerativa",
    "dor crônica",
    "dor na coluna",
    "dor articular",
    "Dr. Geraldo Henrique",
    "ultrassonografia intervencionista",
    "termografia clínica",
  ],
  authors: [{ name: "Dr. Geraldo Henrique Costa Mendes Filho" }],
  creator: "Dr. Geraldo Henrique",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Dr. Geraldo Henrique",
    title: "Dr. Geraldo Henrique | Terapia Regenerativa e Tratamento da Dor",
    description:
      "Recupere sua qualidade de vida sem dor. Consulta especializada e tratamento individualizado em Terapia regenerativa.",
    images: [
      {
        url: "/images/dr-geraldo-portrait.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Geraldo Henrique - Terapia Regenerativa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Geraldo Henrique | Terapia Regenerativa e Tratamento da Dor",
    description: "Recupere sua qualidade de vida sem dor.",
    images: ["/images/dr-geraldo-portrait.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1120",
};

const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Geraldo Henrique Costa Mendes Filho",
  medicalSpecialty: ["PainMedicine", "PhysicalMedicineAndRehabilitation"],
  description:
    "Especialista em Terapia Regenerativa e Tratamento da Dor, focado na recuperação da qualidade de vida, mobilidade e autonomia dos pacientes.",
  identifier: "RQE 1122161608",
  affiliation: {
    "@type": "Organization",
    name: "PHI Saúde Integrativa e Regenerativa",
  },
  url: SITE_URL,
  telephone: "+55-98-98406-2269",
  image: `${SITE_URL}/images/dr-geraldo-portrait.jpeg`,
  areaServed: "Maranhão, Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} ${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
