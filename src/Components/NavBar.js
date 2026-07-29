import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../Images/logo.png";
import { useLanguage } from "../i18n";


/* ===== COMPONENT ===== */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const {lang,setLang,t}=useLanguage();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <TopStrip>
        <TopInner>
          <Social>
            <a href="https://instagram.com/finestra.serveis" target="_blank" rel="noreferrer">
              <FaInstagram size={16} />
            </a>
            <a href="https://wa.me/34691292245" target="_blank" rel="noreferrer">
              <FaWhatsapp size={16} />
            </a>
          </Social>
        </TopInner>
      </TopStrip>

      <Bar>
        <Inner>
          <Brand to="/">
            <Logo src={logo} alt="Finestra Serveis" />
          </Brand>

          <Actions>
            <NavLink to="/servicios">{t("services")}</NavLink>
            <NavLink to="/sobrenosotros">{t("about")}</NavLink>
            <NavLink to="/contacto">{t("contact")}</NavLink>
            <Lang aria-label="Idioma" value={lang} onChange={e=>setLang(e.target.value)}><option value="es">ES</option><option value="ca">CA</option><option value="en">EN</option></Lang>
            <CTA to="/contacto">{t("quote")}</CTA>
          </Actions>

          <MenuToggle onClick={() => setOpen(true)}>
            <FaBars />
          </MenuToggle>
        </Inner>
      </Bar>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <MobileMenu open={open}>
        <CloseBtn onClick={() => setOpen(false)}>
          <FaTimes size={22} />
        </CloseBtn>

        <MobileLink to="/servicios">{t("services")}</MobileLink>
        <MobileLink to="/sobrenosotros">{t("about")}</MobileLink>
        <MobileLink to="/contacto">{t("contact")}</MobileLink>
        <Lang value={lang} onChange={e=>setLang(e.target.value)}><option value="es">Castellano</option><option value="ca">Català</option><option value="en">English</option></Lang>
      </MobileMenu>
    </>
  );
}


/* ===== TOP STRIP ===== */

const TopStrip = styled.div`
  display:none;
`;

const TopInner = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: flex-end;
`;

const Social = styled.div`
  display: flex;
  gap: 12px;

  a {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.08);
    color: white;
    transition: all .25s ease;
  }

  a:hover {
    background: ${p => p.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

/* ===== MAIN NAVBAR ===== */

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 80;
  width:100%;margin:0;
  background: rgba(247,245,239,0.78);
  backdrop-filter: blur(22px) saturate(140%);
  border-bottom: 1px solid rgba(47,71,53,.14);
  box-shadow:0 10px 40px rgba(26,42,31,.08);
`;

const Inner = styled.nav`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  height: 88px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    height: 70px;
  }
`;

/* ===== LOGO ===== */

const Brand = styled(Link)`
  display: flex;
  align-items: center;

  &:hover img {
    transform: scale(1.08);
  }
`;

const Logo = styled.img`
  height: 58px;
  width: auto;
  object-fit: contain;
  transition: transform .3s ease;

  @media (max-width: 900px) {
    height: 55px;
  }
`;

/* ===== DESKTOP MENU ===== */

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 12px;
  font-weight: 700;
  text-transform:uppercase;
  letter-spacing:.1em;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${p => p.theme.colors.primary};
    transition: width .25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CTA = styled(Link)`
  padding: 15px 20px;
  border-radius: 0;
  font-weight: 700;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.08em;
  background: ${p => p.theme.colors.primary};
  color: white;
  text-decoration: none;
  transition: all .25s ease;

  &:hover {
    background: ${p => p.theme.colors.primaryHover};
    transform: translateY(-3px);
  }
`;
const Lang=styled.select`border:1px solid ${p=>p.theme.colors.border};background:rgba(255,255,255,.45);border-radius:9px;padding:10px 8px;color:${p=>p.theme.colors.ink};font:600 11px ${p=>p.theme.fonts.primary};cursor:pointer`;

/* ===== MOBILE ===== */

const MenuToggle = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    width: 42px;
    height: 42px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${p => p.theme.colors.border};
    background: white;
    cursor: pointer;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  backdrop-filter: blur(4px);
  opacity: ${p => (p.open ? 1 : 0)};
  pointer-events: ${p => (p.open ? "auto" : "none")};
  transition: opacity .3s ease;
  z-index: 79;
`;

const MobileMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(90vw, 360px);
  height: 100%;
  background: ${p=>p.theme.colors.cream};
  color: ${p => p.theme.colors.text};
  padding: 100px 30px 40px 30px;
  transform: translateX(${p => (p.open ? "0%" : "100%")});
  transition: transform .35s cubic-bezier(.77,0,.18,1);
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: -20px 0 50px rgba(0,0,0,0.15);
  z-index: 80;
`;

const MobileLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  padding-bottom: 8px;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  transition: all .2s ease;

  &:hover {
    color: ${p => p.theme.colors.primary};
    transform: translateX(6px);
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.colors.text};
`;
