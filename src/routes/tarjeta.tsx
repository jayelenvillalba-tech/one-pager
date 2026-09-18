import { createFileRoute } from "@tanstack/react-router";
import { Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/tarjeta")({ component: TarjetaPage });

/** URL del one-pager desplegado — actualizar con el dominio final de Vercel */
const ONEPAGER_URL = "https://checomex.vercel.app";

/** Genera la URL de un QR via API pública (no requiere dependencia npm) */
function qrImageUrl(data: string, size = 200) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}&bgcolor=f3ece3&color=0b1c2c&margin=0`;
}

function TarjetaPage() {
  return (
    <div className="min-h-dvh bg-bg">
      {/* Toolbar — no se imprime */}
      <div className="no-print sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Button asChild variant="ghost" size="sm">
            <a href="/">
              <ArrowLeft className="mr-2 size-4" /> Volver al one-pager
            </a>
          </Button>
          <Button size="sm" onClick={() => window.print()}>
            <Printer className="mr-2 size-4" /> Imprimir / PDF
          </Button>
        </div>
      </div>

      {/* Instrucciones — no se imprimen */}
      <div className="no-print mx-auto max-w-4xl px-4 py-10">
        <h1 className="font-display text-3xl text-fg">Tarjeta de Presentación</h1>
        <p className="mt-2 text-sm text-muted leading-relaxed">
          Hacé clic en <strong className="text-fg">"Imprimir / PDF"</strong> y
          elegí <em>"Guardar como PDF"</em> para exportar en alta resolución. En
          la imprenta, indicá formato{" "}
          <strong className="text-fg">85 × 55 mm</strong> a 300 dpi.
        </p>
        <p className="mt-2 text-sm text-muted">
          El QR apunta a: <code className="text-accent">{ONEPAGER_URL}</code>
        </p>
      </div>

      {/* ═══ TARJETAS — se imprimen ═══ */}
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-4 pb-20">
        {/* Cara frontal */}
        <CardSide label="Frente">
          <div className="flex h-full flex-col justify-between p-8">
            {/* Top — Logo */}
            <div>
              <p className="font-display text-2xl tracking-tight text-[#f3ece3]">
                Che.Comex
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#c5d4cf]">
                Ecosistema de Comercio Exterior
              </p>
            </div>

            {/* Bottom — Person info */}
            <div>
              <p className="font-display text-lg text-[#f3ece3]">
                Jezabel Ayelén Villalba
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#c5d4cf]">
                Fundadora
              </p>

              <div className="mt-4 space-y-1 text-[11px] text-[#9aa8b0]">
                <p>j.ayelen.villalba@gmail.com</p>
                <p>+54 3476 591351</p>
                <p>linkedin.com/in/ayelen-villalba-881079186</p>
              </div>
            </div>
          </div>
        </CardSide>

        {/* Cara posterior */}
        <CardSide label="Dorso">
          <div className="flex h-full flex-col items-center justify-center gap-5 p-8">
            {/* QR */}
            <div className="rounded-xl bg-[#f3ece3] p-3">
              <img
                src={qrImageUrl(ONEPAGER_URL, 200)}
                alt={`QR code: ${ONEPAGER_URL}`}
                width={120}
                height={120}
                className="block"
                crossOrigin="anonymous"
              />
            </div>

            <div className="text-center">
              <p className="font-display text-lg text-[#f3ece3]">
                Che.Comex
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#9aa8b0]">
                Escaneá para conocer el proyecto
              </p>
            </div>

            <p className="text-[9px] uppercase tracking-[0.18em] text-[#c5d4cf]">
              Expo EXA · San Lorenzo · Sep 2026
            </p>
          </div>
        </CardSide>
      </div>
    </div>
  );
}

/** Card frame — 85×55mm at screen resolution, scaled up for visibility */
function CardSide({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[480px]">
      <p className="no-print mb-2 text-xs uppercase tracking-[0.15em] text-muted">
        {label}
      </p>
      <div
        className="overflow-hidden rounded-xl border border-[#243746] shadow-2xl"
        style={{
          aspectRatio: "85 / 55",
          background: "linear-gradient(145deg, #0f2233 0%, #0b1c2c 40%, #101e2b 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
