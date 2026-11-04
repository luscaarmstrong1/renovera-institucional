import React from "react";
import { companyConfig } from "@/config/company";

export const metadata = {
  title: "Política de Privacidade | Renovera Energias Renováveis",
  description: "Diretrizes de privacidade e tratamento de dados conforme a LGPD (Lei nº 13.709/2018)."
};

export default function PrivacidadePage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="badge-renovera-dark mb-2">Conformidade Legal</span>
          <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#033118]">
            Política de Privacidade
          </h1>
          <p className="text-xs text-[#687873] mt-2">
            Última atualização: Novembro de 2026 • Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>
        </div>

        <div className="prose max-w-none text-sm text-[#40504C] space-y-6 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">1. Informações Gerais</h2>
            <p>
              A <strong>{companyConfig.legalName}</strong> valoriza a segurança e a privacidade de seus clientes, parceiros e usuários deste website. Esta Política descreve como coletamos, utilizamos e protegemos seus dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">2. Coleta de Dados</h2>
            <p>
              Coletamos exclusivamente as informações fornecidas voluntariamente através do formulário de contato institucional ou canais de comunicação, incluindo: nome completo, e-mail corporativo, telefone/WhatsApp, empresa e mensagens de detalhamento técnico.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">3. Finalidade do Tratamento</h2>
            <p>
              Os dados coletados são utilizados unicamente para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Retorno técnico-comercial para solicitações de serviços de engenharia;</li>
              <li>Elaboração de propostas e análises preliminares de viabilidade técnica ou regulatória;</li>
              <li>Cumprimento de obrigações legais perante órgãos de classe (CREA/CFT) e concessionárias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">4. Não Compartilhamento com Terceiros</h2>
            <p>
              A Renovera não comercializa nem compartilha dados de usuários com terceiros para fins de marketing ou publicidade. Informações técnicas de projetos são compartilhadas estritamente com concessionárias de energia no âmbito formal do processo de conexão acordado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#033118] mb-2">5. Contato do Encarregado de Dados (DPO)</h2>
            <p>
              Para dúvidas sobre o tratamento de dados ou solicitação de exclusão, entre em contato através do e-mail: <a href={`mailto:${companyConfig.email}`} className="text-[#0A4B2D] underline">{companyConfig.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
