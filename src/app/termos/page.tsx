import React from "react";
import { companyConfig } from "@/config/company";

export const metadata = {
  title: "Termos de Uso | Renovera Energias Renováveis",
  description: "Termos e condições de uso das informações e canais digitais da Renovera Energias Renováveis."
};

export default function TermosPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="badge-renovera-dark mb-2">Termos e Condições</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#033118]">
            Termos de Uso
          </h1>
          <p className="text-xs text-[#687873] mt-2">
            Última atualização: Novembro de 2026.
          </p>
        </div>

        <div className="prose max-w-none text-sm text-[#40504C] space-y-6 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">1. Aceitação dos Termos</h2>
            <p>
              Ao navegar neste website institucional da <strong>{companyConfig.legalName}</strong>, o usuário declara concordar integralmente com as disposições aqui estabelecidas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">2. Propriedade Intelectual</h2>
            <p>
              Todos os textos, logotipos, elementos visuais de marca, esquemas conceituais de engenharia e materiais publicados neste website são de titularidade exclusiva da Renovera Energias Renováveis Ltda ou foram devidamente licenciados, sendo vedada a reprodução comercial sem prévia autorização.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">3. Natureza das Informações Técnicas</h2>
            <p>
              O conteúdo deste website possui finalidade institucional e orientativa sobre os serviços prestados. As soluções técnicas definitivas, pareceres regulatórios e memoriais de cálculo dependem de contratação formal com elaboração de Anotação de Responsabilidade Técnica (ART).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
