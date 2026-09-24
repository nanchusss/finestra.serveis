import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Pasarela from "./Pasarela";
import { useLanguage } from "../i18n";
import photo from "../Images/profesionales/arquitectura.jpg";

const copy={
  es:{intro:"Ventanas, cerramientos y protección solar a medida. Encuentra la solución para ganar luz, aislamiento y confort en tu espacio.",cta:"Hablemos de lo que necesitas",quick:"Encuentra tu solución",labels:["Ventanas de aluminio","Ventanas de PVC","Pérgolas","Toldos","Mosquiteras","Eficiencia energética"],alt:"Visualización de un espacio luminoso con carpinterías de aluminio abiertas a una terraza",caption:"Luz natural. Confort a medida."},
  ca:{intro:"Finestres, tancaments i protecció solar a mida. Troba la solució per guanyar llum, aïllament i confort al teu espai.",cta:"Parlem del que necessites",quick:"Troba la teva solució",labels:["Finestres d’alumini","Finestres de PVC","Pèrgoles","Tendals","Mosquiteres","Eficiència energètica"],alt:"Visualització d’un espai lluminós amb fusteries d’alumini obertes a una terrassa",caption:"Llum natural. Confort a mida."},
  en:{intro:"Made-to-measure windows, enclosures and solar protection. Find the right solution for more light, insulation and comfort in your space.",cta:"Let’s discuss what you need",quick:"Find your solution",labels:["Aluminium windows","PVC windows","Pergolas","Awnings","Insect screens","Energy efficiency"],alt:"Illustration of a light-filled interior with aluminium windows opening onto a terrace",caption:"Natural light. Tailored comfort."},
};
const slugs=["ventanas-aluminio","ventanas-pvc","pergolas-bioclimaticas","toldos-proteccion-solar","mosquiteras","eficiencia-energetica"];
const Page=styled.main`background:${p=>p.theme.colors.cream}`;
const Inner=styled.div`max-width:${p=>p.theme.maxw};margin:auto;padding:0 28px;@media(max-width:600px){padding:0 20px}`;
const Hero=styled.section`
  display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,70px);align-items:center;padding:44px 0 34px;
  @media(max-width:800px){grid-template-columns:1fr;padding:34px 0 28px;gap:28px}
`;
const Kicker=styled.div`font-size:12px;color:${p=>p.theme.colors.primary};letter-spacing:.13em;text-transform:uppercase;margin-bottom:22px`;
const H1=styled.h1`font-family:${p=>p.theme.fonts.display};font-size:clamp(42px,4.5vw,66px);font-weight:500;letter-spacing:-.045em;line-height:1.04`;
const P=styled.p`font-size:20px;line-height:1.65;color:${p=>p.theme.colors.muted};margin:24px 0`;
const Button=styled(Link)`display:inline-flex;align-items:center;justify-content:space-between;gap:18px;padding:17px 22px;border-radius:999px;background:${p=>p.theme.colors.primary};color:white;font-size:16px;font-weight:600;&:hover{background:${p=>p.theme.colors.primaryHover}}&:focus-visible{outline:3px solid ${p=>p.theme.colors.primary};outline-offset:4px}svg{flex-shrink:0}`;
const Visual=styled.figure`
  position:relative;margin:0;overflow:hidden;border-radius:0;min-height:420px;
  img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:58% center}
  &:after{content:"";position:absolute;inset:50% 0 0;background:linear-gradient(transparent,rgba(24,35,28,.8))}
  figcaption{position:absolute;z-index:1;bottom:26px;left:26px;right:26px;color:white;font-size:19px;line-height:1.5}
  @media(max-width:800px){min-height:290px}
`;
const Quick=styled.nav`
  padding:0 0 38px;h2{font-size:16px;letter-spacing:0;margin-bottom:16px;font-weight:500}
  > div{display:flex;flex-wrap:wrap;gap:10px}
  a{display:inline-flex;align-items:center;gap:14px;padding:13px 17px;border-radius:999px;border:1px solid ${p=>p.theme.colors.border};background:${p=>p.theme.colors.white};font-size:16px}
  a:hover{border-color:${p=>p.theme.colors.primary};color:${p=>p.theme.colors.primary}}
  a:focus-visible{outline:3px solid ${p=>p.theme.colors.primary};outline-offset:3px}
`;
export default function Servicios(){
 const {t,lang}=useLanguage();const c=copy[lang]||copy.es;
 return <Page><Helmet><title>{t("navSolutions")} | Finestra Serveis</title><meta name="description" content={c.intro}/><link rel="canonical" href="https://finestraserveis.com/servicios"/></Helmet>
 <Inner><Hero><div><Kicker>{t("serviceKick")}</Kicker><H1>{t("serviceTitle")}</H1><P>{c.intro}</P><Button to="/contacto">{c.cta}<FiArrowUpRight aria-hidden="true"/></Button></div><Visual><img src={photo} alt={c.alt} width="1536" height="1024" fetchpriority="high"/><figcaption>{c.caption}</figcaption></Visual></Hero>
 <Quick aria-label={c.quick}><h2>{c.quick}</h2><div>{slugs.map((slug,i)=><Link key={slug} to={`/productos/${slug}`}>{c.labels[i]}<FiArrowUpRight aria-hidden="true"/></Link>)}</div></Quick></Inner><Pasarela/>
 </Page>;
}
