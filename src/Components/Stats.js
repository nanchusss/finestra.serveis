import styled from "styled-components";
import { FiUsers, FiShield, FiAward, FiMap } from "react-icons/fi";

const Section = styled.section`
  background: ${p => p.theme.colors.cream};
  padding: 90px 28px;

  @media (max-width: 600px) {
    padding: 70px 16px;
  }
`;

const Grid = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  display: grid;
  gap: 0;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 👇 En mobile sigue siendo 2 columnas */
  @media (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    border-top:1px solid ${p=>p.theme.colors.border};
  }
`;

const Card = styled.div`
  border-left: 1px solid ${p=>p.theme.colors.border};
  padding: 18px 32px;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  transition: all .3s ease;
  &:last-child{border-right:1px solid ${p=>p.theme.colors.border}}

  @media (max-width: 600px) {
    padding: 22px 12px;
    border-bottom:1px solid ${p=>p.theme.colors.border};
    &:nth-child(odd){border-left:0}
    &:last-child{border-right:0}
  }
`;

const Icon = styled.div`
  width:68px;height:68px;display:grid;place-items:center;margin-bottom:30px;
  border:1px solid ${p=>p.theme.colors.border};color:${p=>p.theme.colors.primary};font-size:30px;
  transition:.3s ease;
  ${Card}:hover &{background:${p=>p.theme.colors.primary};color:white;border-color:${p=>p.theme.colors.primary};transform:translateY(-3px)}
  @media(max-width:600px){width:54px;height:54px;font-size:24px;margin-bottom:20px}
`;

const Big = styled.div`
  font-family:${p=>p.theme.fonts.display};
  font-size: 32px;
  font-weight: 400;
  color: ${p=>p.theme.colors.ink};
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 21px;
  }
`;

const Small = styled.div`
  font-size: 12px;
  text-transform:uppercase;
  letter-spacing:.08em;
  color: ${p=>p.theme.colors.muted};
  max-width:190px;
  line-height:1.55;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export default function Stats(){
  const items = [
    {big:"Profesionales", small:"Equipo altamente capacitado", icon:FiUsers},
    {big:"Garantía real", small:"Instalaciones con precisión técnica", icon:FiShield},
    {big:"30 años", small:"Experiencia comprobada en el sector", icon:FiAward},
    {big:"Cobertura Cataluña", small:"Servicio en todo el territorio", icon:FiMap},
  ];

  return (
    <Section>
      <Grid>
        {items.map(i => {
          const ItemIcon=i.icon;
          return (
          <Card key={i.big}>
            <Icon><ItemIcon/></Icon>
            <Big>{i.big}</Big>
            <Small>{i.small}</Small>
          </Card>
        )})}
      </Grid>
    </Section>
  );
}
