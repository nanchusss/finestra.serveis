import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n";
import aluminio from "../Images/aluminio.png";
import pvc from "../Images/pvc.png";
import eficiencia from "../Images/eficiencia.png";
import mosquiteras from "../Images/almacenaje.png";
import toldos from "../Images/toldos.png";
import pergolas from "../Images/pergolas.png";

const products=[
  {n:"01",img:aluminio,title:"Ventanas de aluminio",desc:"Líneas mínimas, máxima luz y resistencia excepcional.",to:"/productos/ventanas-aluminio",featured:true},
  {n:"02",img:pvc,title:"Ventanas de PVC",desc:"Aislamiento superior para un hogar más silencioso.",to:"/productos/ventanas-pvc"},
  {n:"03",img:pergolas,title:"Pérgolas bioclimáticas",desc:"Arquitectura exterior que se adapta al clima.",to:"/productos/pergolas-bioclimaticas"},
  {n:"04",img:toldos,title:"Protección solar",desc:"Sombra, temperatura y privacidad bajo control.",to:"/productos/toldos-proteccion-solar",featured:true},
  {n:"05",img:mosquiteras,title:"Mosquiteras a medida",desc:"Ventilación natural con una presencia casi invisible.",to:"/productos/mosquiteras"},
  {n:"06",img:eficiencia,title:"Eficiencia energética",desc:"Soluciones que reducen consumo y mejoran el confort.",to:"/productos/eficiencia-energetica"}
];

const Section=styled.section`padding:clamp(90px,11vw,160px) 28px;background:${p=>p.theme.colors.ink};color:white;overflow:hidden;@media(max-width:600px){padding:82px 14px}`;
const Inner=styled.div`max-width:${p=>p.theme.maxw};margin:auto`;
const Head=styled.div`display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:end;margin-bottom:64px;@media(max-width:760px){grid-template-columns:1fr;margin-bottom:42px}`;
const Eyebrow=styled.div`font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#a8b8aa;margin-bottom:18px`;
const H2=styled.h2`font-family:${p=>p.theme.fonts.display};font-size:clamp(44px,6vw,78px);font-weight:500;line-height:.96;letter-spacing:-.055em;max-width:720px`;
const Lead=styled.p`font-size:17px;line-height:1.7;color:rgba(255,255,255,.58);max-width:500px;margin:0 0 4px auto;@media(max-width:760px){margin:0}`;
const Grid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:18px;@media(max-width:720px){grid-template-columns:1fr;gap:12px}`;
const Card=styled(Link)`
  position:relative;isolation:isolate;height:${p=>p.$featured?"650px":"480px"};overflow:hidden;display:flex;align-items:flex-end;
  &:before{content:"";position:absolute;z-index:-1;inset:0;background:linear-gradient(0deg,rgba(8,19,12,.83),rgba(8,19,12,.03) 66%),url(${p=>p.$image}) center/cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
  &:hover:before{transform:scale(1.045)}
  &:hover .arrow{transform:rotate(45deg);background:#fff;color:${p=>p.theme.colors.ink}}
  @media(max-width:720px){height:480px}
  @media(max-width:480px){height:410px}
`;
const Info=styled.div`
  width:calc(100% - 32px);margin:16px;padding:24px;background:rgba(24,38,28,.48);border:1px solid rgba(255,255,255,.2);
  backdrop-filter:blur(16px) saturate(120%);display:grid;grid-template-columns:1fr auto;gap:18px;align-items:end;
  @media(max-width:480px){width:calc(100% - 20px);margin:10px;padding:18px}
`;
const Number=styled.span`font-size:10px;letter-spacing:.16em;color:rgba(255,255,255,.55)`;
const Title=styled.h3`font-family:${p=>p.theme.fonts.display};font-size:clamp(25px,3vw,38px);font-weight:500;letter-spacing:-.04em;margin:8px 0`;
const Desc=styled.p`font-size:13px;line-height:1.5;color:rgba(255,255,255,.64);margin:0`;
const Arrow=styled.span`width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.35);display:grid;place-items:center;transition:.3s`;

export default function Pasarela(){const {t}=useLanguage();return <Section id="soluciones"><Inner>
  <Head><div><Eyebrow>{t("catalog")}</Eyebrow><H2>{t("catalogTitle")}</H2></div>
  <Lead>{t("catalogLead")}</Lead></Head>
  <Grid>{products.map(p=><Card key={p.title} to={p.to} $image={p.img} $featured={p.featured}>
    <Info><div><Number>{p.n} · COLECCIÓN</Number><Title>{p.title}</Title><Desc>{p.desc}</Desc></div><Arrow className="arrow"><FiArrowUpRight/></Arrow></Info>
  </Card>)}</Grid>
</Inner></Section>}
