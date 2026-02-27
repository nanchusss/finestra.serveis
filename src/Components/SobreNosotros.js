import styled from "styled-components";
import aboutImg from "../Images/about.png";

const Section = styled.section`
  max-width: ${(p) => p.theme.maxw};
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div``;

const H1 = styled.h1`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  margin-bottom: 20px;
  color: ${(p) => p.theme.colors.text};
`;

const P = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.muted};
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: ${(p) => p.theme.shadow};
`;

/* --- NUEVO: sección de destacados aparte --- */
const HighlightsSection = styled.div`
  max-width: ${(p) => p.theme.maxw};
  margin: 40px auto 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Card = styled.div`
  background: ${(p) => p.theme.colors.neutral};
  padding: 20px;
  border-radius: 12px;
  box-shadow: ${(p) => p.theme.shadow};
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.primary};
`;

const CardText = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.colors.text};
`;

export default function SobreNosotros() {
  return (
    <>
      <Section>
        <Content>
          <H1>Sobre Nosotros</H1>
          <P>
            En <strong>Base Mendoza</strong> somos una empresa de logística integral 
            con raíces en Mendoza y cobertura en todo Cuyo. Nos especializamos en 
            <em> transporte, almacenamiento y mudanzas</em>, ofreciendo soluciones 
            ágiles y confiables para particulares y empresas.
          </P>
          <P>
            Nuestro compromiso es brindar un servicio de excelencia, adaptándonos 
            a las necesidades de cada cliente con innovación, cercanía y un equipo 
            que entiende la importancia de cada entrega. Más que mover productos, 
            conectamos personas, negocios y sueños.
          </P>
        </Content>

        <Img src={aboutImg} alt="Base Mendoza - Logística" />
      </Section>

      {/* DESTACADOS DEBAJO */}
      <HighlightsSection>
        <Card>
          <CardTitle>+10 años de experiencia</CardTitle>
          <CardText>
            Una trayectoria consolidada en logística y transporte en la región.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Cobertura en Cuyo</CardTitle>
          <CardText>
            Presencia en Mendoza, San Juan y San Luis con red propia.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Innovación constante</CardTitle>
          <CardText>
            Tecnología aplicada a la gestión y trazabilidad de envíos.
          </CardText>
        </Card>
      </HighlightsSection>
    </>
  );
}

