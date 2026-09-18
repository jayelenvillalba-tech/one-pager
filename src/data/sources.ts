export type Source = {
  id: string;
  label: string;
  title: string;
  publisher: string;
  year: string;
  href: string;
};

export const sources: Source[] = [
  {
    id: "s1",
    label: "1",
    title:
      "Informe 2023. Registro Nacional de Empresas MiPyME — Comercio internacional de bienes",
    publisher: "Secretaría de Industria y Desarrollo Productivo / Aduana y ARCA",
    year: "2024",
    href: "https://www.argentina.gob.ar/sites/default/files/informe_2023_nov_2024.pdf",
  },
  {
    id: "s2",
    label: "2",
    title:
      "Las MiPyMEs representan el 99,4% de las empresas y el 64% del empleo asalariado registrado del sector privado",
    publisher: "Secretaría de Industria y Desarrollo Productivo",
    year: "2024",
    href: "https://www.argentina.gob.ar/produccion/registrarse-como-pyme",
  },
  {
    id: "s3",
    label: "3",
    title: "El desafío exportador de la Argentina: evaluación 2011–2019",
    publisher: "CEPAL",
    year: "2023",
    href: "https://repositorio.cepal.org/bitstreams/70d08e5e-ac94-46c9-b4fb-07994f2dfbcb/download",
  },
  {
    id: "s4",
    label: "4",
    title:
      "Censo exportador: de más de 15.000 empresas a alrededor de 9.400 — la deuda estructural que persiste",
    publisher: "CERA, citados por El Cronista",
    year: "2026",
    href: "https://www.cronista.com/economia-politica/saltaron-26-las-exportaciones-pyme-pero-arrastran-una-deuda-que-no-logran-revertir/",
  },
  {
    id: "s5",
    label: "5",
    title:
      "Doing Business 2020 — Trading Across Borders (último informe de esta serie; reemplazado por B-READY desde 2024)",
    publisher: "Banco Mundial",
    year: "2020",
    href: "https://archive.doingbusiness.org/en/data/exploretopics/trading-across-borders",
  },
  {
    id: "s6",
    label: "6",
    title: "Monitor de Exportaciones PyME (MEP)",
    publisher: "CAME",
    year: "2024",
    href: "https://www.redcame.org.ar/",
  },
  {
    id: "s7",
    label: "7",
    title: "SME Competitiveness Outlook",
    publisher: "International Trade Centre (ITC / ONU)",
    year: "2025",
    href: "https://www.intracen.org/resources/publications/sme-competitiveness-outlook",
  },
  {
    id: "s8",
    label: "8",
    title:
      "Intercambio Comercial Argentino — Cifras estimadas de exportaciones 2025: USD 87.077 millones",
    publisher: "INDEC",
    year: "2025",
    href: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-3-2-40",
  },
  {
    id: "s9",
    label: "9",
    title:
      "Exportaciones PyME ene-ago 2026: USD 7.630 M (+24% interanual), 6.721 empresas — récord de 13 años",
    publisher: "CAME / Monitor de Exportación Pyme",
    year: "2026",
    href: "https://www.redcame.org.ar/",
  },
  {
    id: "s10",
    label: "10",
    title:
      "Acuerdo Interino de Complementación Económica MERCOSUR–Unión Europea (Ley 27.800, vigente mayo 2026)",
    publisher: "Boletín Oficial de la República Argentina",
    year: "2026",
    href: "https://www.boletinoficial.gob.ar/",
  },
];

export function cite(id: string) {
  return sources.find((s) => s.id === id);
}
