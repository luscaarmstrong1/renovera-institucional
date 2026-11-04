import React from "react";
import Image from "next/image";
import { TechBadgeSvg } from "./icons";

const COMPARISON_ITEMS_RENOVERA = [
  {
    integrated: "Análise técnica fundamentada e auditoria de fluxo",
    isolated: "Aceitação passiva de orçamentos e pareceres de rede",
  },
  {
    integrated: "Conformidade regulatória estrita com ANEEL e PRODIST",
    isolated: "Dimensionamento desprovido de respaldo regulatório",
  },
  {
    integrated: "Avaliação integrada de alternativas de conexão e custo",
    isolated: "Obras desproporcionais sem estudo de fluxo reverso",
  },
  {
    integrated: "Documentação técnica executiva com ART e memoriais",
    isolated: "Diagramas simplificados sem aprovação em concessionária",
  },
  {
    integrated: "Prontidão para mobilidade elétrica e telemetria Zero Export",
    isolated: "Sistemas isolados sem controle inteligente de injeção",
  },
  {
    integrated: "Acompanhamento formal do protocolo ao comissionamento",
    isolated: "Falta de suporte após a emissão do projeto",
  },
];

const ROW_IDS = [
  {
    id: "w-node-_19f090c2-e935-551c-1b66-c9909ef6c530-0ac01850",
    checkerId: "w-node-_67cfe7af-e8f4-5faf-8f83-b8193851988e-0ac01850",
    lineId: undefined,
  },
  {
    id: "w-node-_47a11ff8-ac56-0024-15cb-fc26c5d94a95-0ac01850",
    checkerId: "w-node-_47a11ff8-ac56-0024-15cb-fc26c5d94a97-0ac01850",
    lineId: "w-node-ad9476fc-b91f-ac1b-96a7-b4acfbdf343a-0ac01850",
  },
  {
    id: "w-node-_6afe215e-c76e-f143-d6df-b45bc00e04a5-0ac01850",
    checkerId: "w-node-_6afe215e-c76e-f143-d6df-b45bc00e04a7-0ac01850",
    lineId: undefined,
  },
  {
    id: "w-node-feeb6d30-11fd-f9ee-d781-50b667e32eff-0ac01850",
    checkerId: "w-node-feeb6d30-11fd-f9ee-d781-50b667e32f01-0ac01850",
    lineId: undefined,
  },
  {
    id: "w-node-_09769ba3-d66e-d0b1-d86a-5e0fc71a4029-0ac01850",
    checkerId: "w-node-_09769ba3-d66e-d0b1-d86a-5e0fc71a402b-0ac01850",
    lineId: undefined,
  },
  {
    id: "w-node-_0685c628-c535-0f2f-d40f-5fc514d3367b-0ac01850",
    checkerId: "w-node-_0685c628-c535-0f2f-d40f-5fc514d3367d-0ac01850",
    lineId: undefined,
  },
];

export function Comparison() {
  return (
    <div id="diferenca" className="benefit-section">
      <div data-smiley="" className="top-smiley is-benefit">
        <TechBadgeSvg />
      </div>
      <div className="container smaller">
        <div className="grid-layout">
          <div
            id="w-node-_6f3e86b5-5cf7-4a62-19af-d6d71a8517d6-0ac01850"
            className="img-wrapper methodology-img-wrapper"
          >
            <img
              src="/assets/images/methodology-office.webp"
              alt="Ambiente integrado de engenharia elétrica e consultoria regulatória Renovera"
              className="img methodology-main-img"
              loading="lazy"
              width={1011}
              height={1450}
            />
          </div>
          <div
            id="w-node-_32be253f-aa6e-8103-6d3f-40e63162832f-0ac01850"
            className="benefit-wrapper"
          >
            <h2 className="benefit-heading">
              <span data-highlight-text="" className="light-green-span">
                Não basta projetar.
              </span>
              <br />
              É preciso conectar as soluções.
            </h2>

            <div
              data-benefit-table=""
              className="benefit-table"
              role="table"
              aria-label="Comparativo entre abordagem integrada Renovera e uma abordagem isolada"
            >
              <div
                id="w-node-_244ca70f-4fb8-4324-7d1f-6e5cebd97f1e-0ac01850"
                className="benefit-table-title-wrapper"
                role="row"
              >
                <div
                  id="w-node-da33aad3-e9be-fd6f-a8b0-79237ed37994-0ac01850"
                  className="benefit-table-title"
                  role="columnheader"
                >
                  Abordagem Integrada Renovera vs. Isolada
                </div>
                <div
                  id="w-node-d5a0031d-8b6e-5d4a-5e75-e26d1c40acd5-0ac01850"
                  className="benefit-table-title-img is-desktop flex items-center justify-center font-bold text-base text-[#022417]"
                  style={{ color: "var(--color-navy-deep)" }}
                >
                  RENOVERA
                </div>
                <div
                  id="w-node-_2d859f91-413d-fec0-5be3-c31abf68249b-0ac01850"
                  className="benefit-table-title-img is-mobile benefit-comigo font-bold"
                  role="columnheader"
                >
                  Renovera
                </div>
                <div
                  id="w-node-_78d70ec8-c380-1f74-9296-fa312e5af0f4-0ac01850"
                  className="benefit-table-title"
                  role="columnheader"
                >
                  Abordagem Isolada
                </div>
              </div>
              <div
                data-benefit-table-line=""
                id="w-node-dabaf014-7b8f-d5cf-7507-3b9733e65ad8-0ac01850"
                className="sub-line"
              />
              <div
                id="w-node-_89929daf-28b9-a774-1cdd-9d54c6ee4049-0ac01850"
                className="benefit-item-wrapper"
              >
                {COMPARISON_ITEMS_RENOVERA.map((item, idx) => {
                  const ids = ROW_IDS[idx] ?? ROW_IDS[0];
                  return (
                    <div key={item.integrated} style={{ display: "contents" }}>
                      {idx > 0 && (
                        <div
                          data-benefit-table-line=""
                          id={ids.lineId}
                          className="line"
                        />
                      )}
                      <div className="benefit-table-item" role="row">
                        <div
                          id={ids.id}
                          className="benefit-item-title"
                          role="cell"
                        >
                          <strong>{item.integrated}</strong>
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.75em",
                              color: "var(--color-text-secondary)",
                              marginTop: "0.15em",
                            }}
                          >
                            vs. {item.isolated}
                          </span>
                        </div>
                        <div
                          id={ids.checkerId}
                          className="benefit-checker-inner"
                          role="cell"
                        >
                          <div
                            className="benefit-item-check"
                            title="Abordagem integrada Renovera"
                          >
                            <span
                              data-benefit-table-check=""
                              className="check-wrap"
                            >
                              <svg
                                viewBox="0 0 20 20"
                                className="check"
                                aria-label="Sim: Abordagem integrada Renovera"
                                role="img"
                                fill="none"
                              >
                                <path
                                  d="M4 10.5l4 4 8-9"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                          <div
                            className="benefit-item-x"
                            title="Abordagem isolada"
                          >
                            <svg
                              viewBox="0 0 20 20"
                              className="check"
                              aria-label="Não: Abordagem isolada"
                              role="img"
                              fill="none"
                            >
                              <path
                                d="M5 5l10 10M15 5L5 15"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
