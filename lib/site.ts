// Central source of truth for contact info & links
export const WHATSAPP_NUMBER = "5598984062269";
export const WHATSAPP_DISPLAY = "(98) 98406-2269";
export const WHATSAPP_MESSAGE =
  "Olá Dr. Geraldo! Gostaria de agendar uma Consulta especializada.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_LINK = "https://www.instagram.com/dr.geraldohenrique/";

export const DOCTOR = {
  fullName: "Dr. Geraldo Henrique Costa Mendes Filho",
  shortName: "Dr. Geraldo Henrique",
  rqe: "RQE 1122161608",
  clinic: "PHI Saúde Integrativa e Regenerativa",
  specialty: "Terapia Regenerativa e Tratamento da Dor",
};

export const NAV_LINKS = [
  { label: "Sobre Mim", href: "#medico" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];
