import styled from "styled-components";
import { Link } from "react-router-dom";
import CatalunyaMap from "./CatalunyaMap";
import { FiMapPin, FiTool, FiMessageCircle, FiArrowUpRight } from "react-icons/fi";

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 150px 0;
  background: ${p => p.theme.colors.cream};
  @media(max-width:600px){padding:90px 0}
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
  font-family:${p=>p.theme.fonts.display};
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 400;
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

const Benefits = styled.div`
  display:grid;grid-template-columns:repeat(3,1fr);margin:34px 0 38px;border-top:1px solid ${p=>p.theme.colors.border};
  @media(max-width:560px){grid-template-columns:1fr}
`;
const Benefit = styled.div`
  padding:18px 12px 0 0;display:flex;align-items:center;gap:10px;color:${p=>p.theme.colors.muted};
  font-size:11px;line-height:1.35;text-transform:uppercase;letter-spacing:.06em;
  svg{flex:0 0 auto;font-size:20px;color:${p=>p.theme.colors.primary}}
  @media(max-width:560px){padding:15px 0;border-bottom:1px solid ${p=>p.theme.colors.border}}
`;

const Btn = styled.a`
  padding: 16px 30px;
  border-radius: 2px;
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

const ContactBtn = styled(Link)`
  padding: 16px 30px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid ${p => p.theme.colors.border};
  color: ${p => p.theme.colors.text};
  transition: all .25s ease;

  &:hover {
    background: ${p => p.theme.colors.neutral};
    transform: translateY(-4px);
  }
`;

const MapCard = styled.div`
  position: relative;
  padding:clamp(10px,3vw,32px);
  border-left:1px solid ${p=>p.theme.colors.border};
  background:transparent;
  @media(max-width:960px){border-left:0;border-top:1px solid ${p=>p.theme.colors.border};padding-top:40px}
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

          <Benefits>
            <Benefit><FiMapPin/> Toda Cataluña</Benefit>
            <Benefit><FiTool/> Instalación propia</Benefit>
            <Benefit><FiMessageCircle/> Trato directo</Benefit>
          </Benefits>

          <Ctas>
            <Btn 
              href="https://wa.me/34691292245?text=Hola%2C%20escribo%20desde%20la%20p%C3%A1gina%20web%20de%20Finestra%20Serveis.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20proyecto." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Solicitar asesoramiento <FiArrowUpRight style={{marginLeft:10}}/>
            </Btn>

            <ContactBtn to="/contacto">
              Ver contacto
            </ContactBtn>
          </Ctas>
        </Copy>

        <MapCard>
          <CatalunyaMap />
        </MapCard>
      </Inner>
    </Wrap>
  );
}
