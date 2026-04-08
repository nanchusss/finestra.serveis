import styled from "styled-components";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterWrap = styled.footer`
  background: #111;
  color: white;
  padding: 100px 20px 40px;
`;

const Container = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Brand = styled.div`
  h3 {
    font-size: 24px;
    margin: 0 0 18px;
    font-weight: 800;
    letter-spacing: .5px;
  }

  p {
    color: rgba(255,255,255,0.7);
    font-size: 14px;
    line-height: 1.6;
    max-width: 320px;
  }
`;

const Column = styled.div`
  h4 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: .15em;
    margin-bottom: 18px;
    color: ${p => p.theme.colors.primary};
  }

  a {
    display: block;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 10px;
    transition: color .2s ease;
  }

  a:hover {
    color: white;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;

  a {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .25s ease;
  }

  a:hover {
    background: ${p => p.theme.colors.primary};
    transform: translateY(-4px);
  }
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 25px;
  text-align: center;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Container>

        <Top>
          <Brand>
            <h3>Finestra Serveis</h3>
            <p>
              Especialistas en cerramientos de aluminio y PVC en Cataluña.
              Carpinteria profesional con proyectos reales.
              Eficiencia energética. Renueva tus ventanas. Comprar ventanas.
              Instalación profesional, eficiencia energética y soluciones a medida.
            </p>

            <Social>
              <a href="https://instagram.com/finestra.serveis" target="_blank" rel="noreferrer">
                <FaInstagram size={18} color="white" />
              </a>

              <a href="https://wa.me/34691292245" target="_blank" rel="noreferrer">
                <FaWhatsapp size={18} color="white" />
              </a>
            </Social>
          </Brand>

          <Column>
            <h4>Servicios</h4>
            <a href="#aluminio"> Carpinteria de Aluminio</a>
            <a href="#pvc">Carpinteria de PVC</a>
            <a href="#eficiencia">Puertas y Ventandas con eficiencia energética</a>
            <a href="#pergolas">Pérgolas bioclimáticas</a>
          </Column>

          <Column>
            <h4>Contacto</h4>
            <a href="tel:+34691292245">+34 691 292 245</a>
            <a href="https://wa.me/34691292245">WhatsApp directo</a>
            <a href="/contacto">Formulario de contacto</a>
          </Column>
        </Top>

        <Bottom>
          © {new Date().getFullYear()} Finestra Serveis · Todos los derechos reservados
        </Bottom>

      </Container>
    </FooterWrap>
  );
}