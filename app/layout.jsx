import { Saira, Inter } from "next/font/google";
import "./globals.css";
import Fx from "../components/Fx";

const display = Saira({ subsets: ["latin"], variable: "--d", axes: ["wdth"], display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--b", display: "swap" });

export const metadata = {
  title: "Forge Tech | Sites, aplicativos e sistemas sob medida",
  description:
    "A Forge Tech cria sites, aplicativos e sistemas sob medida para negócios que querem vender mais.",
  openGraph: {
    title: "Forge Tech",
    description: "Tem uma ideia? Vamos construir.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = { themeColor: "#0d0e10", viewportFit: "cover" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Fx />
      </body>
    </html>
  );
}
