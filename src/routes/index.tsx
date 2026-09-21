import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FileText,
  Globe2,
  Landmark,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
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
      <InnovationNiche />
      <TerritorialAnchor />
      <ProjectStatusAndBusinessModel />
      <LegalDisclaimer />
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
          <a href="#recorrido" className="transition-colors hover:text-fg">
            Recorrido
          </a>
          <a href="#nicho" className="transition-colors hover:text-fg">
            Nicho de Innovación
          </a>
          <a href="#san-lorenzo" className="transition-colors hover:text-fg">
            San Lorenzo
          </a>
          <a href="#fuentes" className="transition-colors hover:text-fg">
            Fuentes
          </a>
        </nav>
        <Button asChild size="sm">
          <a href="#contacto">Agendar Reunión</a>
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
        alt="Puerto industrial sobre el Río Paraná al atardecer"
        className="hero-parallax absolute inset-0 size-full scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-bg/20 to-transparent" />

      <div className="relative mx-auto flex min-h-[92dvh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6">
        {/* Badge Institucional Neutro */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-bg-elevated/70 px-4 py-1.5 backdrop-blur-md">
          <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-paper">
            San Lorenzo, Santa Fe · Argentina
          </span>
        </div>

        <h1 className="max-w-4xl font-display text-4xl leading-[1.06] text-fg sm:text-6xl lg:text-7xl">
          La infraestructura digital para que la PyME conquiste el mundo.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper sm:text-lg">
          Che.Comex nace en el polo portuario de San Lorenzo para transformar la dispersión
          regulatoria, arancelaria y operativa del comercio exterior en un recorrido predecible,
          validado y accesible.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="group">
            <a href="#contacto">
              Agendar Reunión{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="#diagnostico">
              Auditoría del Problema{" "}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
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
                  1/2026 habilitó la Declaración de Origen en factura. La normativa cambia con
                  rapidez y abre oportunidades comerciales inéditas, pero casi ninguna PyME cuenta con
                  herramientas para capturarlas a tiempo.
                  <Cite n="10" />
                </p>
              </div>

              <div className="border-b border-border/80 pb-4">
                <div className="flex items-center justify-between text-fg font-medium">
                  <span>Agosto 2026: Reformulación Courier</span>
                  <span className="text-xs text-accent">ARCA / Comercio</span>
                </div>
                <p className="mt-1.5 leading-relaxed text-muted">
                  Nuevas directivas arancelarias para envíos internacionales de muestras comerciales.
                  Las reglas operativas se modifican constantemente en boletines oficiales sin
                  traducción simple para el empresario.
                  <Cite n="12" />
                </p>
              </div>

              <div>
                <p className="text-xs text-muted/90 leading-relaxed">
                  Resultado: La PyME promedio gasta semanas en consultas preliminares o desiste por
                  miedo a demoras en frontera, bloqueos documentales o sobrecostos imprevistos.
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
      note: "Solo ~7.100 firmas de un universo de ~549.000 (Registro Oficial MiPyME). La evidencia técnica confirma que apenas el 8% logra sostener ventas al exterior en el tiempo.",
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
                  <strong className="text-fg">USD 7.360 millones</strong> (+24% interanual en valor,
                  máximo nivel desde 2013). Sin embargo, la cantidad de empresas apenas creció un{" "}
                  <strong className="text-fg">3%</strong> (6.721 firmas frente a 6.525 en 2025).
                  <Cite n="9" />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg font-medium">
                  El repunte sigue concentrado en las mismas firmas de siempre. El 98,7% de las
                  PyMEs argentinas continúa sin poder cruzar la frontera.
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
              alt="Documentación y preparación operativa de comercio exterior"
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
              Prepara a la PyME para que llegue a cada uno de ellos con la documentación exacta, los
              costos calculados y los riesgos mitigados antes de operar.
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

/* ─── 4. EL RECORRIDO OPERATIVO (3 PASOS + MEMORIA OPERATIVA) ─── */

function SolutionSteps() {
  const steps = [
    {
      k: "01",
      t: "Preparar",
      d: "Evaluamos si tu producto y tu empresa están en condiciones reales de exportar, antes de gastar un peso en promoción comercial.",
      tag: "Evaluación Real",
    },
    {
      k: "02",
      t: "Validar",
      d: "Te decimos qué necesitás, cuánto te va a costar y qué papeles pedir para esa operación puntual.",
      tag: "Certeza Operativa",
    },
    {
      k: "03",
      t: "Derivar",
      d: "En el momento exacto, la operación se transfiere de forma fluida hacia el canal oficial o el despachante matriculado que corresponda. No cruzamos la puerta del Estado: dejamos a la PyME lista para operar.",
      tag: "Traspaso Limpio",
    },
  ];

  return (
    <section id="recorrido" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">El Recorrido Operativo</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-fg sm:text-5xl">
            Ordenamos la complejidad y se la devolvemos a la PyME, accionable.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Un flujo claro y secuencial que reemplaza meses de incertidumbre por pasos guiados y
            decisiones seguras.
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

        {/* Memoria Operativa Propia (Frase textual requerida) */}
        <Reveal className="mt-8">
          <div className="glass-card flex items-center gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Sparkles className="size-6" />
            </span>
            <div>
              <p className="font-display text-xl text-fg sm:text-2xl">
                Contamos con memoria operativa propia que hace que cada exportación sea más rápida
                que la anterior.
              </p>
              <p className="mt-1 text-xs text-muted">
                La experiencia y los datos de cada embarque no se pierden en carpetas sueltas:
                acumulan aprendizaje para acelerar los tiempos en las siguientes ventas al exterior.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 5. NICHO DE INNOVACIÓN (TAMAÑO, TIMING & IA EN COMERCIO) ─── */

function InnovationNiche() {
  return (
    <section id="nicho" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Nicho de Innovación
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-5xl">
            Un mercado récord, sin infraestructura que lo sostenga.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Argentina va camino a su año de exportaciones más alto de la historia. Miles de millones
            de dólares en juego, un acuerdo con la Unión Europea recién habilitado, y una ola global
            de IA en comercio que recién empieza y beneficia más a economías como la nuestra. Ese es
            el tamaño del problema — y el tamaño de la oportunidad para quien lo resuelva primero.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {/* A. Tamaño del Mercado */}
        <Reveal delay={0}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <TrendingUp className="size-5" />
              </div>
              <p className="stat-value mt-4 font-display text-4xl sm:text-5xl">
                <AnimatedCounter value={103} suffix=" mil M" prefix="USD " decimals={0} />
              </p>
              <h3 className="mt-2 font-display text-xl text-fg">Proyección Récord Nacional</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Proyecciones oficiales y sectoriales ubican las exportaciones de 2026 entre USD
                103.200 M (CERA) y USD 103.740 M (LCG), tras un acumulado enero-julio que creció{" "}
                <strong className="text-fg">+22,9%</strong> interanual.
                <Cite n="8" />
              </p>
            </div>
            <p className="mt-4 text-[11px] text-accent font-medium">Volumen Histórico</p>
          </div>
        </Reveal>

        {/* B. Timing: MERCOSUR-UE */}
        <Reveal delay={120}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
            <div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Globe2 className="size-5" />
              </div>
              <p className="stat-value mt-4 font-display text-4xl sm:text-5xl">
                <span>Ley 27.800</span>
              </p>
              <h3 className="mt-2 font-display text-xl text-fg">Ventana MERCOSUR–UE</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Con aplicación provisional desde mayo 2026, el acuerdo birregional abre un mercado
                de 500 millones de consumidores con arancel cero para miles de posiciones. El timing
                para construir la infraestructura digital es hoy.
                <Cite n="10" />
              </p>
            </div>
            <p className="mt-4 text-[11px] text-accent font-medium">Ventana de Oportunidad</p>
          </div>
        </Reveal>

        {/* C. Tendencia Global de IA (OMC World Trade Report 2025) */}
        <Reveal delay={240}>
          <div className="glass-card flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 border-accent/40">
            <div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <Cpu className="size-5" />
              </div>
              <p className="stat-value mt-4 font-display text-4xl sm:text-5xl">
                <span>+34% a 37%</span>
              </p>
              <h3 className="mt-2 font-display text-xl text-fg">Crecimiento Global vía IA</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Crecimiento potencial del comercio mundial de bienes y servicios para 2040 gracias a
                la IA, según el World Trade Report 2025 de la OMC. El aumento del PIB global asociado
                sería de 12-13%, y las economías de ingresos medios y bajos podrían ser las más
                beneficiadas (hasta +18,1 puntos en su crecimiento comercial).
                <Cite n="13" />
              </p>
            </div>
            <p className="mt-4 text-[11px] text-accent font-medium">World Trade Report · OMC</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 6. EL ANCLA TERRITORIAL: SAN LORENZO & UP RIVER ─── */

function TerritorialAnchor() {
  return (
    <section id="san-lorenzo" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal variant="left">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Ancla Territorial</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-fg sm:text-5xl">
              San Lorenzo: Del puerto físico a la cuna tecnológica.
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
                Sin embargo, persiste la contradicción: los buques de ultramar cargan la riqueza
                nacional en nuestro patio trasero, mientras las PyMEs del cordón industrial y de la
                región siguen mirando la exportación como un proceso inaccesible.
              </p>
              <p>
                San Lorenzo no puede ser únicamente un muelle físico de barcos y camiones. Tiene la
                escala y la ubicación estratégica para liderar la transformación digital del
                comercio exterior de la región.
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
                No dispersamos esfuerzos: priorizamos el desarrollo de inteligencia operativa según
                el peso real de los organismos verificados en la matriz argentina:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg border border-border/80 bg-bg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-fg">SENASA</span>
                    <span className="font-display text-xl text-accent">57% del valor</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">
                    Explica USD 49.600 millones del comercio exterior argentino (granos, harinas,
                    aceites, carnes, pesca y embalajes de madera).
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
                    mayoría de los flujos comerciales del interior productivo.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── 7. ESTADO REAL & MODELO DE NEGOCIO ─── */

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
                  Modelado completo del flujo operativo, taxonomía de organismos verificados y
                  análisis de viabilidad técnica concluidos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-border bg-bg-elevated p-4">
              <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-fg">Propiedad Intelectual & Marca:</strong>
                <p className="mt-1 text-xs text-muted">
                  Registro de marca y documentación de arquitectura de software en trámite formal de
                  protección.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/5 p-4">
              <ShieldCheck className="size-5 text-accent shrink-0 mt-0.5" />
              <div>
                <strong className="text-fg">Próximo Hito Crítico:</strong>
                <p className="mt-1 text-xs text-muted">
                  Desarrollo del motor de IA contextual y construcción del MVP operativo para
                  validación en campo con las primeras PyMEs en programa piloto.
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
              Estructura de ingresos diseñada para garantizar sostenibilidad y alineación de
              incentivos:
            </p>

            <div className="mt-6 space-y-4 text-xs text-muted">
              <div className="border-b border-border/80 pb-3">
                <div className="flex justify-between font-medium text-fg">
                  <span>1. Suscripciones SaaS PyME</span>
                  <span className="text-accent">Ingreso Recurrente</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Planes modulares con acceso al motor de evaluación, estimación de costos y memoria
                  operativa continua.
                </p>
              </div>

              <div className="border-b border-border/80 pb-3">
                <div className="flex justify-between font-medium text-fg">
                  <span>2. Cuentas Institucionales & Cámaras</span>
                  <span className="text-accent">Convenios B2G / B2B</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Homologación masiva de padrones industriales para municipios, agencias de
                  desarrollo y cámaras sectoriales.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-medium text-fg">
                  <span>3. Servicios Profesionales Verificados</span>
                  <span className="text-accent">Transaccional</span>
                </div>
                <p className="mt-1 leading-relaxed">
                  Derivación calificada de operaciones preparadas hacia despachantes de aduana y
                  operadores logísticos de confianza.
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

/* ─── 8. DESLINDE LEGAL / ALCANCE OPERATIVO ─── */

function LegalDisclaimer() {
  return (
    <section className="border-t border-border bg-bg-elevated/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="rounded-xl border border-border bg-bg-elevated p-6 sm:p-8">
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck className="size-5" />
              <h3 className="font-display text-lg text-fg">
                Deslinde Legal & Alcance Operativo
              </h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Para garantizar seguridad jurídica absoluta a clientes e inversores, Che.Comex
              delimita con precisión su alcance:
            </p>
            <ul className="mt-4 grid gap-2.5 text-xs text-muted sm:grid-cols-2 lg:grid-cols-3">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>
                  <strong>No realiza despachos aduaneros:</strong> Labor exclusiva del Despachante
                  de Aduanas matriculado (Código Aduanero Ley 22.415).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>
                  <strong>No emite certificados oficiales:</strong> Las certificaciones formales son
                  potestad de SENASA, ARCA o entidades competentes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>
                  <strong>No reemplaza sistemas del Estado:</strong> No sustituye al Sistema
                  Informático Malvina (SIM/ARCA) ni a la VUCE.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>
                  <strong>No asume responsabilidad fiscal:</strong> La veracidad de las
                  declaraciones juradas recae en los operadores habilitados.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">✕</span>
                <span>
                  <strong>No actúa como agente de carga:</strong> Conecta con forwarders y
                  transportistas sin intermediación obligatoria.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 9. CONTACTO & AGENDAR REUNIÓN (WEB3FORMS) ─── */

function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Web3Forms Access Key
  // Si no hay key configurada todavía, Web3Forms permite setear la access_key
  const WEB3FORMS_ACCESS_KEY = "80f845d0-9d0b-4654-8c87-8d5f3089d816";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          organization,
          email,
          message,
          subject: `Nuevo contacto Che.Comex de ${name} (${organization})`,
          from_name: "Che.Comex One-Pager",
        }),
      });

      const result = (await response.json()) as { success: boolean; message?: string };

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "Hubo un inconveniente al enviar el mensaje. Por favor intentá nuevamente o escribinos directamente.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "No pudimos conectar con el servidor de envíos. Por favor contactanos por email directo.",
      );
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <Reveal variant="left">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
            Reuniones Estratégicas
          </div>
          <h2 className="mt-3 font-display text-3xl text-fg sm:text-5xl leading-tight">
            Construyamos el nuevo punto de partida del comercio exterior.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Estamos manteniendo conversaciones con inversores, cámaras sectoriales, municipios y
            empresas interesadas en participar de las próximas etapas de desarrollo.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-bg-elevated p-6 text-xs text-muted leading-relaxed">
            <p className="font-semibold text-fg text-sm">Reserva Estratégica</p>
            <p className="mt-1.5">
              Por razones de propiedad intelectual y estrategia de mercado, la arquitectura
              tecnológica detallada y las proyecciones financieras se comparten exclusivamente en
              reuniones privadas de trabajo bajo acuerdo.
            </p>
          </div>

          <div className="mt-6 text-xs text-muted space-y-1">
            <p>
              Contacto directo: <strong className="text-fg">Jezabel Ayelén Villalba</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:j.ayelen.villalba@gmail.com"
                className="text-accent underline-offset-2 hover:underline"
              >
                j.ayelen.villalba@gmail.com
              </a>{" "}
              | WhatsApp: +54 3476 591351
            </p>
          </div>
        </Reveal>

        <Reveal variant="right">
          {status === "success" ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-accent/20 text-accent">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="font-display text-2xl text-fg">¡Solicitud Recibida!</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Muchas gracias por tu contacto. Te responderemos a la brevedad para coordinar día y
                horario de reunión.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-6"
                onClick={() => {
                  setStatus("idle");
                  setName("");
                  setOrganization("");
                  setEmail("");
                  setMessage("");
                }}
              >
                Enviar otra consulta
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-xl text-fg">Agendar Reunión de Trabajo</h3>
              <p className="text-xs text-muted">
                Completá tus datos y coordinamos una reunión privada.
              </p>

              <div>
                <label className="block text-xs font-medium text-muted">Nombre y Apellido *</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:border-accent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted">Organización / Empresa *</label>
                <input
                  required
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:border-accent"
                  placeholder="Empresa, Municipio o Fondo"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted">Email de Contacto *</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:border-accent"
                  placeholder="nombre@empresa.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted">Cómo podemos avanzar *</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="mt-1.5 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg outline-none focus:border-accent"
                  placeholder="Contanos tu interés (inversión, alianza institucional, piloto PyME)..."
                />
              </div>

              {status === "error" && (
                <div className="rounded-md border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  "Enviando..."
                ) : (
                  <>
                    Agendar Reunión <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ─── 10. FUENTES OFICIALES ─── */

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
              Cada afirmación y cifra de esta página cuenta con respaldo en documentos públicos u
              organismos oficiales.
            </p>
          </div>
        </Reveal>

        <ol className="mt-8 space-y-4">
          {sources.map((s, i) => (
            <Reveal key={s.id} delay={i * 25}>
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
            Plataforma de Inteligencia y Preparación de Comercio Exterior
          </p>
        </div>
        <div className="text-right sm:max-w-xs">
          <p className="text-fg">Che.Comex — San Lorenzo, Santa Fe · Argentina</p>
          <p className="mt-1 text-[11px] text-muted/70">
            Documento de trabajo para socios.
          </p>
        </div>
      </div>
    </footer>
  );
}
