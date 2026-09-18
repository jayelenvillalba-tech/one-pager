import { cn } from "@/lib/utils";

export function Cite({ n, className }: { n: string; className?: string }) {
  return (
    <a
      href={`#fuente-${n}`}
      className={cn(
        "ml-0.5 align-super text-xs text-accent no-underline hover:underline",
        className,
      )}
      aria-label={`Fuente ${n}`}
    >
      [{n}]
    </a>
  );
}
