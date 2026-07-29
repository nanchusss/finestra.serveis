import { Navigate, Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { FiArrowUpRight, FiCheck, FiSun, FiVolume2, FiThermometer, FiSliders, FiMaximize2, FiPenTool, FiTool, FiShield } from "react-icons/fi";
import aluminio from "../../Images/aluminio.png";
import pvc from "../../Images/pvc.png";
import pergolas from "../../Images/pergolas.png";
import toldos from "../../Images/toldos.png";
import mosquiteras from "../../Images/almacenaje.png";
import eficiencia from "../../Images/eficiencia.png";

const products = {
  "ventanas-aluminio": {
    name:"Ventanas de aluminio", image:aluminio,
    title:"Precisión, luz y perfiles que duran.",
    intro:"Sistemas de aluminio a medida para proyectos que buscan líneas limpias, grandes aperturas y una relación natural entre interior y exterior.",
    benefits:["Perfiles con rotura de puente térmico","Grandes formatos y máxima entrada de luz","Amplia gama de acabados y colores","Mantenimiento mínimo y larga vida útil"],
    seo:"Ventanas de aluminio a medida en Barcelona y Cataluña. Instalación profesional, aislamiento térmico y acabados premium."
  },
  "ventanas-pvc": {
    name:"Ventanas de PVC", image:pvc,
    title:"Confort silencioso durante todo el año.",
    intro:"Ventanas de altas prestaciones pensadas para mejorar el aislamiento térmico y acústico sin renunciar a una estética serena y contemporánea.",
    benefits:["Excelente aislamiento térmico","Reducción del ruido exterior","Alta estanqueidad al aire y al agua","Solución eficiente y de bajo mantenimiento"],
    seo:"Ventanas de PVC en Barcelona y Cataluña con instalación profesional, aislamiento térmico y acústico de alto rendimiento."
  },
  "pergolas-bioclimaticas": {
    name:"Pérgolas bioclimáticas", image:pergolas,
    title:"Una nueva habitación bajo el cielo.",
    intro:"Creamos espacios exteriores habitables con lamas orientables, protección climática e integración arquitectónica a medida.",
    benefits:["Control natural de luz y ventilación","Protección frente a sol y lluvia","Iluminación y automatización opcionales","Diseño adaptado a cada arquitectura"],
    seo:"Pérgolas bioclimáticas a medida en Barcelona y Cataluña. Diseño, instalación y automatización para terrazas premium."
  },
  "toldos-proteccion-solar": {
    name:"Toldos y protección solar", image:toldos,
    title:"La sombra, diseñada con intención.",
    intro:"Sistemas de protección solar que reducen el sobrecalentamiento y amplían las horas de uso de terrazas, balcones y jardines.",
    benefits:["Confort térmico y protección UV","Tejidos técnicos de alta durabilidad","Accionamiento manual o motorizado","Integración discreta en fachada"],
    seo:"Toldos y protección solar en Barcelona y Cataluña. Sistemas a medida, motorización y tejidos técnicos."
  },
  "mosquiteras": {
    name:"Mosquiteras a medida", image:mosquiteras,
    title:"Aire libre, sin renunciar al confort.",
    intro:"Soluciones prácticamente invisibles para ventilar la vivienda con tranquilidad, fabricadas exactamente para cada apertura.",
    benefits:["Modelos enrollables, correderos y plisados","Perfiles discretos y resistentes","Fabricación totalmente a medida","Uso suave y mantenimiento sencillo"],
    seo:"Mosquiteras a medida en Barcelona y Cataluña. Modelos enrollables, correderos y plisados con instalación profesional."
  },
  "eficiencia-energetica": {
    name:"Eficiencia energética", image:eficiencia,
    title:"Menos consumo. Más bienestar.",
    intro:"Analizamos cada hueco y proponemos vidrios, perfiles y sistemas que reducen pérdidas térmicas y mejoran el confort de la vivienda.",
    benefits:["Diagnóstico personalizado","Vidrios dobles y triples","Reducción de puentes térmicos","Mayor confort y menor demanda energética"],
    seo:"Soluciones de eficiencia energética para ventanas y cerramientos en Barcelona y Cataluña. Aislamiento y ahorro energético."
  }
};

const Page=styled.main`background:${p=>p.theme.colors.cream};color:${p=>p.theme.colors.ink}`;
const Hero=styled.section`
  min-height:76vh;position:relative;display:flex;align-items:flex-end;padding:48px;
  background-image:linear-gradient(180deg,rgba(11,24,16,.06),rgba(11,24,16,.72)),url(${p=>p.$image});
  background-size:cover;background-position:center;
  @media(max-width:700px){min-height:68vh;padding:24px}
`;
const Glass=styled.div`
  width:min(780px,100%);padding:clamp(26px,4vw,52px);color:white;
  background:rgba(20,37,26,.48);border:1px solid rgba(255,255,255,.25);
  backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
  @media(max-width:560px){padding:24px 20px;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
`;
const Eyebrow=styled.div`font-size:11px;text-transform:uppercase;letter-spacing:.18em;margin-bottom:22px`;
const H1=styled.h1`font-family:${p=>p.theme.fonts.display};font-size:clamp(48px,7vw,92px);font-weight:400;line-height:.95;letter-spacing:-.04em`;
const Intro=styled.p`font-size:clamp(16px,1.6vw,21px);line-height:1.65;max-width:650px;margin:28px 0 0;color:rgba(255,255,255,.86)`;
const Section=styled.section`max-width:${p=>p.theme.maxw};margin:auto;padding:clamp(90px,11vw,160px) 28px`;
const Grid=styled.div`display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(50px,10vw,150px);@media(max-width:800px){grid-template-columns:1fr}`;
const Heading=styled.h2`font-family:${p=>p.theme.fonts.display};font-size:clamp(40px,5vw,68px);font-weight:400;line-height:1.02;letter-spacing:-.03em`;
const List=styled.div`border-top:1px solid ${p=>p.theme.colors.border}`;
const Row=styled.div`display:flex;gap:18px;align-items:center;padding:22px 0;border-bottom:1px solid ${p=>p.theme.colors.border};font-size:16px;svg{color:${p=>p.theme.colors.primary}}`;
const Cta=styled.section`margin:0 28px 28px;padding:clamp(60px,8vw,110px);background:${p=>p.theme.colors.primary};color:white;display:flex;align-items:end;justify-content:space-between;gap:30px;@media(max-width:700px){margin:0;padding:60px 20px;display:block}`;
const CtaLink=styled(Link)`display:inline-flex;gap:34px;align-items:center;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(12px);padding:18px 22px;margin-top:30px;text-transform:uppercase;font-size:12px;letter-spacing:.1em;@media(max-width:560px){width:100%;justify-content:space-between}`;
const Tech=styled.section`border-top:1px solid ${p=>p.theme.colors.border};border-bottom:1px solid ${p=>p.theme.colors.border};display:grid;grid-template-columns:repeat(4,1fr);@media(max-width:700px){grid-template-columns:repeat(2,1fr)}`;
const TechItem=styled.div`min-height:180px;padding:30px;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid ${p=>p.theme.colors.border};svg{font-size:28px;color:${p=>p.theme.colors.primary}}strong{font-family:${p=>p.theme.fonts.display};font-size:19px;font-weight:500}span{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:${p=>p.theme.colors.muted}}@media(max-width:700px){min-height:150px;padding:22px;border-bottom:1px solid ${p=>p.theme.colors.border}}`;
const Process=styled.section`background:${p=>p.theme.colors.ink};color:white;padding:clamp(90px,10vw,140px) 28px`;
const ProcessInner=styled.div`max-width:${p=>p.theme.maxw};margin:auto`;
const Steps=styled.div`display:grid;grid-template-columns:repeat(4,1fr);margin-top:65px;border-top:1px solid rgba(255,255,255,.25);@media(max-width:760px){grid-template-columns:1fr;margin-top:40px}`;
const Step=styled.div`padding:28px 28px 20px 0;border-right:1px solid rgba(255,255,255,.16);svg{font-size:25px;color:#a9c0ad;margin-bottom:48px}span{display:block;font-size:10px;letter-spacing:.15em;color:rgba(255,255,255,.48)}h3{font-family:${p=>p.theme.fonts.display};font-size:22px;font-weight:500;margin:12px 0 8px}p{font-size:13px;line-height:1.6;color:rgba(255,255,255,.56);max-width:220px}@media(max-width:760px){display:grid;grid-template-columns:45px 1fr;padding:24px 0;border-right:0;border-bottom:1px solid rgba(255,255,255,.16);svg{margin:0}span,h3,p{grid-column:2}}`;

export default function Producto(){
  const {slug}=useParams(); const product=products[slug];
  if(!product) return <Navigate to="/servicios" replace/>;
  const canonical=`https://finestraserveis.com/productos/${slug}`;
  return <Page>
    <Helmet>
      <title>{product.name} en Cataluña | Finestra Serveis</title>
      <meta name="description" content={product.seo}/>
      <link rel="canonical" href={canonical}/>
      <meta property="og:title" content={`${product.name} | Finestra Serveis`}/>
      <meta property="og:description" content={product.seo}/>
      <meta property="og:type" content="website"/><meta property="og:url" content={canonical}/>
    </Helmet>
    <Hero $image={product.image}><Glass><Eyebrow>Finestra Serveis · Soluciones</Eyebrow><H1>{product.title}</H1><Intro>{product.intro}</Intro></Glass></Hero>
    <Tech><TechItem><FiThermometer/><div><strong>Aislamiento</strong><span>Confort térmico</span></div></TechItem><TechItem><FiVolume2/><div><strong>Silencio</strong><span>Control acústico</span></div></TechItem><TechItem><FiSun/><div><strong>Luz natural</strong><span>Bienestar interior</span></div></TechItem><TechItem><FiSliders/><div><strong>A medida</strong><span>Personalización total</span></div></TechItem></Tech>
    <Section><Grid><div><Eyebrow>Por qué elegirlo</Eyebrow><Heading>Rendimiento que se nota. Diseño que permanece.</Heading></div><List>{product.benefits.map(x=><Row key={x}><FiCheck/>{x}</Row>)}</List></Grid></Section>
    <Process><ProcessInner><Eyebrow>Del concepto a la instalación</Eyebrow><Heading>Un proceso preciso. Un resultado impecable.</Heading><Steps><Step><FiMaximize2/><span>01 · MEDIMOS</span><h3>Visita técnica</h3><p>Estudiamos el hueco, la orientación y las necesidades reales.</p></Step><Step><FiPenTool/><span>02 · DISEÑAMOS</span><h3>Solución a medida</h3><p>Definimos sistema, vidrio, acabado y cada encuentro.</p></Step><Step><FiTool/><span>03 · INSTALAMOS</span><h3>Montaje cuidado</h3><p>Equipo propio, protección del espacio y máxima precisión.</p></Step><Step><FiShield/><span>04 · RESPONDEMOS</span><h3>Garantía real</h3><p>Revisión final y acompañamiento después de la obra.</p></Step></Steps></ProcessInner></Process>
    <Cta><Heading>¿Imaginamos juntos tu próximo espacio?</Heading><CtaLink to="/contacto">Solicitar asesoramiento <FiArrowUpRight/></CtaLink></Cta>
  </Page>
}
