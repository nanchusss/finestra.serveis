import React from "react";
import styled from "styled-components";
import van from "../Images/eficiencia.png";

const Section = styled.section`
  max-width: ${p => p.theme.maxw};
  margin: 140px auto;
  padding: 0 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 90px;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const Text = styled.div`
  max-width: 620px;
`;

const Eyebrow = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: .18em;
  font-size: 13px;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 22px;
`;

const Title = styled.h2`
  font-size: clamp(40px, 4.5vw, 60px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 26px;
  color: #111;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${p => p.theme.colors.muted};
  margin-bottom: 40px;
`;

const Stats = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 34px;
    font-weight: 800;
    color: ${p => p.theme.colors.primary};
  }

  span {
    font-size: 14px;
    color: ${p => p.theme.colors.muted};
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 18px 38px;
  background: ${p => p.theme.colors.primary};
  color: white;
  font-weight: 700;
  border-radius: 50px;
  text-decoration: none;
  transition: all .25s ease;

  &:hover {
    background: ${p => p.theme.colors.primaryHover};
    transform: translateY(-4px);
  }
`;

const Visual = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 32px;
    object-fit: cover;
    box-shadow: 0 50px 100px rgba(0,0,0,0.18);
  }

  &::before {
    content: "";
    position: absolute;
    top: -40px;
    left: -40px;
    width: 120px;
    height: 120px;
    background: ${p => p.theme.colors.primary};
  }
`;

export default function VanShowCase() {
  return (
    <Section>
      <Container>
        <Text>
          <Eyebrow>Eficiencia energética</Eyebrow>

          <Title>
            Más aislamiento. <br />
            Menos consumo.
          </Title>

          <Description>
            Nuestros sistemas de aluminio y PVC de alto rendimiento 
            reducen pérdidas térmicas, mejoran el confort interior 
            y optimizan el consumo energético de tu vivienda.
          </Description>

          <Stats>
            <div>
              <strong>-35%</strong>
              <span>Reducción en pérdidas térmicas</span>
            </div>

            <div>
              <strong>A+</strong>
              <span>Clasificación energética</span>
            </div>
          </Stats>

          <Button
            href="https://wa.me/34691292245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar Asesoramiento Técnico
          </Button>
        </Text>

        <Visual>
          <img 
            src={van} 
            alt="Sistema de cerramientos de alta eficiencia energética" 
          />
        </Visual>
      </Container>
    </Section>
  );
}