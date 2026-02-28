import styled from "styled-components";

const Section = styled.section`
  background: ${p => p.theme.colors.primary};
  padding: 100px 20px;

  @media (max-width: 600px) {
    padding: 70px 16px;
  }
`;

const Grid = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 👇 En mobile sigue siendo 2 columnas */
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 20px;
  padding: 30px 20px;
  text-align: left;
  transition: all .3s ease;
  backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-6px);
    background: rgba(255,255,255,0.15);
  }

  @media (max-width: 600px) {
    padding: 24px 16px;
  }
`;

const Big = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Small = styled.div`
  font-size: 14px;
  color: rgba(255,255,255,0.85);

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export default function Stats(){
  const items = [
    {big:"Profesionales", small:"Equipo altamente capacitado"},
    {big:"Garantía real", small:"Instalaciones con precisión técnica"},
    {big:"30 años", small:"Experiencia comprobada en el sector"},
    {big:"Cobertura Cataluña", small:"Servicio en todo el territorio"},
  ];

  return (
    <Section>
      <Grid>
        {items.map(i => (
          <Card key={i.big}>
            <Big>{i.big}</Big>
            <Small>{i.small}</Small>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}