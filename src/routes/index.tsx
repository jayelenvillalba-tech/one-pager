import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowRightCircle,
  CheckCircle2,
  FileText,
  Globe2,
  Landmark,
  Scale,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Cite } from "@/components/cite";
import { sources } from "@/data/sources";
import { useInView } from "@/hooks/useInView";
import { AnimatedCounter } from "@/components/animated-counter";
import { FloatingCTA } from "@/components/floating-cta";

export const Route = createFileRoute("/")({ component: Home });

/* ─── Wrapper for scroll-triggered animation ─── */
function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const variantClass =
    variant === "left"
      ? "animate-in-left"
      : variant === "right"
        ? "animate-in-right"
        : variant === "scale"
          ? "animate-in-scale"
          : "animate-in";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${inView ? "in-view" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ═════════════════════════════════════════════════
   HOME
   ═════════════════════════════════════════════════ */

function Home() {
  return (
    <div className="min-h-dvh bg-bg">
      <Header />
      <Hero />
      <div className="section-divider" />
      <SystemProblem />
      <Diagnosis />
      <CheckinAnalogy />
      <SolutionSteps />
      <CaseSimulation />
      <LegalBoundaries />
      <TerritorialAnchor />
      <TradeTechVision />
      <ProjectStatusAndBusinessModel />
      <TwoWayAsk />
      <ContactSection />
      <Sources />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

/* ─── HEADER ─── */

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg/85 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-border/80 shadow-lg shadow-bg/50" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-display text-xl tracking-tight text-fg">
          Che.Comex
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a href="#sistema" className="transition-colors hover:text-fg">
            El Problema
          </a>
          <a href="#diagnostico" className="transition-colors hover:text-fg">
            Diagnóstico
          </a>
          <a href="#checkin" className="transition-colors hover:text-fg">
            El Check-in
          </a>
          <a href="#simulacion" className="transition-colors hover:text-fg">
            Simulación
          </a>
          <a href="#san-lorenzo" className="transition-colors hover:text-fg">
            San Lorenzo
          </a>
          <a href="#alianza" className="transition-colors hover:text-fg">
            Ronda EXA
          </a>
          <a href="#fuentes" className="transition-colors hover:text-fg">
            Fuentes
          </a>
        </nav>
        <Button asChild size="sm">
          <a href="#alianza">Ronda de Negocios</a>
        </Button>
      </div>
    </header>
  );
}

/* ─── HERO ─── */

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!heroRef.current) return;
      const img = heroRef.current.querySelector<HTMLElement>(".hero-parallax");
      if (img) {
        img.style.transform = `translateY(${window.scrollY * 0.22}px) scale(1.08)`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} id="inicio" className="relative isolate min-h-[92dvh] overflow-hidden">
      <img
        src="/media/hero-port.jpg"
        alt="Puerto industrial de San Lorenzo sobre el Río Paraná al atardecer"
        className="hero-parallax absolute inset-0 size-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-bg/20 to-transparent" />

      <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6">
        {/* Badge EXA 2026 */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-bg-elevated/70 px-4 py-1.5 backdrop-blur-md">
          <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
          <span className="badge-shimmer text-xs font-semibold uppercase tracking-[0.2em]">
            EXPO EXA 2026 · PARQUE INDUSTRIAL Y LOGÍSTICO SAN LORENZO
          </span>
        </div>

        <h1 className="max-w-4xl font-display text-4xl leading-[1.06] text-fg sm:text-6xl lg:text-7xl">
          La infraestructura digital para que la PyME conquiste el mundo.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper sm:text-lg">
          Che.Comex nace en el epicentro portuario de San Lorenzo para transformar la dispersión
          regulatoria, arancelaria y documental del comercio exterior en un recorrido
          predecible, validado y accesible.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="group">
            <a href="#diagnostico">
              Auditoría del Diagnóstico{" "}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="#checkin">
              El Check-in del Comex{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator mt-12 flex flex-col items-center gap-1 self-center text-muted/60">
          <span className="text-[10px] uppercase tracking-widest text-muted/80">Scroll</span>
          <ArrowDown className="size-4" />
        </div>
      </div>
    </section>
  );
}

/* ─── 1. EL PROBLEMA SISTÉMICO ─── */

function SystemProblem() {
  return (
    <section id="sistema" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal variant="left">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Análisis de Mercado</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-5xl">
            El problema no es de producto. Es de sistema.
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              Una empresa pequeña o mediana puede fabricar un producto de altísima competitividad,
              pero para salir al mundo no le basta con tener un comprador. Necesita coordinar
              organismos públicos, regímenes aduaneros, certificados de origen, exigencias sanitarias,
              fletes multimodales y costos impositivos.
            </p>
            <p>
              Las grandes corporaciones multinacionales resuelven esta complejidad porque cuentan con
              departamentos enteros de comercio exterior, despachantes propios y espaldas para tolerar
              la prueba y error. La PyME, en cambio, enfrenta esa misma maraña con recursos limitados y
              asesoramientos que a menudo no puede solventar.
            </p>
            <p className="border-l-2 border-accent/40 pl-4 font-medium text-fg italic">
              "Ninguna de estas tareas, por sí sola, parece imposible. El verdadero desafío aparece
              cuando todas deben resolverse al mismo tiempo, sin margen de error ni certeza de costos."
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Scale className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                  Dinamismo Regulatorio 2026
                </p>
                <h3 className="font-display text-xl text-fg">El costo de la incertidumbre</h3>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm text-muted">
              <div className="border-b border-border/80 pb-4">
                <div className="flex items-center justify-between text-fg font-medium">
                  <span>Mayo 2026: Acuerdo MERCOSUR-UE</span>
                  <span className="text-xs text-accent">Ley 27.800</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-muted">
                  Tras la sanción de la Ley 27.800 y su aplicación provisional, la Disposición SSCE
                  1/2026 eliminó el histórico certificado EUR.1, reemplazándolo por la Declaración
                  de Origen en factura. ¿Cuántas PyMEs del interior conocen este beneficio arancelario
                  inmediato?
                  <Cite n="10" />
                </p>
              </div>

              <div className="border-b border-border/80 pb-4">
                <div className="flex items-center justify-between text-fg font-medium">
                  <span>Agosto 2026: Reformulación Courier</span>
                  <span className="text-xs text-accent">ARCA / Comercio</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-muted">
                  Nuevos límites de valor y simplificaciones arancelarias para envíos postales de
                  muestras comerciales. La normativa cambia más rápido de lo que una PyME puede seguir
                  sin herramientas de monitoreo activo.
                  <Cite n="12" />
                </p>
              </div>

              <div>
                <p className="text-xs text-muted/90 leading-relaxed">
                  Resultado: La PyME promedio gasta semanas en consultas preliminares o desiste por
                  miedo a sanciones, demoras en frontera o sobrecostos portuarios.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 2. EL DIAGNÓSTICO AUDITADO ─── */

function Diagnosis() {
  const stats = [
    {
      value: 1.3,
      suffix: "%",
      label: "de las MiPyMEs empleadoras argentinas exporta bienes.",
      note: "Solo ~7.100 firmas de un universo de ~549.000 (Registro Oficial MiPyME). La tesis confirma que apenas el 8% logra sostener exportaciones en el tiempo.",
      cite: "1",
    },
    {
      value: 15,
      suffix: "%",
      label: "o menos del valor exportado del país proviene de PyMEs.",
      note: "Oscila entre 7,8% (CERA) y 15% (Sec. PyME), pese a que las PyMEs representan del 80% al 90% de los operadores registrados que exportan.",
      cite: "1",
    },
    {
      value: 4500,
      suffix: " firmas",
      prefix: "-",
      label: "exportadoras perdió Argentina en los últimos 17 años.",
      note: "De 15.075 firmas en el récord histórico a ~9.400 en 2025. Una contracción estructural que dejó a miles de empresas fuera del mercado global.",
      cite: "4",
    },
    {
      value: 15,
      suffix: "×",
      label: "más horas de cumplimiento documental en América Latina vs. OCDE.",
      note: "35,7 horas en promedio para tramitar papeles de exportación en LATAM vs. 2,3 horas en países de altos ingresos de la OCDE (Doing Business Banco Mundial).",
      cite: "5",
    },
  ];

  return (
    <section id="diagnostico" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Auditoría Estadística</p>
              <h2 className="mt-2 font-display text-3xl text-fg sm:text-5xl">
                Cifras oficiales de una barrera invisible
              </h2>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent/5 px-4 py-2 text-right text-xs text-paper">
              <span className="font-semibold text-fg">INDEC / CAME / CERA</span>
              <p className="text-muted">Actualizado a Septiembre 2026</p>
            </div>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Los datos públicos demuestran que el sistema actual no está diseñado para incorporar
            nuevos jugadores, sino para sostener a los pocos que ya lograron atravesar el laberinto.
          </p>
        </Reveal>

        {/* Stats Grid */}
        <div className="stagger mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <article className="glow-border h-full bg-bg-elevated p-6 sm:p-8">
                <p className="stat-value font-display text-5xl sm:text-6xl">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    prefix={s.prefix}
                    decimals={s.value % 1 !== 0 ? 1 : 0}
                    useLocale={s.value > 100}
                  />
                </p>
                <p className="mt-3 leading-relaxed text-fg font-medium">
                  {s.label}
                  <Cite n={s.cite} />
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{s.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* El Dato Revelador 2026 */}
        <Reveal className="mt-8">
          <div className="glass-card rounded-xl p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-wider text-accent font-semibold">
                  El Hallazgo Clave de 2026
                </p>
                <h3 className="mt-1 font-display text-2xl text-fg">
                  El récord de valor no significa más empresas exportando
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  En los primeros 8 meses de 2026, las PyMEs exportaron{" "}
                  <strong className="text-fg">USD 7.360 millones</strong> (+24% interanual, récord en
                  valor desde 2013). Sin embargo, la cantidad de empresas apenas creció un{" "}
                  <strong className="text-fg">3%</strong> (6.721 firmas frente a 6.525 en 2025).
                  <Cite n="9" />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg font-medium">
                  El crecimiento se concentra en las mismas firmas que ya exportaban. El 98,7% de las
                  PyMEs argentinas sigue sin poder cruzar la frontera.
                </p>
              </div>

              {/* Lógica de Dimensionamiento Empresarial */}
              <div className="rounded-lg border border-border/80 bg-bg p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-muted">
                  Potencial de Escalamiento
                </p>
                <p className="mt-2 font-display text-4xl text-accent">+5.500</p>
                <p className="mt-1 text-xs text-fg font-medium">Nuevas PyMEs exportadoras</p>
                <p className="mt-2 text-[11px] leading-relaxed text-muted">
                  Si tan solo el <strong className="text-fg">1%</strong> de las ~542.000 PyMEs
                  empleadoras que no exportan diera el primer paso, Argentina recuperaría el récord
                  histórico de empresas exportadoras que perdió en 17 años.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 3. LA ANALOGÍA DEL CHECK-IN ─── */

function CheckinAnalogy() {
  return (
    <section id="checkin" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal variant="left">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src="/media/papers.jpg"
              alt="Documentación comercial y operativa de comercio exterior"
              className="aspect-photo w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-bg/90 p-4 backdrop-blur-md">
              <p className="font-display text-lg text-fg">
                "Las mejores operaciones no empiezan en la aduana."
              </p>
              <p className="text-xs text-muted">
                Empiezan con preparación, cálculo de costos y mitigación previa de riesgos.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">La Analogía Central</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-5xl">
            Cuando viajás en avión, el check-in no vuela la aeronave.
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              El check-in no reemplaza al piloto, ni a la torre de control, ni a migraciones ni a la
              aduana. Lo que hace es preparar al pasajero para que todo el viaje suceda de forma
              ordenada, segura y eficiente.
            </p>
            <p className="text-fg font-medium">
              Che.Comex es el check-in del comercio exterior: no reemplaza al despachante de aduana
              matriculado, ni a los organismos públicos, ni a los operadores de carga.
            </p>
            <p>
              Prepara a la PyME para que llegue a cada uno de ellos con la documentación exacta, la
              clasificación arancelaria orientativa, los costos estimados y los riesgos mitigados.
            </p>
            <p className="text-sm italic text-paper">
              Así como hoy nadie aborda un vuelo internacional sin pasar antes por el check-in, en el
              futuro ninguna PyME debería encarar una exportación sin pasar primero por Che.Comex.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 4. LA SOLUCIÓN EN 3 PASOS ─── */

function SolutionSteps() {
  const steps = [
    {
      k: "01",
      t: "Preparar (Diagnóstico)",
      d: "Evaluación integral de madurez exportadora (Export Readiness Score - ERS) del producto y la empresa. Identifica brechas técnicas y sanitarias antes de gastar un solo peso en promoción comercial.",
      tag: "Diagnóstico Preventivo",
    },
    {
      k: "02",
      t: "Validar (Costos & Requisitos)",
      d: "Estimación orientativa de Landed Cost (FOB/CIF), determinación de posición arancelaria y generación del checklist documental exacto según los requisitos de cada organismo oficial aplicable (SENASA, ARCA, ANMAT).",
      tag: "Inteligencia Normativa",
    },
    {
      k: "03",
      t: "Derivar & Conectar",
      d: "En el momento exacto, la operación se transfiere de forma fluida hacia Exporta Simple o al Despachante de Aduana matriculado de confianza. No cruzamos la puerta del Estado: dejamos a la PyME lista para operar.",
      tag: "Integración Operativa",
    },
  ];

  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">El Recorrido Operativo</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-fg sm:text-5xl">
            Ordenamos la complejidad y se la devolvemos a la PyME, accionable.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Un flujo continuo que reemplaza meses de incertidumbre por un proceso secuencial guiado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((c, i) => (
            <Reveal key={c.k} delay={i * 100}>
              <article className="glass-card group relative h-full rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:translate-y-[-2px]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-accent">{c.k}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-wider text-accent font-medium">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-fg">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. CASO ILUSTRATIVO DE TRADECONTEXT ─── */

function CaseSimulation() {
  return (
    <section id="simulacion" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">
              Demostración Funcional
            </p>
            <h2 className="mt-2 font-display text-3xl text-fg sm:text-5xl">
              Simulación ilustrativa de TradeContext
            </h2>
          </div>
          <span className="rounded-full border border-border bg-bg-elevated px-4 py-1.5 text-xs text-muted">
            Caso Anexo 4 · Frigorífico del Sur
          </span>
        </div>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Cómo se traduce la memoria operativa en una operación concreta sin exponer código ni
          arquitectura técnica sensible.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="glass-card overflow-hidden rounded-2xl border border-border">
          {/* Header del Caso */}
          <div className="border-b border-border bg-bg-elevated/80 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Operación</p>
                <p className="mt-1 font-display text-lg text-fg">Carne bovina deshuesada</p>
                <p className="text-xs text-accent">NCM 0201.30.00</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Ruta & Incoterm</p>
                <p className="mt-1 text-sm text-fg font-medium">Santa Fe → San Pablo (Brasil)</p>
                <p className="text-xs text-muted">FOB Terminal Portuaria / Camión</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Landed Cost Orientativo</p>
                <p className="mt-1 font-display text-lg text-fg">USD 50.150</p>
                <p className="text-xs text-muted">Contenedor refrigerado 25 tn</p>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Diagnóstico ERS</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-display text-lg text-accent">100 / 100</span>
                  <span className="text-xs text-muted">(Planta habilitada)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cuerpo con Alertas y Cumplimiento */}
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
            <div>
              <h4 className="flex items-center gap-2 font-display text-xl text-fg">
                <ShieldCheck className="size-5 text-accent" />
                Alerta Crítica de Origen (Ahorro Inmediato)
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                El motor de reglas detecta que Brasil aplica un arancel extrazona del{" "}
                <strong className="text-fg">10%</strong> a terceros países, pero bajo el Tratado
                MERCOSUR el arancel es del <strong className="text-fg">0%</strong>.
              </p>
              <div className="mt-4 rounded-lg border border-accent/30 bg-accent/10 p-4">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Impacto Financiero de la Alerta
                </p>
                <p className="mt-1 text-sm text-fg">
                  Ahorro arancelario directo de <strong>USD 5.015</strong> en destino mediante la
                  gestión anticipada del Certificado de Origen Digital (COD).
                </p>
              </div>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-display text-xl text-fg">
                <FileText className="size-5 text-accent" />
                Checklist Regulatorio de Organismos
              </h4>
              <ul className="mt-3 space-y-2.5 text-xs text-muted">
                <li className="flex items-center gap-2 text-fg">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>
                    <strong>SENASA:</strong> Emisión de certificado sanitario digital SIGCER bajo
                    Resolución 1379/2024.
                  </span>
                </li>
                <li className="flex items-center gap-2 text-fg">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>
                    <strong>NIMF 15:</strong> Certificación de tratamiento térmico en tarimas de
                    madera para transporte internacional.
                  </span>
                </li>
                <li className="flex items-center gap-2 text-fg">
                  <CheckCircle2 className="size-4 text-accent shrink-0" />
                  <span>
                    <strong>MAPA / DIPOA (Brasil):</strong> Registro previo de rótulo y planta
                    exportadora homologada.
                  </span>
                </li>
                <li className="flex items-center gap-2 text-paper">
                  <ArrowRightCircle className="size-4 text-accent shrink-0" />
                  <span>
                    <strong>Derivación Matriculada:</strong> Paquete documental ordenado transferido
                    al Despachante de Aduanas para formalización ante ARCA.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── 6. FRONTERA LEGAL: QUÉ HACEMOS Y QUÉ NO ─── */

function LegalBoundaries() {
  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Marco de Cumplimiento Normativo
            </p>
            <h2 className="mt-2 font-display text-3xl text-fg sm:text-5xl">
              Frontera Legal: Reducción Total de Riesgo Regulatorio
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Che.Comex no compite con el ecosistema existente ni con el Estado: delimita con
              claridad absoluta sus responsabilidades para potenciar a cada actor.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Lo que SÍ hace Che.Comex */}
          <Reveal variant="left">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 border-b border-border/80 pb-4 text-accent">
                <CheckCircle2 className="size-5" />
                <h3 className="font-display text-xl text-fg">Lo que Che.Comex SÍ hace</h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Diagnóstico previo de viabilidad:</strong> Mide la capacidad operativa
                    real de la empresa antes de iniciar compromisos comerciales.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Cálculos orientativos de Landed Cost:</strong> Simula fletes, retenciones
                    y aranceles bajo Incoterms 2020 para fijar precios competitivos.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Checklist normativo dinámico:</strong> Informa los requisitos específicos
                    de SENASA, ARCA, ANMAT e INV según la posición arancelaria.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Prevención de discrepancias documentales:</strong> Audita que factura,
                    packing list y certificados no contengan incongruencias que traben los pagos.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Memoria operativa (TradeContext):</strong> Preserva el historial para que
                    cada exportación sea más rápida y barata que la anterior.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Lo que NO hace Che.Comex */}
          <Reveal variant="right">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 border-b border-border/80 pb-4 text-red-400">
                <XCircle className="size-5" />
                <h3 className="font-display text-xl text-fg">Lo que Che.Comex NO hace</h3>
              </div>
              <ul className="mt-5 space-y-3.5 text-sm text-muted">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>
                    <strong>No realiza despachos aduaneros:</strong> Respeta la exclusividad legal y
                    la firma del Despachante de Aduanas matriculado (Código Aduanero Ley 22.415).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>
                    <strong>No emite certificados sanitarios ni de origen oficiales:</strong> La
                    emisión formal es potestad exclusiva de SENASA, ARCA o Cámaras autorizadas.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>
                    <strong>No reemplaza sistemas del Estado:</strong> No sustituye al Sistema
                    Informático Malvina (SIM/ARCA) ni a la VUCE; prepara al usuario para llegar sin
                    errores.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>
                    <strong>No asume responsabilidad legal o fiscal:</strong> La veracidad de las
                    declaraciones juradas recae en los operadores habilitados.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>
                    <strong>No actúa como agente de carga ni forwarder:</strong> Conecta con
                    proveedores logísticos sin intermediación forzosa.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. EL ANCLA TERRITORIAL: SAN LORENZO & UP RIVER ─── */

function TerritorialAnchor() {
  return (
    <section id="san-lorenzo" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <Reveal variant="left">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Ancla Territorial</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-5xl">
            San Lorenzo: Del puerto físico a la cuna TradeTech.
          </h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              El cordón portuario e industrial del Up River (San Lorenzo - Gran Rosario) concentra{" "}
              <strong className="text-fg">30 terminales portuarias privadas en apenas 70 km</strong>{" "}
              de costa sobre el Río Paraná.
            </p>
            <p className="font-medium text-fg">
              Cerca del 75% de los productos agroindustriales embarcados por Argentina parten desde
              este nodo geográfico hacia el mundo.
              <Cite n="11" />
            </p>
            <p>
              Sin embargo, existe una contradicción flagrante: los buques de ultramar cargan la
              producción nacional en nuestro patio trasero, mientras las PyMEs del cordón industrial y
              de la región siguen mirando la exportación como un privilegio inalcanzable.
            </p>
            <p>
              San Lorenzo no puede resignarse a ser únicamente un muelle físico de barcos y camiones.
              Tiene la escala, las industrias y la ubicación estratégica para liderar la
              transformación digital del comercio exterior argentino.
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-accent font-semibold">
              Priorización de Impacto en el Comex
            </p>
            <h3 className="mt-1 font-display text-2xl text-fg">
              Empezar donde está el 80% del volumen
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Che.Comex no dispersa esfuerzos intentando abarcar todo a la vez. Prioriza el desarrollo
              según el peso real de los organismos verificados en la matriz argentina:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg border border-border/80 bg-bg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-fg">SENASA</span>
                  <span className="font-display text-xl text-accent">57% del valor</span>
                </div>
                <p className="mt-1 text-xs text-muted">
                  Explica USD 49.600 millones del comercio exterior argentino (granos, harinas, aceites,
                  carnes, pesca y embalajes NIMF 15).
                  <Cite n="7" />
                </p>
              </div>

              <div className="rounded-lg border border-border/80 bg-bg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-fg">ARCA / Origen</span>
                  <span className="font-display text-xl text-accent">+60% acumulado</span>
                </div>
                <p className="mt-1 text-xs text-muted">
                  Sumando la certificación de origen MERCOSUR y UE (Ley 27.800), se cubre la inmensa
                  mayoría de los flujos de la región.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 8. LA VISIÓN TRADETECH ─── */

function TradeTechVision() {
  return (
    <section className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Evolución de la Industria
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-fg sm:text-5xl">
            El nacimiento de una nueva categoría: TradeTech
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Durante las últimas dos décadas vimos cómo la digitalización dio origen a industrias que
            redefinieron sectores enteros: FinTech transformó las finanzas y LogTech la logística.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <Globe2 className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-2xl text-fg">TradeTech</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                La categoría tecnológica que integra normativa, aranceles, trazabilidad y
                facilitación del comercio global en una sola capa de software.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <FileText className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-2xl text-fg">TradeContext</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                La memoria operativa de la empresa. No es una base de datos estática: preserva el
                aprendizaje de cada embarque para que las futuras operaciones sean más rápidas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <Landmark className="size-6 text-accent" />
              <h3 className="mt-4 font-display text-2xl text-fg">Infraestructura Viva</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Un ecosistema configurable que incorpora los cambios de regulación aduanera y
                acuerdos arancelarios en tiempo real, sin romper el flujo de trabajo de la PyME.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 9. ESTADO REAL & MODELO DE NEGOCIO (CON MENTE DE EMPRESARIO) ─── */

function ProjectStatusAndBusinessModel() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        {/* Estado Real del Proyecto */}
        <Reveal variant="left">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Transparencia Operativa</p>
          <h2 className="mt-3 font-display text-3xl text-fg sm:text-4xl">
            Estado de situación del proyecto
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Un inversor o una institución necesitan saber con total claridad dónde está parado el
            proyecto hoy y cuáles son los próximos hitos a cumplir.
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-start gap-3 rounded-lg border border-border bg-bg-elevated p-4">
              <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-fg">Arquitectura Conceptual & Tesis:</strong>
                <p className="mt-1 text-xs text-muted">
                  Modelado completo del TradeContext, flujo operativo de 7 pasos y taxonomía de
                  Organismos Verificados finalizados.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-bg-elevated p-4">
              <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-fg">Propiedad Intelectual & Marca:</strong>
                <p className="mt-1 text-xs text-muted">
                  Registro de marca Che.Comex y documentación de arquitectura de software en
                  trámite de protección.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/5 p-4">
              <ArrowRightCircle className="size-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-fg">Próximo Hito Crítico (En Prospección):</strong>
                <p className="mt-1 text-xs text-muted">
                  Desarrollo del motor de IA contextual de reglas aduaneras y construcción del MVP
                  operativo para validación con las primeras 50 PyMEs en piloto territorial.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Modelo de Ingresos & Liderazgo */}
        <Reveal variant="right">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider text-accent font-semibold">
              Modelo de Monetización B2B
            </p>
            <h3 className="mt-1 font-display text-2xl text-fg">Modelo de negocio escalable</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Estructura de ingresos híbrida diseñada para garantizar sostenibilidad y alineación de
              incentivos:
            </p>

            <div className="mt-6 space-y-4 text-xs text-muted">
              <div className="border-b border-border/80 pb-3">
                <div className="flex justify-between font-medium text-fg">
                  <span>1. Suscripciones SaaS PyME</span>
                  <span className="text-accent">Ingreso Recurrente</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Planes modulares para micro, pequeñas y medianas empresas con acceso al motor de
                  diagnóstico, calculadora de Landed Cost y memoria TradeContext.
                </p>
              </div>

              <div className="border-b border-border/80 pb-3">
                <div className="flex justify-between font-medium text-fg">
                  <span>2. Cuentas Institucionales & Cámaras</span>
                  <span className="text-accent">Convenios B2G / B2B</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Homologación masiva de padrones industriales para municipios, agencias de
                  desarrollo y cámaras sectoriales (UCI, CERA, CAC, CAME).
                </p>
              </div>

              <div>
                <div className="flex justify-between font-medium text-fg">
                  <span>3. Marketplace de Servicios Verificados</span>
                  <span className="text-accent">Transaccional</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Comisión por derivación calificada de operaciones preparadas hacia despachantes de
                  aduana, forwarders y empresas certificadoras.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-4 text-xs">
              <p className="text-muted">
                Liderado por: <strong className="text-fg">Jezabel Ayelén Villalba</strong> —
                Fundadora & Directora de Proyecto · San Lorenzo, Santa Fe.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 10. EL PEDIDO EN DOS VÍAS (INSTITUCIONAL & INVERSIÓN) ─── */

function TwoWayAsk() {
  return (
    <section id="alianza" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Convocatoria Expo EXA 2026
            </p>
            <h2 className="mt-2 font-display text-3xl text-fg sm:text-5xl">
              Construir infraestructura, no una aplicación más
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              El desarrollo de un software de inteligencia artificial con rigor normativo y contexto
              aduanero exige una inversión tecnológica significativa y talento senior especializado.
              Buscamos dos alianzas concretas en San Lorenzo:
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* VÍA 1: INSTITUCIONAL */}
          <Reveal variant="left">
            <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 border-accent/30">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
                    Vía 1: Institucional
                  </span>
                  <span className="text-xs text-muted">Sector Público & Cámaras</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-fg">
                  Convenio Piloto Territorial San Lorenzo
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Propuesta para la Municipalidad de San Lorenzo, Santa Fe Global, la Unión de
                  Comerciantes e Industriales (UCI) y cámaras asociadas:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-muted">
                  <li className="flex items-start gap-2 text-fg">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Co-diseñar el <strong>Piloto de Primeras Exportaciones</strong> para auditar y
                      preparar a un lote inicial de <strong>50 PyMEs locales</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-fg">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Medir impacto real: reducción de tiempos de trámite, ahorro en landed costs y
                      generación neta de empleo formal regional.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-fg">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      Posicionar a San Lorenzo como el primer municipio con infraestructura digital
                      exportadora propia de Argentina.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-border/80 pt-4">
                <Button asChild className="w-full" size="default">
                  <a href="#contacto">Solicitar Reunión Institucional</a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* VÍA 2: INVERSIÓN PRIVADA */}
          <Reveal variant="right">
            <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 border-accent/30">
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
                    Vía 2: Inversores
                  </span>
                  <span className="text-xs text-muted">Capital Semilla / Pre-Seed</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-fg">
                  Ronda Pre-Seed para Desarrollo del MVP
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Apertura de conversaciones con inversores ángeles, fondos de innovación TradeTech y
                  empresarios del sector logístico-industrial:
                </p>
                <ul className="mt-4 space-y-2.5 text-xs text-muted">
                  <li className="flex items-start gap-2 text-fg">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong>Uso de fondos (12 a 18 meses):</strong> Desarrollo de ingeniería de
                      software, arquitectura de IA contextual y conexión con bases normativas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-fg">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong>Hito de validación:</strong> Lanzamiento del MVP con 100 operaciones
                      piloto validadas por despachantes partners.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-fg">
                    <CheckCircle2 className="size-4 text-accent shrink-0 mt-0.5" />
                    <span>
                      <strong>Oportunidad de mercado:</strong> Categoría TradeTech en etapa embrionaria
                      en América Latina con barreras de entrada regulatorias elevadas.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-border/80 pt-4">
                <Button asChild variant="outline" className="w-full" size="default">
                  <a href="#contacto">Coordinar Reunión de Inversión</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 11. CONTACTO & RONDA DE NEGOCIOS EXA ─── */

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [profile, setProfile] = useState("institucional");
  const [note, setNote] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { name, org, profile, note, at: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("checomex-leads") || "[]") as unknown[];
    localStorage.setItem("checomex-leads", JSON.stringify([payload, ...prev]));
    setSent(true);
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <Reveal variant="left">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
            Ronda de Negocios EXA 2026
          </div>
          <h2 className="mt-3 font-display text-3xl text-fg sm:text-5xl leading-tight">
            Construyamos el nuevo punto de partida del comercio exterior.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Durante la <strong>Expo EXA (24 al 26 de Septiembre)</strong> y especialmente en la{" "}
            <strong>Ronda de Negocios del Viernes 25</strong>, estaremos manteniendo reuniones de
            trabajo privadas en el Parque Industrial y Logístico de San Lorenzo.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-bg-elevated p-6 text-xs text-muted leading-relaxed">
            <p className="font-semibold text-fg text-sm">Reserva Estratégica</p>
            <p className="mt-1.5">
              Por razones de propiedad intelectual y estrategia de mercado, la arquitectura
              tecnológica de TradeContext y el plan financiero detallado se comparten exclusivamente
              en reuniones privadas de trabajo bajo acuerdo.
            </p>
          </div>

          <div className="mt-6 text-xs text-muted space-y-1">
            <p>
              Contacto directo: <strong className="text-fg">Jezabel Ayelén Villalba</strong>
            </p>
            <p>Email: j.ayelen.villalba@gmail.com | WhatsApp: +54 3476 591351</p>
          </div>
        </Reveal>

        <Reveal variant="right">
          {sent ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="font-display text-2xl text-fg">Solicitud Recibida</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Nos pondremos en contacto a la brevedad para coordinar día y horario durante la Expo
                EXA o para una reunión virtual de seguimiento.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-xl text-fg">Agendar Reunión en la Expo EXA</h3>

              <div>
                <label className="block text-xs font-medium text-muted">Tu Nombre y Apellido</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:border-accent"
                  placeholder="Ej: Martín Rodríguez"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted">
                  Organización / Empresa / Fondo
                </label>
                <input
                  required
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:border-accent"
                  placeholder="Ej: Municipalidad de San Lorenzo / Empresa"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted">Perfil de Contacto</label>
                <select
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:border-accent"
                >
                  <option value="institucional">Sector Público / Cámara Empresarial</option>
                  <option value="inversor">Inversor / Fondo de Innovación</option>
                  <option value="pyme">Empresa PyME interesada en el Piloto</option>
                  <option value="profesional">Despachante de Aduana / Operador Logístico</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted">
                  Objetivo del contacto o disponibilidad horaria
                </label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="mt-1.5 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg outline-none focus:border-accent"
                  placeholder="Ej: Coordinar para la Ronda de Negocios del viernes 25..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Solicitar Encuentro en EXA <ArrowRight className="ml-2 size-4" />
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 12. FUENTES OFICIALES ─── */

function Sources() {
  return (
    <section id="fuentes" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Auditoría Pública</p>
              <h2 className="mt-1 font-display text-2xl text-fg">Fuentes oficiales y referencias</h2>
            </div>
            <p className="text-xs text-muted max-w-md">
              Cada afirmación de esta página cuenta con respaldo en documentos públicos u oficiales.
            </p>
          </div>
        </Reveal>

        <ol className="mt-8 space-y-4">
          {sources.map((s, i) => (
            <Reveal key={s.id} delay={i * 30}>
              <li
                id={`fuente-${s.label}`}
                className="scroll-mt-20 border-b border-border/80 pb-4 text-xs leading-relaxed"
              >
                <span className="font-semibold text-accent">[{s.label}]</span>{" "}
                <span className="text-fg font-medium">{s.title}.</span>{" "}
                <span className="text-muted">
                  {s.publisher}, {s.year}.
                </span>{" "}
                {s.href.startsWith("http") ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 text-accent underline-offset-2 hover:underline inline-flex items-center gap-0.5"
                  >
                    Ver documento <ArrowRight className="size-3" />
                  </a>
                ) : null}
                {s.annotation && (
                  <p className="mt-1.5 text-muted/80 pl-4 border-l border-border italic text-[11px]">
                    Nota técnica: {s.annotation}
                  </p>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */

function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-12 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-base text-fg">Che.Comex</p>
          <p className="mt-1">
            Plataforma de Inteligencia y Preparación de Comercio Exterior · San Lorenzo, Santa Fe
          </p>
        </div>
        <div className="text-right sm:max-w-xs">
          <p>Presentación Institucional para Expo EXA 2026</p>
          <p className="mt-1 text-[11px] text-muted/70">
            Documento estratégico para rondas de inversión y acuerdos de cooperación. Propiedad
            intelectual en trámite.
          </p>
        </div>
      </div>
    </footer>
  );
}
