import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiMapPin, FiPhone } from "react-icons/fi";
import image from "../Images/hero-finestra-premium.png";
import { useLanguage } from "../i18n";

const Foot=styled.footer`position:relative;isolation:isolate;color:white;background:url(${image}) center 62%/cover;min-height:680px;padding:clamp(70px,9vw,130px) 28px 28px;display:flex;flex-direction:column;justify-content:space-between;
&:before{content:"";position:absolute;z-index:-1;inset:0;background:linear-gradient(90deg,rgba(11,27,17,.94),rgba(11,27,17,.68)),linear-gradient(0deg,rgba(11,27,17,.9),transparent 70%)}
@media(max-width:600px){min-height:760px;padding:70px 20px 24px}`;
const Inner=styled.div`max-width:${p=>p.theme.maxw};width:100%;margin:auto`;
const Top=styled.div`display:grid;grid-template-columns:1.25fr .75fr;gap:70px;@media(max-width:800px){grid-template-columns:1fr}`;
const Kicker=styled.div`font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.62);margin-bottom:22px`;
const H2=styled.h2`font-family:${p=>p.theme.fonts.display};font-size:clamp(48px,7vw,96px);font-weight:500;line-height:.92;letter-spacing:-.065em;max-width:820px`;
const Glass=styled.div`align-self:end;padding:30px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.25);backdrop-filter:blur(18px);font-size:15px;line-height:1.6`;
const Action=styled(Link)`display:flex;align-items:center;justify-content:space-between;margin-top:25px;padding:18px 0;border-top:1px solid rgba(255,255,255,.3);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em`;
const Bottom=styled.div`max-width:${p=>p.theme.maxw};width:100%;margin:80px auto 0;padding-top:24px;border-top:1px solid rgba(255,255,255,.2);display:grid;grid-template-columns:1fr auto auto;gap:28px;align-items:center;color:rgba(255,255,255,.68);font-size:12px;@media(max-width:700px){grid-template-columns:1fr;gap:16px}`;
const Contact=styled.div`display:flex;gap:18px;flex-wrap:wrap;a{display:flex;align-items:center;gap:7px}`;
const Social=styled.div`display:flex;gap:10px;a{width:40px;height:40px;border:1px solid rgba(255,255,255,.25);display:grid;place-items:center;transition:.25s;&:hover{background:white;color:${p=>p.theme.colors.ink}}}`;

export default function Footer(){const {t}=useLanguage();return <Foot><Inner><Top><div><Kicker>Finestra Serveis · Barcelona</Kicker><H2>Tu próximo espacio empieza con una conversación.</H2></div><Glass>Cerramientos y protección solar diseñados con precisión para una vida más luminosa, eficiente y conectada.<Action to="/contacto">{t("quote")} <FiArrowUpRight/></Action></Glass></Top></Inner>
<Bottom><span>© {new Date().getFullYear()} Finestra Serveis</span><Contact><a href="tel:+34691292245"><FiPhone/> +34 691 292 245</a><span><FiMapPin/> Cataluña</span></Contact><Social><a href="https://instagram.com/finestra.serveis" aria-label="Instagram"><FaInstagram/></a><a href="https://wa.me/34691292245?text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20web%20de%20Finestra%20Serveis.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20proyecto." aria-label="WhatsApp"><FaWhatsapp/></a></Social></Bottom></Foot>}
