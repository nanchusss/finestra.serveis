import styled from "styled-components";
import aboutImg from "../Images/about.png";

const Section = styled.section`
  padding: 120px 20px 0;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 620px;
`;

const Eyebrow = styled.div`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  margin-bottom: 16px;
`;

const H1 = styled.h1`
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  color: ${p => p.theme.colors.text};
`;

const P = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${p => p.theme.colors.muted};
  margin-bottom: 20px;
`;

const ImgWrap = styled.div`
  position: relative;

  img {
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
    box-shadow: 0 30px 70px rgba(0,0,0,0.08);
  }

  &::after {
    content: "";
    position: absolute;
    right: -30px;
    bottom: -30px;
    width: 180px;
    height: 180px;
    background: ${p => p.theme.colors.primary};
    opacity: .08;
    border-radius: 30px;
    z-index: -1;
  }
`;

/* ---------------- HIGHLIGHTS ---------------- */

const HighlightsSection = styled.section`
  margin-top: 120px;
  padding: 100px 20px;
  background: linear-gradient(
    135deg,
    ${p => p.theme.colors.primary} 0%,
    ${p => p.theme.colors.primaryHover} 100%
  );
`;

const HighlightsInner = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: white;
  padding: 45px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  transition: all .35s ease;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 40px 90px rgba(0,0,0,0.15);
  }
`;

const Number = styled.div`
  font-size: 70px;
  font-weight: 900;
  color: ${p => p.theme.colors.primary};
  opacity: 0.08;
  position: absolute;
  top: 20px;
  right: 25px;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 16px;
  color: ${p => p.theme.colors.text};
`;

const CardText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${p => p.theme.colors.muted};
`;

export default function SobreNosotros() {
  return (
    <>
      <Section>
        <Container>
          <Content>
            <Eyebrow>Finestra Serveis</Eyebrow>

            <H1>
              Especialistas en cerramientos de aluminio y PVC
            </H1>

            <P>
              En <strong>Finestra Serveis</strong> combinamos experiencia técnica,
              precisión y compromiso para ofrecer soluciones de cerramientos
              de alta calidad en toda Cataluña.
            </P>

            <P>
              Trabajamos con sistemas de aluminio y PVC de alto rendimiento,
              enfocados en eficiencia energética, aislamiento térmico y
              acabados duraderos adaptados a la arquitectura contemporánea.
            </P>

            <P>
              Nuestro objetivo no es solo instalar ventanas o pérgolas.
              Es mejorar el confort, la eficiencia y el valor de cada vivienda.
            </P>
          </Content>

          <ImgWrap>
            <img
              src={aboutImg}
              alt="Instalación profesional de cerramientos Finestra Serveis"
            />
          </ImgWrap>
        </Container>
      </Section>

      <HighlightsSection>
        <HighlightsInner>

          <HighlightCard>
            <Number>01</Number>
            <CardTitle>Más de 20 años de experiencia</CardTitle>
            <CardText>
              Trayectoria consolidada en el sector de cerramientos
              y soluciones de eficiencia energética.
            </CardText>
          </HighlightCard>

          <HighlightCard>
            <Number>02</Number>
            <CardTitle>Instalación profesional certificada</CardTitle>
            <CardText>
              Equipo especializado que garantiza precisión técnica
              y acabados impecables en cada proyecto.
            </CardText>
          </HighlightCard>

          <HighlightCard>
            <Number>03</Number>
            <CardTitle>Cobertura en toda Cataluña</CardTitle>
            <CardText>
              Servicio cercano y eficiente para viviendas
              particulares y proyectos arquitectónicos.
            </CardText>
          </HighlightCard>

        </HighlightsInner>
      </HighlightsSection>
    </>
  );
}