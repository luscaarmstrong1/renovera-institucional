export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  city: string;
  state: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  businessHours: string;
  socials: {
    linkedin?: string;
    instagram?: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "Renovera",
  legalName: "Renovera Energias Renováveis Ltda",
  tagline: "Engenharia que conecta soluções. Energia que impulsiona resultados.",
  description: "Soluções integradas em projetos elétricos, energia solar, consultoria regulatória, automação e infraestrutura de mobilidade elétrica.",
  city: "São João da Boa Vista",
  state: "SP",
  location: "São João da Boa Vista, SP — Atendimento Nacional",
  email: "contato@renovera.com.br",
  phoneDisplay: "(19) 3631-0000",
  phoneRaw: "551936310000",
  whatsappDisplay: "(19) 99824-7890",
  whatsappUrl: "https://wa.me/5519998247890?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+atendimento+t%C3%A9cnico+com+a+Renovera.",
  businessHours: "Segunda a Sexta, das 08h às 18h",
  socials: {
    linkedin: "https://linkedin.com/company/renovera-energias",
    instagram: "https://instagram.com/renoveraenergias"
  }
};
