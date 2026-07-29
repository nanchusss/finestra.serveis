import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import Pasarela from "./Pasarela";
import { useLanguage } from "../i18n";

const Page=styled.main`background:${p=>p.theme.colors.cream}`;
const Hero=styled.section`max-width:${p=>p.theme.maxw};margin:auto;padding:clamp(85px,12vw,170px) 28px clamp(70px,9vw,120px);display:grid;grid-template-columns:1.35fr .65fr;gap:70px;align-items:end;@media(max-width:760px){grid-template-columns:1fr;padding:80px 20px 70px;gap:34px}`;
const Kicker=styled.div`font-size:10px;color:${p=>p.theme.colors.primary};letter-spacing:.2em;text-transform:uppercase;margin-bottom:22px`;
const H1=styled.h1`font-family:${p=>p.theme.fonts.display};font-size:clamp(54px,8vw,110px);font-weight:500;letter-spacing:-.07em;line-height:.9`;
const P=styled.p`font-size:clamp(16px,1.5vw,20px);line-height:1.7;color:${p=>p.theme.colors.muted};margin:0`;

export default function Servicios(){const {t}=useLanguage();return <Page>
  <Helmet><title>Cerramientos, ventanas y pérgolas en Cataluña | Finestra Serveis</title><meta name="description" content="Soluciones premium de aluminio, PVC, pérgolas bioclimáticas, toldos y mosquiteras en Barcelona y toda Cataluña."/><link rel="canonical" href="https://finestraserveis.com/servicios"/></Helmet>
  <Hero><div><Kicker>{t("serviceKick")}</Kicker><H1>{t("serviceTitle")}</H1></div><P>{t("serviceLead")}</P></Hero>
  <Pasarela/>
</Page>}
