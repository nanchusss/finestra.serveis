import React,{useRef,useState} from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {Helmet} from "react-helmet-async";
import {FiArrowUpRight,FiClock,FiMapPin,FiPhone} from "react-icons/fi";
import {FaWhatsapp} from "react-icons/fa";
import image from "../Images/contacto-finestra-premium.jpg";
import {useLanguage} from "../i18n";

const Page=styled.main`background:${p=>p.theme.colors.cream};color:${p=>p.theme.colors.ink}`;
const Hero=styled.section`min-height:48vh;padding:clamp(70px,10vw,140px) 28px;display:flex;align-items:end;background:linear-gradient(90deg,rgba(11,27,17,.86),rgba(11,27,17,.2)),url(${image}) center/cover;color:white`;
const HeroInner=styled.div`width:100%;max-width:${p=>p.theme.maxw};margin:auto`;
const Kicker=styled.div`font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,.68);margin-bottom:20px`;
const H1=styled.h1`font-family:${p=>p.theme.fonts.display};font-size:clamp(54px,8vw,110px);font-weight:500;line-height:.86;letter-spacing:-.075em;max-width:900px`;
const Section=styled.section`max-width:${p=>p.theme.maxw};margin:auto;padding:clamp(75px,10vw,130px) 28px;display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(50px,9vw,130px);@media(max-width:840px){grid-template-columns:1fr}`;
const Intro=styled.div`h2{font-family:${p=>p.theme.fonts.display};font-size:clamp(36px,4.6vw,60px);font-weight:500;line-height:.95;margin-bottom:25px}p{font-size:17px;line-height:1.7;color:${p=>p.theme.colors.muted}}`;
const ContactList=styled.div`margin-top:40px;border-top:1px solid ${p=>p.theme.colors.border}`;
const ContactItem=styled.a`display:flex;gap:14px;align-items:center;padding:18px 0;border-bottom:1px solid ${p=>p.theme.colors.border};font-size:14px;svg{font-size:20px;color:${p=>p.theme.colors.primary}}`;
const Form=styled.form`display:grid;grid-template-columns:1fr 1fr;gap:22px;padding:clamp(26px,4vw,52px);background:rgba(255,255,255,.64);border:1px solid rgba(66,99,74,.2);backdrop-filter:blur(18px);@media(max-width:560px){grid-template-columns:1fr;padding:24px 18px}`;
const Field=styled.label`display:grid;gap:9px;font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:${p=>p.theme.colors.muted};&.wide{grid-column:1/-1}`;
const control=`width:100%;border:0;border-bottom:1px solid #aeb7ae;background:transparent;padding:13px 0;font:500 16px "IBM Plex Sans",sans-serif;color:#18231c;outline:none;&:focus{border-color:#42634a}`;
const Input=styled.input`${control}`;
const Select=styled.select`${control}`;
const Textarea=styled.textarea`${control};min-height:120px;resize:vertical`;
const Button=styled.button`grid-column:1/-1;border:0;background:${p=>p.theme.colors.primary};color:white;padding:19px 22px;display:flex;align-items:center;justify-content:space-between;font:600 12px ${p=>p.theme.fonts.primary};text-transform:uppercase;letter-spacing:.1em;cursor:pointer;transition:.25s;&:hover{background:${p=>p.theme.colors.primaryHover}}`;
const Status=styled.div`grid-column:1/-1;padding:14px;border:1px solid currentColor;color:${p=>p.$ok?"#42634a":"#a33"}`;

export default function ContactForm(){
 const {t}=useLanguage(),ref=useRef(); const [sending,setSending]=useState(false),[status,setStatus]=useState(null);
 const submit=async e=>{e.preventDefault();setSending(true);setStatus(null);try{await emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE,process.env.REACT_APP_EMAIL_TEMPLATE,ref.current,{publicKey:process.env.REACT_APP_EMAIL_PUBLIC});setStatus({ok:true,text:"Solicitud enviada. Te responderemos lo antes posible."});ref.current.reset()}catch(err){setStatus({ok:false,text:"No se pudo enviar. Escríbenos por WhatsApp o inténtalo de nuevo."})}finally{setSending(false)}};
 return <Page><Helmet><title>Contacto y presupuestos | Finestra Serveis Barcelona</title><meta name="description" content="Solicita presupuesto para ventanas, cerramientos, pérgolas, toldos y mosquiteras en Barcelona y Cataluña. Asesoramiento directo y sin compromiso."/><link rel="canonical" href="https://finestraserveis.com/contacto"/><meta property="og:title" content="Contacta con Finestra Serveis"/><meta property="og:description" content="Cuéntanos tu proyecto. Te asesoramos sobre cerramientos y protección solar en Cataluña."/></Helmet>
 <Hero><HeroInner><Kicker>Contacto · Finestra Serveis</Kicker><H1>Hablemos del espacio que imaginas.</H1></HeroInner></Hero>
 <Section><Intro><h2>{t("contactTitle")}</h2><p>{t("contactText")} Normalmente respondemos en menos de 24 horas laborables.</p><ContactList><ContactItem href="tel:+34691292245"><FiPhone/>+34 691 292 245</ContactItem><ContactItem href="https://wa.me/34691292245?text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20web%20de%20Finestra%20Serveis.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20proyecto."><FaWhatsapp/>WhatsApp directo</ContactItem><ContactItem as="div"><FiMapPin/>Barcelona · Toda Cataluña</ContactItem><ContactItem as="div"><FiClock/>Lunes a viernes · 08:00–18:00</ContactItem></ContactList></Intro>
 <Form ref={ref} onSubmit={submit}>{status&&<Status $ok={status.ok}>{status.text}</Status>}<Field>{t("name")}<Input name="user_name" required/></Field><Field>{t("phone")}<Input name="user_phone" type="tel" required/></Field><Field className="wide">{t("email")}<Input name="user_email" type="email" required/></Field><Field className="wide">¿Qué necesitas?<Select name="service" defaultValue=""><option value="" disabled>Selecciona una solución</option><option>Ventanas de aluminio</option><option>Ventanas de PVC</option><option>Pérgola bioclimática</option><option>Toldo o protección solar</option><option>Mosquiteras</option><option>Otro proyecto</option></Select></Field><Field className="wide">{t("message")}<Textarea name="message" required/></Field><Button disabled={sending}>{sending?"Enviando…":t("send")}<FiArrowUpRight/></Button></Form></Section></Page>
}
