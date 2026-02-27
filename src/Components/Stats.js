import styled from "styled-components";

const Section = styled.section`
  background: ${p => p.theme.colors.primary};
  padding: 120px 20px;
`;

const Grid = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 24px;
  padding: 40px 28px;
  text-align: left;
  transition: all .3s ease;
  backdrop-filter: blur(6px);

  &:hover {
    transform: translateY(-8px);
    background: rgba(255,255,255,0.15);
  }
`;

const Big = styled.div`
  font-size: 34px;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
`;

const Small = styled.div`
  font-size: 15px;
  color: rgba(255,255,255,0.8);
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