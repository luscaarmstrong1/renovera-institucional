import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE, SOCIAL_LINKS } from "@/config/site";
import { Origem } from "@/lib/origem";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#022417",
};

export const metadata: Metadata = {
  title: "Renovera Energias Renováveis | Engenharia, Energia Solar e Consultoria Regulatória",
  description: SITE.seo.description,
  applicationName: SITE.fullName,
  keywords: [
    "Renovera Energias Renováveis",
    "Renô Adviser",
    "Inversão de Fluxo MMGD",
    "Consultoria Regulatória ANEEL",
    "Engenharia Elétrica",
    "Energia Solar Fotovoltaica",
    "Eletropostos Recarga VE",
    "Projetos Média e Baixa Tensão",
    "Subestações Abrigadas",
  ],
  icons: {
    icon: "/assets/brand/favicon.svg",
    apple: "/assets/brand/apple-touch-icon.png",
  },
  alternates: { canonical: `${SITE.url}/` },
  openGraph: {
    title: "Renovera Energias Renováveis | Engenharia, Energia Solar e Consultoria Regulatória",
    description: SITE.seo.description,
    url: `${SITE.url}/`,
    siteName: SITE.fullName,
    locale: "pt_BR",
    images: [
      {
        url: `${SITE.url}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Renovera Energias Renováveis | Engenharia Elétrica, Projetos Solares e Consultoria Regulatória",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovera Energias Renováveis | Engenharia, Energia Solar e Consultoria Regulatória",
    description: SITE.seo.description,
    images: [`${SITE.url}/og.jpg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/assets/brand/logo-renovera.png`,
  description: SITE.seo.description,
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.instagram, SOCIAL_LINKS.facebook],
  address: {
    "@type": "PostalAddress",
    addressLocality: "São João da Boa Vista",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className="sofia_sans_condensed_8840682c-module__U6mvfq__variable kalam_e4449479-module__rPSdnW__variable"
    >
      <body className="body">
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".loader{display:none!important}html{cursor:auto!important}html *{pointer-events:auto}",
            }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#principal" className="salto">
          Ir para o conteúdo
        </a>
        <Origem />
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
