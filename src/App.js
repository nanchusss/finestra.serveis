import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./Components/styles/theme.js";

import Home from "./Components/pages/Home.js";
import SobreNosotros from "./Components/SobreNosotros.js";
import Servicios from "./Components/Servicios.js";
import Layout from "./Components/Layout.js";
import ContactForm from "./Components/Contact-Form.js";

const Global = createGlobalStyle`
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
    letter-spacing: -0.01em;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<ContactForm />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}