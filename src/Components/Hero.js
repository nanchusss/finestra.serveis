import styled from "styled-components";
import Imagen from "../Images/sintesis.png";
import { Link } from "react-router-dom";

const Section = styled.section`
  position: relative;
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  padding: 140px 20px 110px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 100px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 90px 20px;
  }
`;

const Content = styled.div`
  max-width: 760px;
`;

const Title = styled.h1`
  font-size: clamp(52px, 6.5vw, 82px);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  margin: 0 0 28px;
  color: #111;

  .top {
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.55em;
    letter-spacing: 0.15em;
    margin-bottom: 18px;
    color: ${p => p.theme.colors.primary};
  }

  .main {
    display: block;
  }
`;

const Sub = styled.p`
  font-size: 20px;
  line-height: 1.7;
  color: ${p => p.theme.colors.muted};
  margin: 0 0 45px;
  max-width: 560px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Btn = styled(Link)`
  padding: 18px 36px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15px;
  transition: all .3s ease;
  text-decoration: none;

  &.primary {
    background: ${p => p.theme.colors.primary};
    color: white;
  }

  &.primary:hover {
    background: ${p => p.theme.colors.primaryHover};
    transform: translateY(-5px);
  }

  &.ghost {
    border: 1px solid ${p => p.theme.colors.border};
    color: ${p => p.theme.colors.text};
  }

  &.ghost:hover {
    background: ${p => p.theme.colors.neutral};
  }
`;

const ImageWrap = styled.div`
  position: relative;
  transform: translateX(60px);

  img {
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 40px 80px rgba(0,0,0,0.18);
  }

  @media (max-width: 960px) {
    transform: none;
  }
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 0;
  top: 120px;
  width: 4px;
  height: 140px;
  background: ${p => p.theme.colors.primary};
`;

export default function Hero() {
  return (
    <Section>
      <VerticalLine />

      <Content>
        <Title>
          <span className="top">FINESTRA SERVEIS</span>
          <span className="main">
            Cerramientos de
            <br />
            Aluminio & PVC
          </span>
        </Title>

        <Sub>
          Instalación profesional en toda Cataluña.
          Soluciones eficientes, duraderas y a medida
          para arquitectura contemporánea.
        </Sub>

        <Row>
          <Btn to="/contacto" className="primary">
            Solicitar presupuesto
          </Btn>

          <Btn to="/servicios" className="ghost">
            Ver servicios
          </Btn>
        </Row>
      </Content>

      <ImageWrap>
        <img
          src={Imagen}
          alt="Cerramientos de aluminio y PVC instalados en vivienda moderna"
        />
      </ImageWrap>
    </Section>
  );
}