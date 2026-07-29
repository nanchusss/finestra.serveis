import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import about from "../Images/about.jpg";

const Page=styled.main`background:${p=>p.theme.colors.cream};color:${p=>p.theme.colors.ink}`;
const Hero=styled.section`position:relative;margin:0 18px;border-radius:24px;overflow:hidden;min-height:76vh;background:linear-gradient(0deg,rgba(13,28,18,.72),rgba(13,28,18,.08)),url(${about}) center/cover;display:flex;align-items:flex-end;padding:clamp(24px,5vw,68px);@media(max-width:600px){margin:0 10px;border-radius:18px;min-height:68vh}`;
const Glass=styled.div`max-width:800px;padding:clamp(26px,4vw,50px);color:white;background:rgba(24,43,30,.46);border:1px solid rgba(255,255,255,.25);border-radius:20px;backdrop-filter:blur(18px)`;
const Kicker=styled.div`font-size:10px;letter-spacing:.2em;text-transform:uppercase;margin-bottom:20px`;
const H1=styled.h1`font-family:${p=>p.theme.fonts.display};font-size:clamp(48px,7vw,92px);font-weight:500;letter-spacing:-.065em;line-height:.93`;
const Section=styled.section`max-width:${p=>p.theme.maxw};margin:auto;padding:clamp(90px,12vw,160px) 28px`;
const Grid=styled.div`display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(50px,10vw,150px);@media(max-width:760px){grid-template-columns:1fr}`;
const H2=styled.h2`font-family:${p=>p.theme.fonts.display};font-size:clamp(40px,5vw,68px);font-weight:500;letter-spacing:-.05em;line-height:1`;
const Copy=styled.div`font-size:17px;line-height:1.8;color:${p=>p.theme.colors.muted};p{margin:0 0 25px}`;
const Values=styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:${p=>p.theme.colors.border};@media(max-width:700px){grid-template-columns:1fr}`;
const Value=styled.div`background:${p=>p.theme.colors.cream};padding:38px 28px;span{font-size:10px;letter-spacing:.15em;color:${p=>p.theme.colors.primary}}h3{font-family:${p=>p.theme.fonts.display};font-size:24px;font-weight:500;margin:40px 0 12px}p{color:${p=>p.theme.colors.muted};font-size:14px;line-height:1.6}`;

export default function SobreNosotros(){return <Page><Helmet><title>Sobre Finestra Serveis | Especialistas en cerramientos</title><meta name="description" content="Conoce Finestra Serveis: especialistas en cerramientos de aluminio y PVC, protección solar e instalación profesional en Cataluña."/><link rel="canonical" href="https://finestraserveis.com/sobrenosotros"/></Helmet>
<Hero><Glass><Kicker>Nuestra forma de hacer</Kicker><H1>La precisión también puede sentirse.</H1></Glass></Hero>
<Section><Grid><H2>Más que instalar. Transformamos espacios.</H2><Copy><p>En Finestra Serveis combinamos oficio, tecnología y sensibilidad arquitectónica para resolver cada proyecto con precisión.</p><p>Escuchamos cómo vives, estudiamos la luz y elegimos el sistema adecuado. El resultado son espacios más confortables, eficientes y conectados con su entorno.</p></Copy></Grid></Section>
<Section><Values><Value><span>01 · EXPERIENCIA</span><h3>30 años de oficio</h3><p>Conocimiento técnico aplicado a cada detalle.</p></Value><Value><span>02 · PRECISIÓN</span><h3>Instalación cuidada</h3><p>Medición, montaje y acabados sin concesiones.</p></Value><Value><span>03 · CERCANÍA</span><h3>En toda Cataluña</h3><p>Asesoramiento directo antes, durante y después.</p></Value></Values></Section></Page>}
