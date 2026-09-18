import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past ~70% of viewport height
      setVisible(window.scrollY > window.innerHeight * 0.7);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contacto"
      aria-label="Conversemos"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-fg shadow-lg shadow-accent/20 transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      Conversemos <ArrowRight className="size-4" />
    </a>
  );
}
