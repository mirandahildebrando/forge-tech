"use client";
import { useEffect, useRef } from "react";
import Mark from "./Mark";

const Title = () => (
  <h1>
    Sites e apps
    <br />
    <i>que vendem.</i>
  </h1>
);

export default function Hero({ wa }) {
  const el = useRef(null);

  useEffect(() => {
    const hero = el.current;
    if (!hero) return;

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      hero.style.setProperty("--x", "60%");
      hero.style.setProperty("--y", "45%");
      return;
    }

    let targetX = innerWidth * 0.68;
    let targetY = innerHeight * 0.42;
    let x = targetX;
    let y = targetY;
    let hovering = false;
    let t = 0;
    let raf;

    const onMove = (e) => {
      hovering = true;
      const r = hero.getBoundingClientRect();
      targetX = e.clientX - r.left;
      targetY = e.clientY - r.top;
    };
    const onLeave = () => { hovering = false; };

    const loop = () => {
      t += 0.006;
      // sem mouse (ou no celular), a luz passeia sozinha
      if (!hovering) {
        targetX = hero.clientWidth * (0.5 + 0.28 * Math.sin(t));
        targetY = hero.clientHeight * (0.45 + 0.2 * Math.cos(t * 1.3));
      }
      x += (targetX - x) * 0.07;
      y += (targetY - y) * 0.07;
      hero.style.setProperty("--x", `${x}px`);
      hero.style.setProperty("--y", `${y}px`);
      raf = requestAnimationFrame(loop);
    };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <header className="hero" ref={el} id="topo">
      <div className="lit" aria-hidden="true">
        <div className="grid" />
        <Mark className="bigmark" />
        <div className="wrap"><Title /></div>
      </div>

      <div className="wrap base">
        <Title />
        <p>
          Criamos sites, aplicativos e sistemas sob medida. Do zero, para o seu
          negócio, sem modelo pronto.
        </p>
        <div className="acts">
          <a className="ghost" href={wa}>Pedir orçamento</a>
          <a className="ghost" href="#trabalho">Ver trabalhos</a>
        </div>
      </div>

      <span className="scroll">Passe o mouse e role</span>
    </header>
  );
}
