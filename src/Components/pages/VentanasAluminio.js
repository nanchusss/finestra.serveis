import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ventana from "../../Images/aluminio.jpg"

/* ================= STYLES ================= */

const Wrapper = styled.div`
  background: white;
`;

const Hero = styled.section`
  padding: 140px 20px 100px;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${p => p.theme.colors.neutral} 0%,
    #ffffff 100%
  );

  @media (max-width: 768px) {
    padding: 100px 20px 70px;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 900;
  max-width: 900px;
  margin: 0 auto 25px;
`;

const HeroText = styled.p`
  font-size: 20px;
  max-width: 700px;
  margin: 0 auto;
  color: ${p => p.theme.colors.muted};

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const Section = styled.section`
  padding: 100px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;



/* ===== GALERÍA ===== */

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);

  &:hover img {
    transform: scale(1.08);
  }

  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: "Ver proyecto";
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 8px 14px;
    border-radius: 50px;
    font-size: 14px;
    opacity: 0;
    transition: .3s ease;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  transition: transform .4s ease;

  @media (max-width: 600px) {
    height: 280px;
  }
`;

/* ===== CTA ===== */

const CTASection = styled.section`
  padding: 100px 20px;
  background: ${p => p.theme.colors.primary};
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 16px 30px;
  border-radius: 50px;
  background: white;
  color: ${p => p.theme.colors.primary};
  font-weight: 800;
  text-decoration: none;
  transition: .25s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

/* ================= COMPONENT ================= */

export default function VentanasAluminio() {
  return (
    <>
      <Helmet>
        <title>Ventanas de aluminio en Barelona, Girona y toda Cataluña | Finestra Serveis</title>
        <meta
          name="description"
          content="Carpinteria profesional de ventanas de aluminio en Cataluña. Proyectos reales y sistemas de alta eficiencia energética."
        />
      </Helmet>

      <Wrapper>

        {/* HERO */}
        <Hero>
          <HeroTitle>
            Ventanas de aluminio en Cataluña. Carpinteria profesional con proyectos reales.
          </HeroTitle>
          <HeroText>
            Instalación profesional con sistemas de alta eficiencia energética, diseño moderno y máxima durabilidad.
          </HeroText>
        </Hero>

        {/* TEXTO */}
        <Section>
          <Container>
        
            <GalleryGrid>

              {/* Cambia esta imagen por la tuya */}
              <ImageCard>
                <GalleryImage
                  src= {ventana}
                  alt="Instalación de ventana de aluminio en vivienda moderna en Barcelona, Girona y toda Cataluña. Carpinteria profesional con proyectos reales."
                />
              </ImageCard>

              {/* Podés duplicar este bloque cuando tengas más fotos */}

            </GalleryGrid>

          </Container>
        </Section>

        {/* CTA */}
        <CTASection>
          <CTATitle>
            Solicita tu presupuesto sin compromiso
          </CTATitle>

          <p>
            Nuestro equipo te asesorará para encontrar la mejor solución para tu proyecto.
          </p>

          <CTAButton to="/contacto">
            Pedir presupuesto
          </CTAButton>
        </CTASection>

      </Wrapper>
    </>
  );
}