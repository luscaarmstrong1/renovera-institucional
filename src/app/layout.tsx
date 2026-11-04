import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Renovera Energias Renováveis | Engenharia, Energia e Soluções Técnicas",
  description: "Soluções integradas em projetos elétricos, energia solar, consultoria regulatória, automação e infraestrutura de mobilidade elétrica.",
  icons: {
    icon: "/assets/brand/favicon.svg",
    apple: "/assets/brand/apple-touch-icon.png"
  },
  openGraph: {
    title: "Renovera Energias Renováveis",
    description: "Engenharia elétrica, consultoria regulatória e infraestrutura técnica de energia.",
    url: "https://renovera-institucional.vercel.app",
    siteName: "Renovera Energias Renováveis",
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
