"use client";
import { useTheme } from "next-themes";
import { useCallback, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "rectangle"
  | "hexagon"
  | "star";

interface ThemeToggleProps {
  variant?: Variant;
  duration?: number;
  fromCenter?: boolean;
  className?: string;
}

type StartViewTransition = (callback: () => void) => {
  ready: Promise<void>;
  finished: Promise<void>;
};

function buildShape(
  variant: Variant,
  cx: number,
  cy: number,
  radius: number,
): string {
  if (variant === "circle") {
    return `circle(${radius}px at ${cx}px ${cy}px)`;
  }

  let points: Array<[number, number]>;

  switch (variant) {
    case "triangle":
      points = [
        [-90, 1],
        [30, 1],
        [150, 1],
      ];
      break;
    case "diamond":
      points = [
        [-90, 1],
        [0, 1],
        [90, 1],
        [180, 1],
      ];
      break;
    case "square":
      points = [
        [-135, 1],
        [-45, 1],
        [45, 1],
        [135, 1],
      ];
      break;
    case "rectangle":
      points = [
        [-150, 1],
        [-30, 1],
        [30, 1],
        [150, 1],
      ];
      break;
    case "hexagon":
      points = [
        [-90, 1],
        [-30, 1],
        [30, 1],
        [90, 1],
        [150, 1],
        [-150, 1],
      ];
      break;
    case "star":
      points = [];
      for (let i = 0; i < 10; i++) {
        const angle = -90 + i * 36;
        const ratio = i % 2 === 0 ? 1 : 0.42;
        points.push([angle, ratio]);
      }
      break;
    default:
      return `circle(${radius}px at ${cx}px ${cy}px)`;
  }

  const coords = points.map(([angleDeg, ratio]) => {
    const rad = (angleDeg * Math.PI) / 180;
    const r = radius * ratio;
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    return `${x.toFixed(2)}px ${y.toFixed(2)}px`;
  });

  return `polygon(${coords.join(", ")})`;
}

export function ThemeToggle({
  variant = "circle",
  duration = 700,
  fromCenter = true,
  className,
}: ThemeToggleProps = {}) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      const isDark = resolvedTheme === "dark";
      const next = isDark ? "light" : "dark";

      const startViewTransition = (
        document as Document & { startViewTransition?: StartViewTransition }
      ).startViewTransition;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

      if (typeof startViewTransition !== "function" || prefersReducedMotion) {
        setTheme(next);
        return;
      }

      let cx: number;
      let cy: number;
      if (fromCenter) {
        cx = window.innerWidth / 2;
        cy = window.innerHeight / 2;
      } else {
        const rect = event.currentTarget.getBoundingClientRect();
        cx = rect.left + rect.width / 2;
        cy = rect.top + rect.height / 2;
      }

      const maxRadius = Math.hypot(
        Math.max(cx, window.innerWidth - cx),
        Math.max(cy, window.innerHeight - cy),
      );

      const transition = startViewTransition.call(document, () => {
        flushSync(() => setTheme(next));
      });

      try {
        await transition.ready;
      } catch {
        return;
      }

      const startShape = buildShape(variant, cx, cy, 0);
      const endShape = buildShape(variant, cx, cy, maxRadius);

      document.documentElement.animate(
        { clipPath: [startShape, endShape] },
        {
          duration,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    },
    [duration, fromCenter, resolvedTheme, setTheme, variant],
  );

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={handleClick}
      className={cn(
        "p-2 rounded-lg hover:bg-secondary transition-all duration-300 active:scale-95",
        className,
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-amber-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}
