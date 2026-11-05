import React from "react";
import { ActionButton } from "./icons";

export function FinalCTA() {
  return (
    <div
      id="w-node-f35c7284-aa91-03b1-62fc-d15dd1353c80-0ac01850"
      className="footer-product"
    >
      <div className="absolute-background">
        <img
          src="/assets/renovera/contato/footer-solar-landscape.webp"
          alt="Infraestrutura Elétrica e Usinas Renovera"
          className="footer-img top"
          style={{ objectFit: "cover" }}
        />
        <div className="footer-img footer-img-fundo" />
      </div>
      <div className="footer-product-text-inner">
        <h3 className="footer-product-heading">
          Vamos estruturar seu
          <br />
          próximo projeto?
        </h3>
        <ActionButton label="Falar com a Renovera" variant="light" asDiv />
      </div>
      <a
        aria-label="Falar com a Renovera: Iniciar atendimento técnico"
        href="#contato"
        className="footer-product-link w-inline-block"
      />
    </div>
  );
}
