import React from "react";
import Image from "next/image";
import { SITE, SOCIAL_LINKS } from "@/config/site";
import { LinkedInIcon, InstagramIcon, FacebookIcon, MailIcon } from "./icons";
import { FinalCTA } from "./FinalCTA";

export function Footer() {
  return (
    <footer className="footer">
      <div
        id="w-node-_01191fa0-2abf-23ff-44da-acbdf6476df4-0ac01850"
        className="footer-full-height-container"
      >
        <FinalCTA />
        <div
          id="w-node-_52f3956c-463e-cf84-00da-ec073fe306cc-0ac01850"
          className="footer-content"
        >
          <div
            id="w-node-_103e8af5-3d0c-0c66-5f7b-cd9c707fa04f-0ac01850"
            className="footer-fact-wrapper"
          >
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-info is-first w-inline-block"
            >
              <LinkedInIcon className="footer-info-img is-first" />
              <div className="footer-info-text">
                conectar no
                <br />
                LinkedIn
              </div>
            </a>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-info is-second w-inline-block"
            >
              <div className="w-8 h-8 rounded-full bg-[#033118] border border-[#FED15D]/40 p-1 flex items-center justify-center">
                <Image
                  src="/assets/brand/favicon.svg"
                  alt="Renovera"
                  width={20}
                  height={20}
                />
              </div>
              <div className="footer-info-text">
                atendimento
                <br />
                WhatsApp
              </div>
            </a>
          </div>

          <div
            id="w-node-d7a8f3ad-3299-e0db-d6e1-45b4c5d40c53-0ac01850"
            className="footer-content-wrapper"
          >
            <h4 className="footer-heading">
              <span data-highlight-text="" className="heading-line">
                {SITE.name}
              </span>
              <br />
              Energias Renováveis
            </h4>
            <div className="footer-shipping-wrapper">
              <a href="/sobre" className="shipping-link w-inline-block">
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">
                    Institucional • Desde {SITE.officialStats.foundedYear}
                  </div>
                </div>
              </a>
              <a href="/solucoes" className="shipping-link w-inline-block">
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">Portfólio Renô (9 Soluções)</div>
                </div>
              </a>
              <a href="/projetos" className="shipping-link w-inline-block">
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">Arquiteturas &amp; Estudos Técnicos</div>
                </div>
              </a>
              <a href="/contato" className="shipping-link w-inline-block">
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">Canais de Atendimento</div>
                </div>
              </a>
              <a href="/privacidade" className="shipping-link w-inline-block">
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">
                    Política de Privacidade (LGPD)
                  </div>
                </div>
              </a>
              <a href="/termos" className="shipping-link w-inline-block">
                <div className="shipping-link-wrap">
                  <div className="shipping-link-text">
                    Termos de Uso &amp; Compliance
                  </div>
                </div>
              </a>
            </div>
            <div className="footer-social-media-wrap">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link w-inline-block"
                aria-label="LinkedIn Oficial (@renoveraoficial)"
              >
                <div className="social-media-circle is-white">
                  <LinkedInIcon />
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link w-inline-block"
                aria-label="Instagram Oficial (@renoveraoficial)"
              >
                <div className="social-media-circle is-white">
                  <InstagramIcon />
                </div>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link w-inline-block"
                aria-label="Facebook Oficial (@renoveraoficial)"
              >
                <div className="social-media-circle is-white">
                  <FacebookIcon />
                </div>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="social-media-link w-inline-block"
                aria-label="E-mail Comercial (contato@renovera.com.br)"
              >
                <div className="social-media-circle is-white">
                  <MailIcon />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          id="w-node-_9cf1d991-93c8-9876-0a84-cf07ed027319-0ac01850"
          className="footer-logo mobile flex items-center justify-center font-bold text-4xl text-white font-display"
        >
          RENOVERA
        </div>

        <div
          id="w-node-_440e9322-e28d-ad9e-9ab8-9d51f2096f5d-0ac01850"
          className="footer-bottom"
        >
          <div className="footer-bottom-text">
            © 2026 {SITE.fullName}. Todos os direitos reservados. • {SITE.location}
          </div>
          <div className="footer-creditos text-xs text-[#D1DFD8]">
            Ética &amp; Compliance:{" "}
            <a href={`mailto:${SITE.complianceEmail}`} className="underline hover:text-[#FED15D]">
              {SITE.complianceEmail}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-logo desktop flex items-center justify-center font-bold text-7xl text-white/20 font-display select-none pointer-events-none">
        RENOVERA ENERGIAS RENOVÁVEIS
      </div>
    </footer>
  );
}
