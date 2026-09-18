import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  /** Final numeric value to count to */
  value: number;
  /** Text to display after the number (e.g. "%", "×", "M") */
  suffix?: string;
  /** Text to display before the number (e.g. "USD ", "$") */
  prefix?: string;
  /** Duration of animation in ms */
  duration?: number;
  /** Use locale formatting with comma for thousands */
  useLocale?: boolean;
  /** Decimal places to show */
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1800,
  useLocale = false,
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      if (useLocale) {
        setDisplay(
          current.toLocaleString("es-AR", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }),
        );
      } else {
        setDisplay(current.toFixed(decimals).replace(".", ","));
      }

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, useLocale, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
