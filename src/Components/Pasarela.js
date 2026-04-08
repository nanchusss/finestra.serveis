import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import imgAluminio from "../Images/aluminio.png";
import imgPVC from "../Images/pvc.png";
import imgEficiencia from "../Images/eficiencia.png";
import imgMosquiteras from "../Images/almacenaje.png";
import imgToldos from "../Images/toldos.png";
import imgPergolas from "../Images/pergolas.png";

const Section = styled.section`
  padding: 140px 0;
  background: #111;
  color: white;
  overflow: hidden;
`;

const Header = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto 60px;
  padding: 0 20px;

  h2 {
    font-size: clamp(40px, 4.5vw, 64px);
    line-height: 1.05;
    margin: 0;
    font-weight: 800;
  }

  span {
    color: ${p => p.theme.colors.primary};
  }
`;

const Slider = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 0 20px;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  min-width: 420px;
  height: 520px;
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  scroll-snap-align: start;
  flex-shrink: 0;
  transition: transform .4s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    min-width: 85%;
    height: 420px;
  }
`;

const Bg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,.85) 0%,
    rgba(0,0,0,.3) 60%,
    transparent 100%
  );
`;

const Content = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
`;

const Title = styled.h3`
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 10px;
`;

const Desc = styled.p`
  font-size: 15px;
  opacity: .85;
  margin: 0;
`;

export default function Pasarela() {
  const navigate = useNavigate();

  const items = [
    {
      img: imgAluminio,
      title: "Carpintería de Aluminio",
      desc: "Ventanas y cerramientos de alto rendimiento.",
      link: "/ventanas-aluminio-cataluna"
    },
    {
      img: imgPVC,
      title: "Carpintería PVC",
      desc: "Aislamiento térmico y acústico superior."
    },
    {
      img: imgEficiencia,
      title: "Eficiencia Energética",
      desc: "Optimización del consumo energético."
    },
    {
      img: imgMosquiteras,
      title: "Mosquiteras a Medida",
      desc: "Soluciones discretas y funcionales."
    },
    {
      img: imgToldos,
      title: "Toldos y Protección Solar",
      desc: "Control térmico para exteriores."
    },
    {
      img: imgPergolas,
      title: "Pérgolas Bioclimáticas",
      desc: "Diseño contemporáneo y confort."
    }
  ];

  return (
    <Section>
      <Header>
        <h2>
          Nuestros <span>Servicios</span>
        </h2>
      </Header>

      <Slider>
        {items.map((it) => (
          <Card
            key={it.title}
            onClick={() => it.link && navigate(it.link)}
          >
            <Bg src={it.img} alt={it.title} />
            <Overlay />
            <Content>
              <Title>{it.title}</Title>
              <Desc>{it.desc}</Desc>
            </Content>
          </Card>
        ))}
      </Slider>
    </Section>
  );
}