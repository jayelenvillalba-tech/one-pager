import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowRightCircle,
  FileText,
  Globe2,
  Landmark,
  ShieldCheck,
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
      <Story />
      <Diagnosis />
      <Barriers />
      <ProcessFilm />
      <Solution />
      <Opportunity />
      <Ask />
      <Contact />
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
      className={`sticky top-0 z-40 border-b bg-bg/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-border/70 shadow-lg shadow-bg/50" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-display text-lg tracking-tight text-fg">
          Che.Comex
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <a href="#diagnostico" className="transition-colors hover:text-fg">
            Diagnóstico
          </a>
          <a href="#proceso" className="transition-colors hover:text-fg">
            Proceso
          </a>
          <a href="#propuesta" className="transition-colors hover:text-fg">
            Propuesta
          </a>
          <a href="#oportunidad" className="transition-colors hover:text-fg">
            Oportunidad
          </a>
          <a href="#fuentes" className="transition-colors hover:text-fg">
            Fuentes
          </a>
        </nav>
        <Button asChild size="sm">
          <a href="#contacto">Conversemos</a>
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
        img.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.1)`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} id="inicio" className="relative isolate min-h-dvh overflow-hidden">
      <img
        src="/media/hero-port.jpg"
        alt="Puerto industrial sobre el Paraná al atardecer"
        className="hero-parallax absolute inset-0 size-full scale-110 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/40 to-transparent" />

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
        {/* Badge EXA */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
          <span className="badge-shimmer text-xs font-medium uppercase tracking-[0.22em]">
            Expo EXA · San Lorenzo · Sep 2026
          </span>
        </div>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-fg sm:text-7xl lg:text-8xl">
          Exportar no puede seguir siendo un privilegio.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/90 sm:text-lg">
          Che.Comex es la puerta de entrada al comercio exterior para la PyME
          argentina. Construida desde San Lorenzo, para que el conocimiento deje
          de estar reservado a quienes pueden pagarlo.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="group">
            <a href="#diagnostico">
              Ver el diagnóstico{" "}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="group">
            <a href="#proceso">
              El recorrido{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator mt-12 flex flex-col items-center gap-1 self-center text-muted/60">
          <ArrowDown className="size-5" />
        </div>
      </div>
    </section>
  );
}

/* ─── STORY (Armando) ─── */

function Story() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-24 sm:px-6 md:grid-cols-2 md:items-center">
      <Reveal variant="left">
        <img
          src="/media/workshop.jpg"
          alt="Taller pyme empaquetando producto para el mercado"
          className="aspect-photo w-full rounded-lg object-cover"
        />
      </Reveal>
      <Reveal variant="right">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">El origen</p>
        <h2 className="mt-3 font-display text-3xl text-fg sm:text-4xl">
          Hace unos meses conocí a Armando.
        </h2>
        <div className="mt-5 space-y-4 leading-relaxed text-muted">
          <p>
            Fabrica algo con las manos, con orgullo, hace años. Confirmó que su
            producto podía competir en Paraguay, en Brasil, en cualquier lugar
            del mundo. Volvió entusiasmado. Y ahí empezó lo difícil.
          </p>
          <p>
            Tener un buen producto no alcanza. Se encontró con trámites,
            normativas, certificaciones y decisiones logísticas que no conocía.
            Necesitaba un asesoramiento que no podía pagar. Tiempo que no tenía.
            Y una certeza que nadie le daba: ¿esto me conviene, o me fundo en el
            intento?
          </p>
          <p className="text-fg font-medium">
            Armando tuvo suerte. Consiguió ayuda a tiempo. La pregunta que nos
            trajo hasta acá es: ¿y todos los que no la tienen?
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ─── DIAGNOSIS ─── */

function Diagnosis() {
  const stats = [
    {
      value: 1.3,
      suffix: "%",
      label: "de las MiPyMEs empleadoras argentinas exportó bienes en 2023.",
      note: "Informe oficial del Registro Nacional de Empresas MiPyME, con datos de Aduana y ARCA. En 2026 la cifra mejora levemente, pero la estructura persiste.",
      cite: "1",
    },
    {
      value: 18,
      suffix: "%",
      label:
        "del valor exportado del país proviene de PyMEs, pese a representar el 90% de las firmas exportadoras.",
      note: "De USD 87.077 millones exportados en 2025, las PyMEs participaron con menos de una quinta parte.",
      cite: "8",
    },
    {
      value: 9.4,
      suffix: " mil",
      label: "empresas exportadoras hoy, contra más de 15.000 en el máximo histórico.",
      note: "CEPAL documenta la caída 2011–2019; CERA confirma 9.399 exportadoras en 2025.",
      cite: "4",
    },
    {
      value: 4,
      suffix: "×",
      label: "más horas de trámite fronterizo en América Latina que en la OCDE.",
      note: "55,3 horas vs. 12,7 horas de cumplimiento aduanero para exportar (Doing Business 2020, último de la serie).",
      cite: "5",
    },
  ];

  return (
    <section id="diagnostico" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            Diagnóstico · fuentes oficiales
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-fg sm:text-5xl">
            El problema no es de producto. Es de acceso.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Las cifras no son un eslogan. Son el mapa de una barrera invisible:
            Argentina tiene PyMEs competitivas, y un sistema de comercio exterior
            que solo recorre una minoría.
          </p>
        </Reveal>

        <div className="stagger mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <article className="glow-border bg-bg-elevated p-6 sm:p-8">
                <p className="stat-value font-display text-5xl sm:text-6xl">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.value % 1 !== 0 ? 1 : 0}
                  />
                </p>
                <p className="mt-3 leading-relaxed text-fg">
                  {s.label}
                  <Cite n={s.cite} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            Las MiPyMEs son el 99,4% de las empresas del país y emplean al 64%
            de los asalariados registrados
            <Cite n="2" />. Si apenas el 1,3% exporta, no es un fallo individual:
            es un diseño de mercado que deja afuera a la inmensa mayoría.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── BARRIERS ─── */

function Barriers() {
  const items = [
    {
      icon: FileText,
      title: "Información dispersa",
      body: "Normas, aranceles, requisitos sanitarios y acuerdos preferenciales viven en portales distintos, a menudo solo en idioma local, y cambian más rápido de lo que una PyME puede seguir.",
    },
    {
      icon: Landmark,
      title: "Burocracia que no se ve",
      body: "El Banco Mundial midió 35,7 horas de cumplimiento documental para exportar en América Latina, contra 2,3 horas en economías de altos ingresos de la OCDE.",
      cite: "5",
    },
    {
      icon: Globe2,
      title: "Concentración exportadora",
      body: "Pocas firmas grandes explican la mayor parte del valor. Las PyMEs entran y salen del universo exportador cada año. El país perdió más de 6.000 exportadoras en una década.",
      cite: "3",
    },
    {
      icon: ShieldCheck,
      title: "Conocimiento caro",
      body: "Despachante, asesor, forwarder y tiempo de prueba y error. Quien puede pagar el equipo, exporta. Quien no, se queda en el mercado interno aunque el producto sea competitivo.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Reveal variant="left">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">La barrera</p>
          <h2 className="mt-3 font-display text-3xl text-fg sm:text-4xl">
            No siempre impide comenzar. Impide avanzar.
          </h2>
          <img
            src="/media/papers.jpg"
            alt="Escritorio cubierto de formularios aduaneros"
            className="mt-8 aspect-4/3 w-full rounded-lg object-cover"
          />
        </Reveal>
        <ul className="space-y-6">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <li className="border-b border-border pb-6 last:border-0">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="size-5 text-accent" />
                </div>
                <h3 className="mt-3 font-display text-xl text-fg">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.body}
                  {item.cite ? <Cite n={item.cite} /> : null}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── PROCESS FILM ─── */

function ProcessFilm() {
  return (
    <section id="proceso" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">El recorrido</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-fg sm:text-4xl">
            Del taller al mundo. Sin mostrar el laboratorio.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Este film describe el viaje que queremos abreviar: producto, puerto,
            ruta. El software que lo hace posible es costoso de construir y se
            comparte con socios, no en una expo. Si el equipo técnico lo habilita,
            acá irá también una demo controlada del flujo.
          </p>
        </Reveal>

        <Reveal variant="scale" className="mt-8">
          <div className="overflow-hidden rounded-lg border border-border bg-bg shadow-2xl shadow-bg/50">
            <video
              className="aspect-video w-full bg-bg object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/media/globe.jpg"
            >
              <source src="/media/proceso.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-3 text-xs text-muted">
            Pieza conceptual — no es una captura del producto. Destinada a
            transmitir el problema, no el mecanismo interno.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── SOLUTION (Preparar → Validar → Derivar) ─── */

function Solution() {
  const steps = [
    {
      k: "01",
      t: "Preparar",
      icon: FileText,
      d: "Diagnóstico de capacidad exportadora y mapa de lo que falta antes de gastar tiempo en un mercado al que todavía no se puede entrar.",
    },
    {
      k: "02",
      t: "Validar",
      icon: ShieldCheck,
      d: "Clasificación, costos estimados y checklist documental de esa operación concreta. Borradores de apoyo, nunca documentos oficiales.",
    },
    {
      k: "03",
      t: "Derivar",
      icon: ArrowRightCircle,
      d: "En el momento exacto, la operación sale de la plataforma hacia Exporta Simple o un despachante matriculado. No cruzamos la puerta del Estado.",
    },
  ];

  return (
    <section id="propuesta" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Qué hacemos</p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl text-fg sm:text-5xl">
          Ordenamos la complejidad y se la devolvemos a la PyME, accionable.
        </h2>
      </Reveal>

      {/* Timeline Steps */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((c, i) => (
          <Reveal key={c.k} delay={i * 120}>
            <article className="glass-card group relative rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px]">
              {/* Step number */}
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <c.icon className="size-5" />
                </span>
                <p className="text-xs font-medium tracking-[0.18em] text-accent">{c.k}</p>
              </div>
              <h3 className="mt-4 font-display text-2xl text-fg">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.d}</p>

              {/* Connector for desktop */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-3 md:block">
                  <ArrowRight className="size-4 text-accent/40" />
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-lg border border-border">
          <img
            src="/media/globe.jpg"
            alt="Rutas comerciales sobre el mapa de América del Sur"
            className="aspect-video w-full object-cover"
          />
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          No reemplazamos al especialista ni al organismo oficial. Los
          potenciamos. Y le damos a la PyME la misma calidad de información que
          hoy solo tienen las grandes compañías.
        </p>
      </Reveal>
    </section>
  );
}

/* ─── OPPORTUNITY (NEW SECTION) ─── */

function Opportunity() {
  return (
    <section id="oportunidad" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-accent">La oportunidad</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl text-fg sm:text-5xl">
            Argentina va a batir un récord exportador. ¿Cuántas PyMEs van a participar?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Reveal delay={0}>
            <div className="glass-card rounded-xl p-6">
              <Globe2 className="size-6 text-accent" />
              <p className="stat-value mt-4 font-display text-4xl sm:text-5xl">
                <AnimatedCounter value={103} suffix=" mil M" prefix="USD " decimals={0} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">
                Proyección de exportaciones para 2026 — récord histórico absoluto.
                <Cite n="8" />
              </p>
              <p className="mt-2 text-xs text-muted">
                En 2025 se exportaron USD 87.077M (INDEC). El crecimiento es del +22,9% interanual.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-card rounded-xl p-6">
              <ArrowRightCircle className="size-6 text-accent" />
              <p className="stat-value mt-4 font-display text-4xl sm:text-5xl">
                <AnimatedCounter value={24} suffix="%" prefix="+" decimals={0} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">
                Crecimiento interanual de exportaciones PyME (ene–ago 2026).
                <Cite n="9" />
              </p>
              <p className="mt-2 text-xs text-muted">
                6.721 PyMEs exportando: el mejor registro en 13 años. La demanda existe. Falta la infraestructura de acceso.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="glass-card rounded-xl p-6">
              <Globe2 className="size-6 text-accent" />
              <p className="mt-4 font-display text-3xl text-fg sm:text-4xl">
                MERCOSUR–UE
              </p>
              <p className="mt-3 text-sm leading-relaxed text-fg">
                El Acuerdo Interino (Ley 27.800) entró en vigor en mayo 2026.
                <Cite n="10" />
              </p>
              <p className="mt-2 text-xs text-muted">
                Europa se abre para las PyMEs argentinas. La Declaración de Origen en factura reemplaza al EUR.1. ¿Quién va a preparar a las empresas para aprovechar esto?
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-paper">
            El récord exportador no se traduce automáticamente en inclusión. Si la
            infraestructura digital no existe, el crecimiento se concentra en los
            mismos de siempre.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── WHY NOW + INVESTMENT ─── */

function Ask() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="md:grid md:grid-cols-2 md:gap-12">
        <Reveal variant="left">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Por qué ahora</p>
          <h2 className="mt-3 font-display text-3xl text-fg sm:text-4xl">
            San Lorenzo puede ser el punto de partida.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            El mundo reconfigura cadenas de suministro. Las regiones que den a
            sus PyMEs infraestructura real para competir afuera van a estar años
            adelante. Argentina tiene el talento y los productos. Falta la
            capa que conecta esa capacidad con el mundo.
          </p>
        </Reveal>
        <Reveal variant="right">
          <div className="mt-10 md:mt-0">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">La inversión</p>
            <h3 className="mt-3 font-display text-2xl text-fg">
              No es un empujón. Es infraestructura.
            </h3>
            <p className="mt-4 leading-relaxed text-muted">
              Construir esto al nivel que el mercado exige requiere inteligencia
              de alto rendimiento y talento senior, escaso y disputado a nivel
              global. Ambos son caros. Por eso buscamos una alianza seria entre
              sector público, ecosistema productivo local y un equipo que ya
              decidió jugarse por esto.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-fg">
              Esta inversión no es un gasto. Es la semilla de un sector
              exportador más grande, más fuerte y más inclusivo para la región.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [note, setNote] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { name, org, note, at: new Date().toISOString() };
    const prev = JSON.parse(localStorage.getItem("checomex-leads") || "[]") as unknown[];
    localStorage.setItem("checomex-leads", JSON.stringify([payload, ...prev]));
    setSent(true);
  }

  return (
    <section id="contacto" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-fg sm:text-5xl">
            El futuro no puede depender de la suerte.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Armando encontró ayuda. La próxima PyME de San Lorenzo no debería
            necesitar conocer a la persona indicada. Debería encontrar Che.Comex
            ya ahí, esperándola.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          {sent ? (
            <div className="glass-card max-w-md rounded-xl p-8">
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-accent/20">
                <ShieldCheck className="size-5 text-accent" />
              </div>
              <p className="text-fg">
                Recibido. Si dejaste organización y nombre, el equipo te contacta para
                una reunión de seguimiento — no un folleto.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="max-w-md space-y-5">
              <label className="block text-sm text-muted">
                Nombre
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none transition-all focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block text-sm text-muted">
                Organización
                <input
                  required
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  className="mt-1.5 h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none transition-all focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <label className="block text-sm text-muted">
                Cómo podemos avanzar
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="mt-1.5 w-full rounded-md border border-border bg-bg px-3 py-2 text-fg outline-none transition-all focus:border-accent/60 focus:ring-2 focus:ring-accent/20"
                />
              </label>
              <Button type="submit" size="lg" className="group w-full sm:w-auto">
                Quiero ser parte{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ─── SOURCES ─── */

function Sources() {
  return (
    <section id="fuentes" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl text-fg">Fuentes oficiales</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Cada cifra de esta página apunta a un documento público. Abrilos.
            Si un número no resiste la fuente, no debería estar acá.
          </p>
        </Reveal>
        <ol className="mt-8 space-y-4">
          {sources.map((s, i) => (
            <Reveal key={s.id} delay={i * 40}>
              <li
                id={`fuente-${s.label}`}
                className="scroll-mt-20 border-b border-border pb-4 text-sm"
              >
                <span className="text-accent">[{s.label}]</span>{" "}
                <span className="text-fg">{s.title}.</span>{" "}
                <span className="text-muted">
                  {s.publisher}, {s.year}.
                </span>{" "}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Abrir documento
                </a>
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
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-sm text-fg">Che.Comex</p>
          <p className="mt-1">San Lorenzo, Santa Fe · Argentina</p>
        </div>
        <div className="text-right">
          <p>Presentado en Expo EXA · San Lorenzo · Septiembre 2026</p>
          <p className="mt-1">Documento de trabajo para socios. Sin detalle técnico del producto.</p>
        </div>
      </div>
    </footer>
  );
}
