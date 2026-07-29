import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { theme } from "./Components/styles/theme.js";



import Home from "./Components/pages/Home.js";
import SobreNosotros from "./Components/SobreNosotros.js";
import Servicios from "./Components/Servicios.js";
import Layout from "./Components/Layout.js";
import ContactForm from "./Components/Contact-Form.js";
import WhatsAppFab from "./Components/WhatsAppFab.js";
import { Navigate } from "react-router-dom";
import Producto from "./Components/pages/Producto.js";
import { LanguageProvider } from "./i18n";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.primary};
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.035em;
  }

  ::selection { background: ${p => p.theme.colors.primary}; color: white; }
`;

export default function App() {
  return (
    <HelmetProvider><LanguageProvider>
      <ThemeProvider theme={theme}>
        <Global />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobrenosotros" element={<SobreNosotros />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/contacto" element={<ContactForm />} />
              <Route path="/ventanas-aluminio-cataluna" element={<Navigate to="/productos/ventanas-aluminio" replace />} />
              <Route path="/productos/:slug" element={<Producto />} />
            </Routes>
            <WhatsAppFab />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider></HelmetProvider>
  );
}
