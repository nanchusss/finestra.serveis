import { Helmet } from "react-helmet-async";

import Hero from "../Hero";
import Stats from "../Stats";
import VanShowcase from "../VanShowCase";
import Pasarela from "../Pasarela";
import CucyoCoverage from "../CuyoCoverage";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Carpinteria de aluminio y PVC en Barcelona | Finestra Serveis
        </title>

        <meta
          name="description"
          content="Especialistas en instalación de ventanas de aluminio y PVC en Barcelona, Granollers, Vallés Oriental. Mejora el aislamiento térmico y acústico de tu hogar. Cerramientos de alta calidad con diseño moderno y durabilidad garantizada.  Eficiencia energética"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://finestraserveis.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Ventanas en Barcelona | Finestra Serveis" />
        <meta
          property="og:description"
          content="Instalación profesional de ventanas de aluminio y PVC en Barcelona."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finestraserveis.com/" />
      </Helmet>

      <h1 style={{ display: "none" }}>
        Ventanas de aluminio y PVC en Barcelona. Carpinteria de alta calidad para tu hogar. Carpinteria aluminio y PVC Granollers, Girona.
      </h1>

      <Hero />
      <Stats />
      <CucyoCoverage />
      <Pasarela />
      <VanShowcase />
    </>
  );
}