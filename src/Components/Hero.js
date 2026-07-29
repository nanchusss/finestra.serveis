import styled from "styled-components";
import Imagen from "../Images/hero-finestra-premium.jpg";
import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../i18n";

const Section=styled.section`
  position:relative;min-height:calc(100svh - 88px);margin:0;overflow:hidden;
  background:url(${Imagen}) center/cover no-repeat;display:flex;align-items:flex-end;padding:clamp(22px,4vw,56px);
  &:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,25,16,.72) 0%,rgba(10,25,16,.32) 52%,rgba(10,25,16,.06) 78%),linear-gradient(0deg,rgba(10,25,16,.32),transparent 48%)}
  @media(max-width:700px){min-height:calc(100svh - 70px);padding:16px;&:before{background:linear-gradient(0deg,rgba(10,25,16,.8),rgba(10,25,16,.08) 75%)}}
`;
const Glass=styled.div`
  position:relative;z-index:2;width:min(760px,100%);padding:clamp(26px,4.4vw,58px);color:white;
  background:linear-gradient(135deg,rgba(31,53,38,.62),rgba(31,53,38,.3));
  border:1px solid rgba(255,255,255,.28);backdrop-filter:blur(20px) saturate(120%);
  box-shadow:0 30px 80px rgba(8,20,12,.28);
  @media(max-width:560px){padding:25px 20px;backdrop-filter:blur(14px)}
`;
const Kicker=styled.div`display:flex;align-items:center;gap:10px;font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.8);&:before{content:"";width:28px;height:1px;background:#fff}`;
const Title=styled.h1`
  font-family:${p=>p.theme.fonts.display};font-size:clamp(50px,6.5vw,94px);font-weight:500;line-height:.92;letter-spacing:-.065em;margin:24px 0 26px;
  em{font-style:normal;color:#d6e3d5;font-weight:400}
  @media(max-width:560px){font-size:clamp(45px,13vw,61px);margin:19px 0 20px}
`;
const Sub=styled.p`font-size:clamp(15px,1.3vw,19px);line-height:1.65;color:rgba(255,255,255,.78);max-width:560px;margin:0`;
const Actions=styled.div`display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:34px`;
const Primary=styled(Link)`
  display:inline-flex;align-items:center;justify-content:space-between;gap:30px;background:#fff;color:${p=>p.theme.colors.ink};
  padding:16px 19px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;transition:.25s;
  &:hover{transform:translateY(-3px);box-shadow:0 14px 32px rgba(0,0,0,.16)}
  @media(max-width:560px){width:100%}
`;
const Secondary=styled(Link)`display:inline-flex;align-items:center;padding:16px 19px;border:1px solid rgba(255,255,255,.3);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;@media(max-width:560px){width:100%;justify-content:center}`;
const Badge=styled.div`
  position:absolute;z-index:2;right:36px;top:36px;width:130px;height:130px;border-radius:50%;background:rgba(244,241,233,.8);
  border:1px solid rgba(255,255,255,.6);backdrop-filter:blur(14px);display:flex;flex-direction:column;align-items:center;justify-content:center;
  text-align:center;color:${p=>p.theme.colors.primary};font-size:9px;line-height:1.5;text-transform:uppercase;letter-spacing:.14em;
  svg{font-size:20px;margin-bottom:7px}@media(max-width:700px){display:none}
`;

export default function Hero(){const {t}=useLanguage();return <Section>
  <Glass><Kicker>{t("location")}</Kicker><Title>{t("heroTitle")} <em>{t("heroAccent")}</em></Title>
  <Sub>{t("heroText")}</Sub>
  <Actions><Primary to="/contacto">{t("talk")} <FiArrowUpRight/></Primary><Secondary to="/servicios">{t("solutions")}</Secondary></Actions></Glass>
  <Badge><FiArrowDownRight/>Confort<br/>a medida</Badge>
</Section>}
