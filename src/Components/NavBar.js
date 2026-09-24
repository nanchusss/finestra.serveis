import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import logo from "../Images/logo.png";
import { useLanguage } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";


/* ===== COMPONENT ===== */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const {t}=useLanguage();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen(false);
  }, [location.pathname]);
  React.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstButton = menuRef.current.querySelector("button");
    firstButton?.focus();
    const onKey = event => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const nodes = menuRef.current.querySelectorAll("a[href], button");
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const media = window.matchMedia("(min-width: 1281px)");
    const onResize = event => { if (event.matches) setOpen(false); };
    media.addEventListener("change", onResize);
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); media.removeEventListener("change", onResize); };
  }, [open]);

  return (
    <>
      <TopStrip>
        <TopInner>
          <Social>
            <a href="https://instagram.com/finestra.serveis" target="_blank" rel="noreferrer">
              <FaInstagram size={16} />
            </a>
            <a href="https://wa.me/34691292245?text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20web%20de%20Finestra%20Serveis.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20proyecto." target="_blank" rel="noreferrer">
              <FaWhatsapp size={16} />
            </a>
          </Social>
        </TopInner>
      </TopStrip>

      <Bar>
        <Inner>
          <Brand to="/" aria-label={`${t("home")} · Finestra Serveis`}>
            <Logo src={logo} alt="Finestra Serveis" />
          </Brand>

          <Actions>
            <NavLink to="/">{t("home")}</NavLink>
            <NavLink to="/servicios">{t("navSolutions")}</NavLink>
            <NavLink to="/profesionales">{t("professionals")}</NavLink>
            <NavLink to="/sobrenosotros">{t("about")}</NavLink>
            <NavLink to="/contacto">{t("contact")}</NavLink>
            <LanguageSwitcher />
            <CTA to="/contacto">{t("quote")}</CTA>
          </Actions>

          <MenuToggle ref={toggleRef} aria-label="Abrir menú" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}>
            <FaBars />
          </MenuToggle>
        </Inner>
      </Bar>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <MobileMenu ref={menuRef} aria-hidden={!open} role="dialog" aria-modal={open ? "true" : undefined} aria-label={t("navigation")} id="mobile-navigation" open={open} inert={open ? undefined : ""}>
        <CloseBtn aria-label="Cerrar menú" onClick={() => { setOpen(false); toggleRef.current?.focus(); }}>
          <FaTimes size={22} />
        </CloseBtn>

        <MobileLink to="/">{t("home")}</MobileLink>
        <MobileLink to="/servicios">{t("navSolutions")}</MobileLink>
        <MobileLink to="/profesionales">{t("professionals")}</MobileLink>
        <MobileLink to="/sobrenosotros">{t("about")}</MobileLink>
        <MobileLink to="/contacto">{t("contact")}</MobileLink>
        <LanguageSwitcher />
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
  max-width: 1480px;
  margin: 0 auto;
  height: 88px;
  padding: 0 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1280px) {
    height: 70px;
  }
`;

/* ===== LOGO ===== */

const Brand = styled(Link)`
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  img { cursor: pointer; }
  &:focus-visible { outline: 3px solid ${p => p.theme.colors.primary}; outline-offset: 6px; }
  align-items: center;

  &:hover img {
    opacity: .85;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 166px;
  max-width: 166px;
  object-fit: contain;
  transition: transform .3s ease;

  @media (max-width: 1280px) {
    height: auto;
    width: 146px;
  }
`;

/* ===== DESKTOP MENU ===== */

const Actions = styled.div`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 54px 96px 130px 148px 90px 118px 210px;
  gap: 28px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const NavLink = styled(RouterNavLink)`
  text-align: center;
  white-space: nowrap;
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

  &[aria-current="page"]::after, &:hover::after {
    width: 100%;
  }
`;

const CTA = styled(Link)`
  padding: 15px 12px;
  text-align: center;
  white-space: nowrap;
  border-radius: 999px;
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

/* ===== MOBILE ===== */

const MenuToggle = styled.button`
  display: none;

  @media (max-width: 1280px) {
    display: flex;
    width: 42px;
    height: 42px;
    border-radius: 50%;
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
  z-index: 101;
`;

const MobileMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(90vw, 360px);
  height: 100dvh;
  overflow-y: auto;
  background: ${p=>p.theme.colors.cream};
  color: ${p => p.theme.colors.text};
  padding: 100px 30px 40px 30px;
  transform: translateX(${p => (p.open ? "0%" : "100%")});
  transition: transform .35s cubic-bezier(.77,0,.18,1);
  @media(prefers-reduced-motion: reduce) { transition: none; }
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-shadow: -20px 0 50px rgba(0,0,0,0.15);
  z-index: 102;
`;

const MobileLink = styled(RouterNavLink)`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  padding-bottom: 8px;
  border-bottom: 1px solid ${p => p.theme.colors.border};
  &[aria-current="page"] { color: ${p => p.theme.colors.primary}; border-bottom-color: ${p => p.theme.colors.primary}; }
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
