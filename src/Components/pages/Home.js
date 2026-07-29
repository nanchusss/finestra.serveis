import { Helmet } from "react-helmet-async";

import Hero from "../Hero";
import Stats from "../Stats";
import VanShowcase from "../VanShowCase";
import Pasarela from "../Pasarela";
import CucyoCoverage from "../CuyoCoverage";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://finestraserveis.com/#business",
    name: "Finestra Serveis",
    url: "https://finestraserveis.com/",
    image: "https://finestraserveis.com/og-finestra-serveis.jpg",
    telephone: "+34691292245",
    priceRange: "€€",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Cataluña" },
      { "@type": "City", name: "Barcelona" },
      { "@type": "City", name: "Granollers" },
      { "@type": "City", name: "Girona" },
      { "@type": "City", name: "Lleida" },
      { "@type": "City", name: "Tarragona" }
    ],
    sameAs: ["https://instagram.com/finestra.serveis"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cerramientos y protección solar",
      itemListElement: [
        "Ventanas de aluminio", "Ventanas de PVC", "Pérgolas bioclimáticas",
        "Toldos y protección solar", "Mosquiteras a medida"
      ].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }))
    }
  };
  return (
    <>
      <Helmet>
        <title>
          Ventanas, cerramientos y pérgolas en Barcelona | Finestra Serveis
        </title>

        <meta
          name="description"
          content="Ventanas de aluminio y PVC, cerramientos, pérgolas bioclimáticas, toldos y mosquiteras en Barcelona y Cataluña. Diseño a medida e instalación profesional."
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
        <meta property="og:image" content="https://finestraserveis.com/og-finestra-serveis.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Hero />
      <Stats />
      <CucyoCoverage />
      <Pasarela />
      <VanShowcase />
    </>
  );
}
