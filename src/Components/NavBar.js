// src/components/Navbar.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

const TRACKING_URL = "https://tu-pagina-de-tracking.com";

/* ------- Top bar ------- */
const TopStrip = styled.div`
  background: ${(p) => p.theme.colors.text};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  padding: 6px 0;
  font-size: 14px;
`;
const TopInner = styled.div`
  max-width: ${(p) => p.theme.maxw};
  margin: 0 auto;
  padding: 6px 20px;
  display: flex; align-items: center; justify-content: flex-end;
`;
const Social = styled.div`
  display: flex; align-items: center; gap: 12px;
  a {
    display: inline-flex; align-items: center; justify-content: center;
    width: 32px; height: 32px; border-radius: 50%;
    color: ${(p) => p.theme.colors.white};
    background: ${(p) => p.theme.colors.primary};
    transition: background .2s ease, transform .2s ease;
  }
  a:hover { background: ${(p) => p.theme.colors.secondary}; transform: scale(1.1); }
`;

/* ------- Navbar principal ------- */
const Bar = styled.header`
  position: sticky; top: 0; z-index: 80;
  backdrop-filter: blur(8px);
  padding: 40px;
  background: rgba(255,255,255,.92);
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  
`;

const Inner = styled.nav`
  max-width: ${(p) => p.theme.maxw};
  margin: 0 auto;
  height: 110px;
  padding: 0 20px;
  display: flex; align-items: center; justify-content: space-between;

  @media (max-width: 720px){
    height: 76px;
  }
`;

const Brand = styled(Link)`
  display: flex; align-items: center;
  height: 100%;
  padding: 6px 0;
`;



const Logo = styled.img`
  height: 170px; width: auto; object-fit: contain;
  padding: 25px; 
  padding-top:10px;
  padding-bottom:10px;
  @media (max-width: 70%){ height: 50px; }
`;

const Actions = styled.div`
  display: flex; gap: 16px; align-items: center;
  a { color: ${(p) => p.theme.colors.text}; }
  @media (max-width: 720px){ display: none; } /* se oculta en mobile */
`;

const LinkItem = styled(Link)`
  padding: 10px 8px; border-radius: 10px; font-weight: 500;
  transition: background .2s ease;
  font-size: 18px;
  &:hover { background: ${(p) => p.theme.colors.neutral}; }
`;

const ExternalLink = styled.a`
  padding: 10px 8px; border-radius: 10px; font-weight: 500;
  transition: background .2s ease;
  font-size: 18px; color: ${(p) => p.theme.colors.text};
  &:hover { background: ${(p) => p.theme.colors.neutral}; }
`;

const Btn = styled(Link)`
  padding: 10px 14px; border-radius: 12px; font-weight: 700; cursor: pointer;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.white};
  transition: transform .12s, box-shadow .12s, background .2s;
  &:hover { transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,.08);
            background: ${(p) => p.theme.colors.neutral}; }
  &.primary{
    background: ${(p) => p.theme.colors.primary}; color: #fff; border-color: transparent;
    &:hover { filter: brightness(.95); }
  }
`;

/* ------- Botón hamburguesa (mobile) ------- */
const MenuToggle = styled.button`
  display: none;
  @media (max-width: 720px){
    display: inline-flex; align-items: center; justify-content: center;
    width: 42px; height: 42px; border-radius: 12px;
    border: 1px solid ${(p) => p.theme.colors.border};
    background: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.text};
  }
`;

/* ------- Menú móvil desplegable ------- */
const MobileMenuBackdrop = styled.div`
  position: fixed; inset: 0; z-index: 90;
  background: rgba(0,0,0,.35);
  opacity: ${(p) => (p.open ? 1 : 0)};
  pointer-events: ${(p) => (p.open ? "auto" : "none")};
  transition: opacity .2s ease;
`;

const MobileMenu = styled.aside`
  position: fixed; top: 0; right: 0; z-index: 95;
  width: min(84vw, 360px); height: 100%;
  background: #fff; border-left: 1px solid ${(p) => p.theme.colors.border};
  box-shadow: -10px 0 30px rgba(0,0,0,.08);
  transform: translateX(${(p) => (p.open ? "0%" : "100%")});
  transition: transform .25s ease;
  display: flex; flex-direction: column;
`;

const MobileHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px; border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const CloseBtn = styled.button`
  display: inline-flex; align-items: center; justify-content: center;
  width: 40px; height: 40px; border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.white};
`;

const MobileLinks = styled.div`
  display: grid; gap: 6px; padding: 12px 12px 20px;

  a {
    display: block; padding: 14px 12px; border-radius: 10px;
    font-size: 18px; color: ${(p) => p.theme.colors.text};
    text-decoration: none;
    border: 1px solid ${(p) => p.theme.colors.border};
    background: ${(p) => p.theme.colors.white};
  }
  a:hover { background: ${(p) => p.theme.colors.neutral}; }
`;

const MobileSocial = styled.div`
  margin-top: auto; padding: 16px; border-top: 1px solid ${(p) => p.theme.colors.border};
  display: flex; gap: 12px;
  a{
    display: inline-flex; width: 36px; height: 36px; border-radius: 50%;
    align-items: center; justify-content: center;
    background: ${(p) => p.theme.colors.primary}; color: #fff;
  }
`;

/* ------- Componente ------- */
export default function Navbar(){
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <TopStrip>
        <TopInner>
          {/* <a href={TRACKING_URL} target="_blank" rel="noreferrer" style={{color:'#fff', fontWeight:700}}>Rastrear envío</a> */}
          <Social>
            <a href="https://instagram.com/base.mza" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={16} /></a>
        
            <a href="https://wa.me/542616490621"      target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp size={16} /></a>
          </Social>
        </TopInner>
      </TopStrip>

      <Bar>
        <Inner>
          <Brand to="/" aria-label="Inicio">
            <Logo src={logo} alt="Base Mendoza Logística" />
          </Brand>

          {/* Menú escritorio */}
          <Actions>
            <LinkItem to="/servicios">Servicios</LinkItem>
            <ExternalLink
              href="https://www.google.com/maps?q=Los+Cedros+618+Godoy+Cruz+Mendoza"
              target="_blank" rel="noreferrer"
            >
              Dirección
            </ExternalLink>
            <LinkItem to="/sobrenosotros">Sobre Nosotros</LinkItem>
            <LinkItem to="/contacto">Contacto</LinkItem>
            <Btn to="/contacto" className="primary">Solicitar presupuesto</Btn>
          </Actions>

          {/* Botón hamburguesa */}
          <MenuToggle
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </MenuToggle>
        </Inner>
      </Bar>

      {/* Menú móvil */}
      <MobileMenuBackdrop open={open} onClick={close} />
      <MobileMenu open={open} aria-hidden={!open}>
        <MobileHeader>
          <img src={logo} alt="Base Mendoza Logística" style={{height: 36}} />
          <CloseBtn aria-label="Cerrar menú" onClick={close}><FaTimes /></CloseBtn>
        </MobileHeader>

        <MobileLinks onClick={close}>
          <Link to="/servicios">Servicios</Link>
          <a href="https://www.google.com/maps?q=Los+Cedros+618+Godoy+Cruz+Mendoza" target="_blank" rel="noreferrer">Dirección</a>
          <Link to="/sobrenosotros">Sobre Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/contacto" style={{
            background: "#00AEEF", color:"#fff", borderColor:"transparent", fontWeight:700, textAlign:"center"
          }}>
            Solicitar presupuesto
          </Link>
          <a href="https://wa.me/542616490621" target="_blank" rel="noreferrer" style={{
            borderColor:"transparent", background:"#FF7A00", color:"#fff", textAlign:"center", fontWeight:700
          }}>
            WhatsApp
          </a>
        </MobileLinks>

        <MobileSocial>
          <a href="https://instagram.com/tu_cuenta" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/tu_pagina"  target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://tiktok.com/@tu_cuenta"   target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a href="https://wa.me/542616490621"      target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </MobileSocial>
      </MobileMenu>
    </>
  );
}
