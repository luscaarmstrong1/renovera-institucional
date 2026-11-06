"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldCheck, Settings2 } from "lucide-react";

const COOKIE_STORAGE_KEY = "renovera_cookie_consent_v7";

export interface CookiePreferences {
  essential: true;
  analytics: boolean;
  functional: boolean;
  updatedAt: string;
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [functional, setFunctional] = useState(true);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // ignore storage errors
    }

    const onOpenPrefs = () => {
      setVisible(true);
      setCustomizing(true);
    };
    window.addEventListener("renovera:open-cookie-preferences", onOpenPrefs);
    return () => {
      window.removeEventListener("renovera:open-cookie-preferences", onOpenPrefs);
    };
  }, []);

  const savePreferences = (prefs: Omit<CookiePreferences, "essential" | "updatedAt">) => {
    const payload: CookiePreferences = {
      essential: true,
      analytics: prefs.analytics,
      functional: prefs.functional,
      updatedAt: new Date().toISOString(),
    };
    try {
      window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
      window.dispatchEvent(new CustomEvent("renovera:cookie-consent-updated", { detail: payload }));
    } catch {
      // ignore
    }
    setVisible(false);
    setCustomizing(false);
  };

  if (!visible) return null;

  return (
    <div
      data-cookie-banner="true"
      role="region"
      aria-label="Preferências de Privacidade e Cookies"
      className="fixed bottom-4 left-4 right-4 z-[9999] max-w-4xl mx-auto bg-[#022417] text-white border border-[#FED15D]/40 rounded-2xl shadow-2xl p-4 sm:p-5"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FED15D]">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacidade, Cookies &amp; Transparência (LGPD)</span>
          </div>
          <p className="text-xs text-[#D1DFD8] leading-relaxed">
            Utilizamos cookies estritamente necessários para o funcionamento seguro deste portal institucional. Nenhum script analítico opcional é ativado sem o seu consentimento. Consulte nossa{" "}
            <Link href="/cookies" className="text-[#FED15D] underline hover:text-white">
              Política de Cookies
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="text-[#FED15D] underline hover:text-white">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <button
            type="button"
            data-cookie-action="customize"
            onClick={() => setCustomizing((prev) => !prev)}
            className="px-3.5 py-2 rounded-full text-xs font-semibold border border-white/25 text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5"
          >
            <Settings2 className="w-3.5 h-3.5" />
            Personalizar
          </button>
          <button
            type="button"
            data-cookie-action="reject-optional"
            onClick={() => savePreferences({ analytics: false, functional: false })}
            className="px-3.5 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Rejeitar opcionais
          </button>
          <button
            type="button"
            data-cookie-action="accept-all"
            onClick={() => savePreferences({ analytics: true, functional: true })}
            className="px-4 py-2 rounded-full text-xs font-bold bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c] transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>

      {customizing && (
        <div
          data-cookie-customize-panel="true"
          className="mt-4 pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"
        >
          <div className="bg-[#033118] border border-white/10 rounded-lg p-3">
            <div className="flex items-center justify-between font-bold text-white mb-1">
              <span>1. Essenciais</span>
              <span className="text-[0.65rem] uppercase px-2 py-0.5 rounded bg-[#FED15D]/20 text-[#FED15D]">
                Sempre Ativos
              </span>
            </div>
            <p className="text-[0.7rem] text-[#D1DFD8]">
              Necessários para navegação, segurança anti-spam e memorização desta escolha.
            </p>
          </div>

          <label className="bg-[#033118] border border-white/10 rounded-lg p-3 cursor-pointer block">
            <div className="flex items-center justify-between font-bold text-white mb-1">
              <span>2. Funcionais</span>
              <input
                type="checkbox"
                checked={functional}
                onChange={(e) => setFunctional(e.target.checked)}
                className="rounded border-white/30 text-[#FED15D] focus:ring-[#FED15D]"
              />
            </div>
            <p className="text-[0.7rem] text-[#D1DFD8]">
              Lembram o segmento ou serviço selecionado durante o preenchimento de formulários.
            </p>
          </label>

          <label className="bg-[#033118] border border-white/10 rounded-lg p-3 cursor-pointer block">
            <div className="flex items-center justify-between font-bold text-white mb-1">
              <span>3. Analíticos</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="rounded border-white/30 text-[#FED15D] focus:ring-[#FED15D]"
              />
            </div>
            <p className="text-[0.7rem] text-[#D1DFD8]">
              Permitem medir desempenho de páginas de forma agregada quando métricas estiverem ativas.
            </p>
          </label>

          <div className="sm:col-span-3 flex justify-end pt-1">
            <button
              type="button"
              onClick={() => savePreferences({ analytics, functional })}
              className="px-4 py-2 rounded-full text-xs font-bold bg-[#FED15D] text-[#033118] hover:bg-[#e5ba4c]"
            >
              Salvar Preferências Selecionadas
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
