export type Source = {
  id: string;
  label: string;
  title: string;
  publisher: string;
  year: string;
  href: string;
  annotation?: string;
};

export const sources: Source[] = [
  {
    id: "s1",
    label: "1",
    title:
      "Informe Oficial: Registro Nacional de Empresas MiPyME — Comercio internacional de bienes (1,3% de empleadoras exportan, ~7.100 firmas sobre 549.100)",
    publisher: "Secretaría de Industria y Comercio / Aduana y ARCA",
    year: "2024",
    href: "https://www.argentina.gob.ar/produccion/registrarse-como-pyme",
    annotation:
      "La participación PyME en el valor exportado oscila entre el 8% y el 15% según el corte metodológico (CERA: 7,8%; CAME: 11,9%; Sec. PyME: 15%).",
  },
  {
    id: "s2",
    label: "2",
    title:
      "Estructura productiva: Las MiPyMEs representan el 99,4% de las empresas y el 64% del empleo asalariado formal registrado",
    publisher: "Ministerio de Economía / Secretaría PyME",
    year: "2024",
    href: "https://www.argentina.gob.ar/produccion/registrarse-como-pyme",
  },
  {
    id: "s3",
    label: "3",
    title:
      "El desafío exportador de la Argentina: evaluación estructural de pérdida de empresas exportadoras 2011–2019",
    publisher: "CEPAL (Naciones Unidas)",
    year: "2023",
    href: "https://repositorio.cepal.org/bitstreams/70d08e5e-ac94-46c9-b4fb-07994f2dfbcb/download",
  },
  {
    id: "s4",
    label: "4",
    title:
      "Censo y evolución exportadora: En 17 años dejaron de exportar más de 4.500 empresas (de 15.075 al récord histórico a ~9.400 firmas hoy)",
    publisher: "CERA (Cámara de Exportadores de la República Argentina)",
    year: "2026",
    href: "https://www.cera.com.ar/",
  },
  {
    id: "s5",
    label: "5",
    title:
      "Doing Business — Trading Across Borders: Cumplimiento documental en América Latina toma 35,7 h vs 2,3 h en OCDE (15×). Trámite fronterizo: 55,3 h vs 12,7 h (4×)",
    publisher: "Banco Mundial",
    year: "2020",
    href: "https://archive.doingbusiness.org/en/data/exploretopics/trading-across-borders",
    annotation:
      "Último informe oficial de esta serie histórica (discontinuada en sep-2021 y sucedida por B-READY).",
  },
  {
    id: "s6",
    label: "6",
    title: "Monitor de Exportación PyME (MEP) y análisis de concentración",
    publisher: "CAME (Confederación Argentina de la Mediana Empresa)",
    year: "2026",
    href: "https://www.redcame.org.ar/",
  },
  {
    id: "s7",
    label: "7",
    title:
      "Peso relativo de los Organismos Verificados en el Comex argentino (SENASA explica el 57% del valor exportado, USD 49.600 M)",
    publisher: "Che.Comex Anexo Técnico 1 & 2 / Base INDEC y BCR",
    year: "2026",
    href: "#propuesta",
  },
  {
    id: "s8",
    label: "8",
    title:
      "Intercambio Comercial Argentino 2025 (USD 87.077 M) y Proyecciones 2026 de récord histórico de exportaciones (~USD 103.000 M)",
    publisher: "INDEC / Proyecciones CERA (USD 103.200 M) y LCG (USD 103.740 M)",
    year: "2026",
    href: "https://www.indec.gob.ar/",
  },
  {
    id: "s9",
    label: "9",
    title:
      "Exportaciones PyME ene-ago 2026: USD 7.360 M (+24% en valor) con 6.721 firmas (+3% en empresas) — Máximo en valor desde 2013",
    publisher: "Datos Secretaría de Comercio / CAME",
    year: "2026",
    href: "https://www.redcame.org.ar/",
    annotation:
      "Crecimiento del 24% en valor con apenas 3% en cantidad de firmas evidencia que el repunte sigue concentrado en las mismas empresas de siempre.",
  },
  {
    id: "s10",
    label: "10",
    title:
      "Acuerdo Interino MERCOSUR–Unión Europea (Ley 27.800, sancionada 26/02/2026, aplicación provisional desde 01/05/2026) y Disp. SSCE 1/2026 (Declaración de Origen en factura)",
    publisher: "Boletín Oficial de la República Argentina",
    year: "2026",
    href: "https://www.boletinoficial.gob.ar/",
  },
  {
    id: "s11",
    label: "11",
    title:
      "Nodo Portuario Up River (San Lorenzo - Gran Rosario): 30 terminales portuarias concentran el ~75% de los despachos agroindustriales del país",
    publisher: "Bolsa de Comercio de Rosario (BCR)",
    year: "2025",
    href: "https://www.bcr.com.ar/",
  },
  {
    id: "s12",
    label: "12",
    title:
      "Simplificación arancelaria y de envíos courier internacionales (Resoluciones ARCA y Secretaría de Comercio)",
    publisher: "Boletín Oficial de la República Argentina",
    year: "2026",
    href: "https://www.boletinoficial.gob.ar/",
  },
  {
    id: "s13",
    label: "13",
    title:
      "World Trade Report 2025: Inteligencia Artificial y Comercio Global — Crecimiento proyectado del +34% al +37% en el comercio de bienes y servicios para 2040 (+12-13% en PIB global)",
    publisher: "Organización Mundial del Comercio (OMC)",
    year: "2025",
    href: "https://www.wto-ilibrary.org/content/books/9789287074560c001",
    annotation:
      "El informe destaca que las economías de ingresos medios y bajos pueden ser las más beneficiadas por la adopción de IA en comercio, con hasta +18,1 puntos porcentuales en crecimiento comercial.",
  },
];

export function cite(id: string) {
  return sources.find((s) => s.id === id);
}
