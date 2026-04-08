import styled from "styled-components";
import mapCuyo from "../Images/map-cuyo.png";

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  margin: 100px 0 60px;
  padding: 100px 0;
  background: ${p => p.theme.colors.white};
`;

const Inner = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 960px){
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const Copy = styled.div`
  max-width: 640px;
`;

const Eyebrow = styled.div`
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .2em;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 18px;
`;

const H2 = styled.h2`
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
  color: #111;
`;

const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${p => p.theme.colors.muted};
  margin-bottom: 40px;
`;

const Ctas = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  padding: 16px 30px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  transition: all .25s ease;

  background: ${p => p.variant === "ghost"
    ? "transparent"
    : p.theme.colors.primary};

  border: 1px solid ${p => p.variant === "ghost"
    ? p.theme.colors.border
    : "transparent"};

  color: ${p => p.variant === "ghost"
    ? p.theme.colors.text
    : p.theme.colors.white};

  &:hover {
    background: ${p => p.variant === "ghost"
      ? p.theme.colors.neutral
      : p.theme.colors.primaryHover};
    transform: translateY(-4px);
  }
`;

const MapCard = styled.div`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(0,0,0,0.12);
  aspect-ratio: 4 / 3;
`;

const MapImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Accent = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: ${p => p.theme.colors.primary};
  opacity: 0.04;
  border-radius: 50%;
  top: -200px;
  right: -200px;
`;

export default function CuyoCoverage(){
  return (
    <Wrap id="cobertura">
      <Accent />

      <Inner>
        <Copy>
          <Eyebrow>Área de actuación</Eyebrow>

          <H2>
            Instalamos en toda Cataluña
          </H2>

          <P>
            Ofrecemos servicio integral de cerramientos de aluminio y PVC 
            en Barcelona, Girona, Lleida y Tarragona. 
            Atención personalizada, instalación profesional y acabados de alta calidad.
          </P>

          <Ctas>
            <Btn 
              href="https://wa.me/34691292245" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Solicitar asesoramiento
            </Btn>

            <Btn href="#contacto" variant="ghost">
              Ver contacto
            </Btn>
          </Ctas>
        </Copy>

        <MapCard>
          <MapImg 
            src={mapCuyo} 
            alt="Mapa de cobertura en Cataluña. Cerramientos de Aluminio"
          />
        </MapCard>
      </Inner>
    </Wrap>
  );
}