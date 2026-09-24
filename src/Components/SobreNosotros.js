import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n";
import aluminium from "../Images/profesionales/arquitectura.jpg";
import detail from "../Images/profesionales/instalacion.jpg";

const copy={
 es:{description:"Carpintería de aluminio y PVC, experiencia de obra y atención directa. Conoce cómo trabajamos en Finestra Serveis.",lead:"Carpintería de aluminio y PVC. Experiencia de obra y atención en cada detalle.",alt:"Visualización del ajuste de una ventana de aluminio",values:[["Experiencia","30 años de oficio","Conocimiento técnico aplicado a cada detalle."],["Precisión","Instalación cuidada","Medición, montaje y acabados coordinados con tu proyecto."],["Cercanía","En toda Cataluña","Asesoramiento directo antes, durante y después de la obra."]],cta:"Hablemos de tu proyecto"},
 ca:{description:"Fusteria d’alumini i PVC, experiència d’obra i atenció directa. Coneix com treballem a Finestra Serveis.",lead:"Fusteria d’alumini i PVC. Experiència d’obra i atenció a cada detall.",alt:"Visualització de l’ajust d’una finestra d’alumini",values:[["Experiència","30 anys d’ofici","Coneixement tècnic aplicat a cada detall."],["Precisió","Instal·lació acurada","Mesurament, muntatge i acabats coordinats amb el teu projecte."],["Proximitat","A tot Catalunya","Assessorament directe abans, durant i després de l’obra."]],cta:"Parlem del teu projecte"},
 en:{description:"Aluminium and PVC windows, site experience and personal service. Discover how we work at Finestra Serveis.",lead:"Aluminium and PVC windows. Site experience and attention to every detail.",alt:"Illustration of an aluminium window being adjusted",values:[["Experience","30 years of craftsmanship","Technical knowledge applied to every detail."],["Precision","Careful installation","Measurement, fitting and finishes coordinated with your project."],["Personal service","Across Catalonia","Direct advice before, during and after the work."]],cta:"Let’s discuss your project"},
};
const Page=styled.main`background:${p=>p.theme.colors.cream};color:${p=>p.theme.colors.ink}`;
const Hero=styled.section`
  position:relative;min-height:clamp(360px,48vw,520px);display:flex;align-items:flex-end;padding:40px 28px;
  background:linear-gradient(90deg,rgba(13,28,18,.8),rgba(13,28,18,.05)),url(${aluminium}) center 58%/cover;
  @media(max-width:600px){min-height:420px;padding:30px 20px}
`;
const HeroInner=styled.div`width:100%;max-width:${p=>p.theme.maxw};margin:auto;color:white`;
const Kicker=styled.div`font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:20px`;
const H1=styled.h1`font-family:${p=>p.theme.fonts.display};font-size:clamp(42px,4.8vw,68px);font-weight:500;letter-spacing:-.04em;line-height:1.05;max-width:760px`;
const Lead=styled.p`max-width:660px;font-size:21px;line-height:1.6;color:rgba(255,255,255,.9);margin:22px 0 0`;
const Section=styled.section`max-width:${p=>p.theme.maxw};margin:auto;padding:56px 28px;@media(max-width:600px){padding:36px 20px}`;
const Grid=styled.div`display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;align-items:center;@media(max-width:800px){grid-template-columns:1fr;gap:28px}`;
const Photo=styled.img`width:100%;height:360px;object-fit:cover;@media(max-width:600px){height:260px}`;
const H2=styled.h2`font-family:${p=>p.theme.fonts.display};font-size:clamp(32px,3.2vw,44px);font-weight:500;letter-spacing:-.035em;line-height:1.12;margin:0 0 22px`;
const Copy=styled.div`font-size:20px;line-height:1.7;p{margin:0 0 18px;color:${p=>p.theme.colors.muted}}p:last-child{margin:0}`;
const Values=styled.div`display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px;margin-top:40px;@media(max-width:700px){grid-template-columns:1fr;gap:24px;margin-top:32px}`;
const Value=styled.div`
  border-top:2px solid ${p=>p.theme.colors.primary};padding:22px 0 0;
  span{font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:${p=>p.theme.colors.primary}}
  h3{font-family:${p=>p.theme.fonts.display};font-size:27px;font-weight:500;line-height:1.15;margin:14px 0 12px}
  p{color:${p=>p.theme.colors.muted};font-size:19px;line-height:1.65;margin:0}
`;
const Contact=styled(Link)`display:inline-flex;align-items:center;gap:22px;margin-top:32px;padding:17px 24px;background:${p=>p.theme.colors.primary};color:white;font-size:16px;font-weight:600;&:hover{background:${p=>p.theme.colors.primaryHover}}&:focus-visible{outline:3px solid ${p=>p.theme.colors.primary};outline-offset:4px}`;
export default function SobreNosotros(){
 const {lang,t}=useLanguage();const c=copy[lang]||copy.es;
 return <Page><Helmet><title>{t("about")} | Finestra Serveis</title><meta name="description" content={c.description}/><link rel="canonical" href="https://finestraserveis.com/sobrenosotros"/></Helmet>
 <Hero><HeroInner><Kicker>{t("companyKick")}</Kicker><H1>{t("companyTitle")}</H1><Lead>{c.lead}</Lead></HeroInner></Hero>
 <Section><Grid><Photo src={detail} alt={c.alt} width="1536" height="1024" loading="lazy"/><Copy><H2>{t("companyHead")}</H2><p>{t("companyP1")}</p><p>{t("companyP2")}</p></Copy></Grid>
 <Values>{c.values.map(([label,title,text],i)=><Value key={label}><span>0{i+1} · {label}</span><h3>{title}</h3><p>{text}</p></Value>)}</Values><Contact to="/contacto">{c.cta}<FiArrowUpRight aria-hidden="true"/></Contact></Section>
 </Page>;
}
