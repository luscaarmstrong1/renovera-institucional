# Relatório Técnico Automatizado — Renovera Institucional V7
- **Data de Execução:** 2026-11-06T13:22:36.963Z
- **Erros de Console:** 0
- **Erros de Página:** 0
- **Requisições Falhas:** 0

## 1. Métricas Reais de Performance (Core Web Vitals & Navigation Timing)
- **Desktop (1440x900):** TTFB: 7ms | FCP: 328ms | LCP: 328ms | CLS: 0.0042
- **Mobile (375x812):** TTFB: 4ms | FCP: 276ms | LCP: 276ms | CLS: 0.0003

## 2. Verificação nas 11 Larguras Obrigatórias (Homepage)
| Viewport | Largura | ScrollWidth | Overflow (px) | Imagens Quebradas |
| :--- | :---: | :---: | :---: | :---: |
| 320-mobile-xs | 320px | 320px | 0px | 0 |
| 360-mobile-s | 360px | 360px | 0px | 0 |
| 375-mobile-m | 375px | 375px | 0px | 0 |
| 390-mobile-l | 390px | 390px | 0px | 0 |
| 430-mobile-xl | 430px | 430px | 0px | 0 |
| 768-tablet-p | 768px | 768px | 0px | 0 |
| 820-tablet-l | 820px | 820px | 0px | 0 |
| 1024-laptop-s | 1024px | 1024px | 0px | 0 |
| 1280-laptop-m | 1280px | 1280px | 0px | 0 |
| 1440-desktop | 1440px | 1440px | 0px | 0 |
| 1920-fhd | 1920px | 1920px | 0px | 0 |

## 3. Verificação das 9 Landing Pages Individuais (/solucoes/[slug])
| Slug | HTTP | Campos Dinâmicos | Problema | Como Funciona | Etapas | FAQ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| `/solucoes/reno-adviser` | 200 | 6 | OK | OK | OK | OK |
| `/solucoes/reno-projetos` | 200 | 5 | OK | OK | OK | OK |
| `/solucoes/reno-performance` | 200 | 4 | OK | OK | OK | OK |
| `/solucoes/reno-invest` | 200 | 4 | OK | OK | OK | OK |
| `/solucoes/reno-protect` | 200 | 4 | OK | OK | OK | OK |
| `/solucoes/reno-supply` | 200 | 5 | OK | OK | OK | OK |
| `/solucoes/reno-engenharia` | 200 | 4 | OK | OK | OK | OK |
| `/solucoes/reno-partner` | 200 | 4 | OK | OK | OK | OK |
| `/solucoes/reno-energy-hub` | 200 | 4 | OK | OK | OK | OK |

## 4. Estados da API /api/contact
- **Validation Failed:** HTTP 400 (`validation_failed`)
- **Spam Honeypot:** HTTP 400 (`blocked_spam`)
- **Envio Válido (Sem CRM externo):** HTTP 200 (`payload_validated_message_prepared`, `stored: false`, `leadId: null`)

## 5. SEO Técnico, Cookies e 404
- **Banner Cookies:** Visível inicialmente: true | Personalizar: true | Oculto após aceitar: true
- **Sitemap (/sitemap.xml):** HTTP 200 (Blog: true, Integradores: true)
- **Robots (/robots.txt):** HTTP 200
- **Rota Inexistente (404 Real):** HTTP 404