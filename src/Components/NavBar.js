import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

/* ===== TOP STRIP ===== */

const TopStrip = styled.div`
  background: #111;
  padding: 8px 0;
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
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${p => p.theme.colors.border};
`;

const Inner = styled.nav`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  height: 148px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* ===== LOGO ===== */

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;

  &:hover img {
    transform: scale(1.12);
  }
`;

const Logo = styled.img`
  height: 194px;   /* aumenta tamaño real */
  width: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 900px) {
    height: 60px;
  }
`;

/* ===== MENU DESKTOP ===== */

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
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
  padding: 12px 22px;
  border-radius: 50px;
  font-weight: 700;
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

  @media (max-width: 900px) {
    display: flex;
    width: 42px;
    height: 42px;
    border-radius: 12px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${p => p.theme.colors.border};
    background: white;
  }
`;

const MobileMenu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: min(90vw, 360px);
  height: 100%;
  background: #111;
  color: white;
  padding: 40px 30px;
  transform: translateX(${p => (p.open ? "0%" : "100%")});
  transition: transform .3s ease;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MobileLink = styled(Link)`
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-decoration: none;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  color: white;
  border: none;
`;

/* ===== COMPONENT ===== */

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            <NavLink to="/servicios">Servicios</NavLink>
            <NavLink to="/sobrenosotros">Sobre Nosotros</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <CTA to="/contacto">Solicitar presupuesto</CTA>
          </Actions>

          <MenuToggle onClick={() => setOpen(true)}>
            <FaBars />
          </MenuToggle>
        </Inner>
      </Bar>

      <MobileMenu open={open}>
        <CloseBtn onClick={() => setOpen(false)}>
          <FaTimes size={24} />
        </CloseBtn>

        <MobileLink to="/servicios" onClick={() => setOpen(false)}>Servicios</MobileLink>
        <MobileLink to="/sobrenosotros" onClick={() => setOpen(false)}>Sobre Nosotros</MobileLink>
        <MobileLink to="/contacto" onClick={() => setOpen(false)}>Contacto</MobileLink>
        <MobileLink to="/contacto" onClick={() => setOpen(false)}>Solicitar presupuesto</MobileLink>
      </MobileMenu>
    </>
  );
}