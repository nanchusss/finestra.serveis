import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n";
import image from "../Images/profesionales/instalacion.jpg";

const copy = {
  es: {title:"Área profesionales",text:"Tú tienes la obra. Nosotros nos adaptamos a tu forma de trabajar.",cta:"Descubre cómo colaborar",options:["Suministro","Apoyo técnico","Instalación completa"],advice:"Asesoramiento técnico en obra",alt:"Detalle ilustrativo del ajuste de una ventana"},
  ca: {title:"Àrea professionals",text:"Tu tens l’obra. Nosaltres ens adaptem a la teva manera de treballar.",cta:"Descobreix com col·laborar",options:["Subministrament","Suport tècnic","Instal·lació completa"],advice:"Assessorament tècnic a l’obra",alt:"Detall il·lustratiu de l’ajust d’una finestra"},
  en: {title:"Professional area",text:"Your project. Our support, adapted to the way you work.",cta:"Discover how we work",options:["Window supply","Technical support","Full installation"],advice:"On-site technical advice",alt:"Illustration of a window being adjusted"},
};
const Section = styled.section`
  background:${p=>p.theme.colors.cream};padding:24px 28px;
  @media(max-width:600px){padding:24px 16px}
`;
const Panel = styled(Link)`
  max-width:${p=>p.theme.maxw};margin:auto;display:grid;grid-template-columns:170px minmax(0,1fr) auto;
  gap:32px;align-items:center;padding:20px 32px 20px 20px;background:${p=>p.theme.colors.primaryHover};color:${p=>p.theme.colors.white};
  border-top:3px solid ${p=>p.theme.colors.secondary};position:relative;
  text-decoration:none;transition:background .2s,box-shadow .2s;
  &:hover{background:${p=>p.theme.colors.primary};box-shadow:0 12px 32px rgba(24,35,28,.12)}
  &:focus-visible{outline:3px solid ${p=>p.theme.colors.primary};outline-offset:5px}
  @media(max-width:1100px){grid-template-columns:140px 1fr;gap:24px;padding:16px 24px 24px 16px}
  @media(max-width:650px){grid-template-columns:1fr;padding:24px;gap:22px}
`;
const Photo = styled.img`
  width:170px;height:184px;object-fit:cover;object-position:49% center;
  @media(max-width:1100px){width:140px;height:100%;min-height:190px;grid-row:1/3}
  @media(max-width:650px){display:none}
`;
const Content = styled.div`
  h2{font-family:${p=>p.theme.fonts.display};font-size:clamp(30px,2.6vw,38px);font-weight:500;line-height:1.1;letter-spacing:-.035em}
  p{font-size:19px;line-height:1.55;margin:12px 0 18px;max-width:560px;color:rgba(255,255,255,.88)}
  @media(max-width:650px){h2{font-size:34px;max-width:100%;min-height:0}p{font-size:18px;line-height:1.6;margin:18px 0}}
`;
const Options = styled.div`
  display:flex;gap:8px;flex-wrap:wrap;
  .option{display:inline-flex;align-items:center;gap:10px;padding:9px 13px;border:1px solid rgba(255,255,255,.45);font-size:16px;line-height:1.3;font-weight:500;color:white;transition:background .2s}

  svg{width:15px;height:15px;flex-shrink:0}

  @media(max-width:650px){display:grid;gap:0;.option{border:0;border-top:1px solid rgba(255,255,255,.25);padding:15px 0;font-size:18px;justify-content:space-between}.option:last-child{border-bottom:1px solid rgba(255,255,255,.25)}svg{width:20px;height:20px}}
`;
const Actions = styled.div`
  display:flex;flex-direction:column;align-items:center;gap:18px;
  @media(max-width:1100px){grid-column:2;flex-direction:row;align-items:center;flex-wrap:wrap;gap:18px}
  @media(max-width:650px){grid-column:auto;align-items:stretch;flex-direction:column;gap:18px}
`;
const MainLink = styled.span`
  display:inline-flex;align-items:center;justify-content:center;gap:18px;padding:17px 22px;
  background:${p=>p.theme.colors.cream};color:${p=>p.theme.colors.ink};font-size:16px;font-weight:600;white-space:nowrap;
  svg{flex-shrink:0} &:hover{background:${p=>p.theme.colors.white}}
  &:focus-visible{outline:3px solid ${p=>p.theme.colors.white};outline-offset:4px}
  @media(max-width:650px){width:100%;white-space:normal;justify-content:space-between}
  @media(max-width:400px){font-size:15px;padding:16px 18px;gap:12px}
`;
const Advice = styled.span`
  font-size:15px;line-height:1.5;color:white;text-decoration:underline;text-underline-offset:4px;
`;
export default function ProfessionalBanner(){
  const {lang}=useLanguage();const c=copy[lang]||copy.es;
  return <Section aria-labelledby="professional-area-title"><Panel to="/profesionales" aria-label={`${c.title}: ${c.cta}`}>
    <Photo src={image} alt={c.alt} width="1536" height="1024" loading="lazy"/>
    <Content><h2 id="professional-area-title">{c.title}</h2><p>{c.text}</p><Options>{["suministro","apoyo-tecnico","instalacion"].map((key,i)=><span className="option" key={key}>{c.options[i]}</span>)}</Options></Content>
    <Actions><MainLink>{c.cta}<FiArrowUpRight aria-hidden="true"/></MainLink><Advice>{c.advice}</Advice></Actions>
  </Panel></Section>;
}
