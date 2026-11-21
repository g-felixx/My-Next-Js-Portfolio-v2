"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { PixelSprite } from "@/components/pixel/PixelSprite";
import { DOLPHIN_FRAMES, DOLPHIN_H, DOLPHIN_PALETTE, DOLPHIN_W } from "@/components/pixel/sprites";

// ---------------------------------------------------------------------------
// O golfinho: um só elemento fixo que acompanha a página.
//   casa (hero)  ->  navegando com o scroll  ->  descansando na linha d'água, perto do contato
// O estado nunca é "sorteado": sai só da posição do scroll e das âncoras
//   [data-mascot-home]  e  [data-mascot-rest]
// A posição só muda por passos limitados (VMAX por quadro), então ele nunca teleporta.
// Com prefers-reduced-motion o componente não renderiza: o hero mostra o sprite parado.
// ---------------------------------------------------------------------------

const VMAX = 40;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const suave = (t: number) => t * t * (3 - 2 * t);

export default function Mascot() {
  const reduced = useReducedMotion();
  const actor = useRef<HTMLDivElement>(null);
  const quadros = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = actor.current;
    if (reduced || !el) return;

    const home = document.querySelector<HTMLElement>("[data-mascot-home]");
    const rest = document.querySelector<HTMLElement>("[data-mascot-rest]");
    let k = 4;
    let pos: { x: number; y: number } | null = null;
    let vx = 0;
    let face = 1;
    let quadro = -1;
    let raf = 0;

    const tamanho = () => {
      k = innerWidth < 640 ? 2 : innerWidth < 1100 ? 3 : 4;
      el.style.width = `${DOLPHIN_W * k}px`;
      el.style.height = `${DOLPHIN_H * k}px`;
    };

    const loop = (agora: number) => {
      raf = requestAnimationFrame(loop);
      const vw = innerWidth;
      const vh = innerHeight;
      const W = DOLPHIN_W * k;
      const H = DOLPHIN_H * k;
      const y = scrollY;
      const bob = Math.sin(agora / 420) * 6;

      // rota de cruzeiro: margem direita, ondulando com o scroll
      const estreito = vw < 640;
      const cruzeiro = estreito
        ? { x: vw - W / 2 - 8, y: vh - H / 2 - 18 + bob }
        : {
            x: vw - W / 2 - 20 - (0.5 + 0.5 * Math.sin(y / 420)) * Math.min(120, vw * 0.08),
            y: vh * 0.62 + Math.cos(y / 300) * vh * 0.07 + bob,
          };

      // casa: o ponto marcado no hero (acompanha o scroll porque é lido a cada quadro)
      let alvo = cruzeiro;
      if (home) {
        const r = home.getBoundingClientRect();
        const casa = { x: r.left + r.width / 2, y: r.top + r.height / 2 + bob };
        alvo = {
          x: lerp(casa.x, cruzeiro.x, suave(clamp(y / (vh * 0.5), 0, 1))),
          y: lerp(casa.y, cruzeiro.y, suave(clamp(y / (vh * 0.5), 0, 1))),
        };
      }

      // descanso: perto do contato ele vai para a linha d'água
      if (rest) {
        const r = rest.getBoundingClientRect();
        // entra pelo fundo da tela e solta o golfinho de volta ao cruzeiro se a faixa sair por cima
        const q = suave(clamp((vh * 0.95 - r.top) / (vh * 0.35), 0, 1)) * suave(clamp((r.bottom + vh * 0.05) / (vh * 0.3), 0, 1));
        if (q > 0) {
          alvo = {
            x: lerp(alvo.x, r.left + r.width / 2, q),
            y: lerp(alvo.y, r.top + r.height / 2 + bob * 0.5, q),
          };
        }
      }

      if (!pos) {
        pos = { ...alvo }; // primeira aparição: já no lugar, sem voo de entrada
        el.style.opacity = "1";
      }

      // anda até o alvo com passo limitado
      const dx = alvo.x - pos.x;
      const dy = alvo.y - pos.y;
      const d = Math.hypot(dx, dy);
      let sx = 0;
      let sy = 0;
      if (d > 0.75) {
        const s = Math.min(Math.max(d * 0.1, Math.min(d, 1.2)), VMAX);
        sx = (dx / d) * s;
        sy = (dy / d) * s;
        pos.x += sx;
        pos.y += sy;
      }
      vx = lerp(vx, sx, 0.2);
      if (Math.abs(vx) > 1.2) face = vx > 0 ? 1 : -1; // histerese: só vira com movimento claro

      const rot = clamp(sy * 1.4, -20, 20) * face;
      el.style.transform = `translate3d(${Math.round(pos.x - W / 2)}px, ${Math.round(pos.y - H / 2)}px, 0) rotate(${rot.toFixed(1)}deg) scaleX(${face})`;

      // batida de cauda: mais rápida quando ele se desloca
      const rapido = Math.hypot(sx, sy) > 3;
      const idx = Math.floor(agora / (rapido ? 90 : 170)) % DOLPHIN_FRAMES.length;
      if (idx !== quadro) {
        quadros.current.forEach((f, i) => f && (f.style.visibility = i === idx ? "visible" : "hidden"));
        quadro = idx;
      }
    };

    tamanho();
    addEventListener("resize", tamanho);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", tamanho);
    };
  }, [reduced]);

  // Sempre renderiza (servidor e cliente iguais, sem erro de hidratação). Com movimento reduzido
  // o laço não inicia e o elemento fica em opacity-0; o sprite parado fica no hero.
  return (
    <div
      ref={actor}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 opacity-0 transition-opacity duration-500 will-change-transform filter-[drop-shadow(0_0_8px_hsl(var(--primary)/0.35))]"
      style={{ width: DOLPHIN_W * 4, height: DOLPHIN_H * 4 }}
    >
      {DOLPHIN_FRAMES.map((grid, i) => (
        <div
          key={i}
          ref={(n) => {
            quadros.current[i] = n;
          }}
          className="absolute inset-0"
          style={{ visibility: i === 0 ? "visible" : "hidden" }}
        >
          <PixelSprite grid={grid} palette={DOLPHIN_PALETTE} className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
