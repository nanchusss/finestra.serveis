import styled from "styled-components";
import imgLogistica  from "../Images/map-cuyo.png";
import imgAluminio   from "../Images/aluminio.png";
import imgEficiencia from "../Images/eficiencia.png";
import imgEcommerce  from "../Images/pergolas.png";

const Page = styled.main`
  width: 100%;
`;

/* Banner full-width (tipo hero apilado) */
const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 62vh;              /* alto grande para impacto */
  min-height: 420px;
  max-height: 760px;
  overflow: hidden;
  @media (max-width: 820px){ height: 54vh; min-height: 360px; }
`;

const Bg = styled.img`
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  filter: saturate(1.05) contrast(1.03);
`;

const Shade = styled.div`
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 60%, rgba(0,0,0,0) 80%);
`;

const BannerTitle = styled.h2`
  position: absolute; left: 24px; bottom: 24px;
  margin: 0;
  color: #fff;
  font-weight: 900;
  font-size: clamp(28px, 5vw, 48px);
  letter-spacing: .2px;
`;

/* Bloque de descripción bajo cada banner */
const Details = styled.section`
  max-width: ${p=>p.theme.maxw};
  margin: 0 auto 48px;
  padding: 24px 20px 0;
`;

const Lead = styled.p`
  margin: 0 0 14px;
  color: ${p=>p.theme.colors.text};
  font-size: clamp(16px, 1.6vw, 18px);
  line-height: 1.6;
`;

const Bullets = styled.ul`
  margin: 8px 0 18px 18px;
  color: ${p=>p.theme.colors.muted};
  li { margin: 6px 0; }
`;



/* Separador suave entre servicios */
const Divider = styled.div`
  height: 28px;
  background: ${p=>p.theme.colors.neutral};
`;

/* --- Componente auxiliar para reusar patrón --- */
function ServiceBlock({ id, title, image, lead, bullets=[] }) {
  return (
    <section id={id}>
      <Banner>
        <Bg src={image} alt={title} />
        <Shade />
        <BannerTitle>{title}</BannerTitle>
      </Banner>
      <Details>
        <Lead>{lead}</Lead>
        {bullets.length > 0 && (
          <Bullets>
            {bullets.map((b)=>(<li key={b}>{b}</li>))}
          </Bullets>
        )}
       
      </Details>
      <Divider />
    </section>
  );
}

export default function Servicios(){
  return (
    <Page>
      <ServiceBlock
        id="venta"
        title="Instalación de Ventanas"
        image={imgLogistica}
        lead="Ofrecemos un servicio integral de venta e instalación de ventanas de aluminio y PVC, adaptándonos a las necesidades de cada cliente."
        bullets={[
          "Asesoramiento personalizado",
          "Instalación rápida y eficiente",
          "Amplia variedad de diseños y acabados",
        ]}
      />

      <ServiceBlock
        id="Reparacion"
        title="Eficiencia Energética"
        image={imgEficiencia}
        lead="Implementa soluciones que optimicen el consumo energético de tu flota."
        bullets={[
         "Aislamiento térmico y acústico",
         "Sistemas de doble y triple acristalamiento",
         "Perfiles de alta calidad",
         "Reducción de puentes térmicos",
         "Mejora del confort interior",
         "Asesoramiento en eficiencia energética",
         "Instalación profesional y garantía de calidad",
        ]}
      />

      <ServiceBlock
        id="Mantenimiento"
        title="Mantenimiento de aberturas"
        image={imgAluminio}
        lead="Ofrecemos servicios de mantenimiento preventivo y correctivo para ventanas de aluminio y PVC."
        bullets={[
          "Revisiones periódicas",
          "Limpieza y ajuste de herrajes",
          "Sustitución de componentes dañados",
          "Mejora de la eficiencia energética",
          "Asesoramiento en mejoras y reformas",
        ]}
      />

      <ServiceBlock
        id="Mosquiteras"
        title="Instalación de Mosquiteras"
        image={imgEcommerce}
        lead="Protege tu hogar de insectos con nuestras mosquiteras a medida."
        bullets={[
          
          "Mosquiteras enrollables, fijas y correderas",
          "Diseños personalizados para cada tipo de ventana",
          "Materiales de alta calidad y durabilidad",
          "Instalación profesional y rápida",
        ]}
      />
    </Page>
  );
}
