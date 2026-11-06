import { SITE, SOCIAL_LINKS, linkWhatsApp } from "./site";

export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  city: string;
  state: string;
  location: string;
  email: string;
  complianceEmail: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  businessHours: string;
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: SITE.shortName,
  legalName: SITE.fullName,
  tagline: SITE.heroHeadline,
  description: SITE.heroSubheadline,
  city: "São João da Boa Vista",
  state: "SP",
  location: `${SITE.location} — ${SITE.coverage}`,
  email: SITE.email,
  complianceEmail: SITE.complianceEmail,
  phoneDisplay: SITE.whatsappDisplay,
  phoneRaw: SITE.whatsappNumber,
  whatsappDisplay: SITE.whatsappDisplay,
  whatsappUrl: linkWhatsApp(),
  businessHours: "Segunda a Sexta, das 08h às 18h",
  socials: {
    linkedin: SOCIAL_LINKS.linkedin,
    instagram: SOCIAL_LINKS.instagram,
    facebook: SOCIAL_LINKS.facebook
  }
};
