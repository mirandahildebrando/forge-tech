"use client";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import { MOBILE_URL, DESKTOP_URL } from "../lib/whatsapp";

const DELAY = 2500;

export default function WaRedirect() {
  const [url, setUrl] = useState(MOBILE_URL);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const target = isMobile ? MOBILE_URL : DESKTOP_URL;
    setUrl(target);
    // replace: o botão "voltar" do navegador volta para o site, sem redirecionar de novo
    const id = setTimeout(() => window.location.replace(target), DELAY);
    return () => clearTimeout(id);
  }, []);

  return (
    <main className="go">
      <div className="go-glow" aria-hidden="true" />
      <div className="go-card">
        <Mark className="go-mark" />
        <h1>
          Abrindo seu <i>WhatsApp</i>
        </h1>
        <p>
          Você vai falar direto com a Forge Tech. Conte sua ideia e receba um
          orçamento sem compromisso.
        </p>
        <div className="go-bar" aria-hidden="true">
          <span style={{ animationDuration: `${DELAY}ms` }} />
        </div>
        <a className="btn big" href={url}>Abrir agora</a>
        <a className="go-back" href="/">Voltar ao site</a>
      </div>
    </main>
  );
}
