import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight, FiChevronRight } from "react-icons/fi";
import { useLanguage } from "../../i18n";
import { serviceAssets, serviceCopy, professionalLabels } from "../../content/professionalServices";

const Page = styled.main`
  background: ${p => p.theme.colors.cream}; color: ${p => p.theme.colors.ink};
  p, li { font-size: 20px; line-height: 1.7; }
  h1, h2, h3 { font-family: ${p => p.theme.fonts.display}; font-weight: 500; }
  h2 { font-size: clamp(30px, 3.5vw, 46px); line-height: 1.1; }
  h3 { font-size: 26px; line-height: 1.2; }
  a:focus-visible, summary:focus-visible { outline: 3px solid ${p => p.theme.colors.primary}; outline-offset: 5px; }
`;
const Wrap = styled.div`max-width: ${p => p.theme.maxw}; margin: auto; padding: 0 clamp(20px, 4vw, 56px);`;
const Breadcrumbs = styled.nav`
  display: flex; align-items: center; flex-wrap: wrap; gap: 8px; padding: 26px 0; font-size: 14px; line-height: 1.5;
  a { color: ${p => p.theme.colors.primary}; } a:hover { text-decoration: underline; }
  svg { flex-shrink: 0; }
`;
const Hero = styled.section`
  display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 5vw, 64px); padding: 20px 0 60px; align-items: center;
  h1 { font-size: clamp(38px, 4.4vw, 62px); line-height: 1.04; letter-spacing: -.04em; }
  p { margin: 24px 0; }
  figure { margin: 0; }
  img { width: 100%; height: 480px; object-fit: cover; border-radius: 0; }
  figcaption { margin-top: 12px; color: ${p => p.theme.colors.muted}; font-size: 12px; }
  @media(max-width: 800px) { grid-template-columns: 1fr; img { height: 300px; } }
`;
const Kicker = styled.div`color: ${p => p.theme.colors.primary}; font-size: 12px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 22px;`;
const Button = styled(Link)`
  display: inline-flex; align-items: center; justify-content: center; gap: 18px; padding: 17px 24px;
  background: ${p => p.theme.colors.primary}; color: white; border-radius: 0; font-size: 15px; font-weight: 600;
  &:hover { background: ${p => p.theme.colors.primaryHover}; } svg { flex-shrink: 0; }
`;
const Section = styled.section`padding: clamp(48px, 6vw, 80px) 0; border-top: 1px solid ${p => p.theme.colors.border};`;
const Fit = styled.div`
  border-radius: 0; background: ${p => p.theme.colors.neutral}; padding: clamp(24px, 4vw, 44px);
  display: grid; grid-template-columns: .8fr 1.2fr; gap: 24px; align-items: center;
  h2 { font-size: 28px; } p { margin: 0; }
  @media(max-width: 700px) { grid-template-columns: 1fr; }
`;
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; margin-top: 36px;
  article { padding-top: 22px; border-top: 2px solid ${p => p.theme.colors.border}; }
  p { font-size: 19px; } span { display: block; font-size: 14px; color: ${p => p.theme.colors.primary}; margin-bottom: 20px; }
  @media(max-width: 760px) { grid-template-columns: 1fr; gap: 20px; }
`;
const TrainingDetail = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
  img { width: 100%; border-radius: 0; } figure { margin: 0; }
  figcaption { font-size: 12px; color: ${p => p.theme.colors.muted}; margin-top: 12px; }
  @media(max-width: 760px) { grid-template-columns: 1fr; }
`;
const FAQ = styled.div`
  max-width: 900px; margin-top: 32px;
  details { border-bottom: 1px solid ${p => p.theme.colors.border}; padding: 22px 0; }
  summary { cursor: pointer; font-size: 20px; font-weight: 500; line-height: 1.4; }
  p { margin-bottom: 0; }
`;
const Related = styled.div`
  display: flex; gap: 14px; flex-wrap: wrap; margin-top: 28px;
  a { display: inline-flex; align-items: center; gap: 14px; border: 1px solid ${p => p.theme.colors.border}; padding: 18px 22px; border-radius: 0; font-size: 17px; }
  a:hover { background: ${p => p.theme.colors.white}; }
`;
const Contact = styled(Section)`text-align: center; p { max-width: 560px; margin: 24px auto; }`;

export default function ServicioProfesional({ service }) {
  const { lang } = useLanguage();
  const c = (serviceCopy[lang] || serviceCopy.es)[service];
  const labels = professionalLabels[lang] || professionalLabels.es;
  const assets = serviceAssets[service];
  const url = `https://finestraserveis.com/profesionales/${service}`;
  const contact = `/contacto?consulta=${assets.query}`;
  const schema = {
    "@context": "https://schema.org", "@type": "Service", name: c.title, description: c.description,
    url, serviceType: c.label, areaServed: { "@type": "AdministrativeArea", name: "Cataluña" },
    provider: { "@type": "HomeAndConstructionBusiness", name: "Finestra Serveis", url: "https://finestraserveis.com/", telephone: "+34691292245" },
  };
  return <Page>
    <Helmet><title>{c.title.replace(/\.$/, "")} | Finestra Serveis</title><meta name="description" content={c.description} /><link rel="canonical" href={url} /><meta property="og:title" content={c.title} /><meta property="og:description" content={c.description} /><meta property="og:url" content={url} /><meta property="og:type" content="website" /><meta property="og:image" content={`https://finestraserveis.com${assets.image}`} /><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
    <Wrap><Breadcrumbs aria-label={lang === "en" ? "Breadcrumb" : "Ruta"}><Link to="/">{labels.home}</Link><FiChevronRight aria-hidden="true" /><Link to="/profesionales">{labels.overview}</Link><FiChevronRight aria-hidden="true" /><span aria-current="page">{c.label}</span></Breadcrumbs>
      <Hero><div><Kicker>{labels.location}</Kicker><h1>{c.title}</h1><p>{c.intro}</p><Button to={contact}>{c.cta}<FiArrowUpRight aria-hidden="true" /></Button></div><figure><img src={assets.image} alt={c.alt} fetchpriority="high" width="1536" height="1024" /><figcaption>{labels.imageNote}</figcaption></figure></Hero>
      <Fit><h2>{labels.fit}</h2><p>{c.fit}</p></Fit>
      <Section><h2>{labels.includes}</h2><Grid>{c.includes.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</Grid></Section>
      <Section><h2>{labels.process}</h2><Grid>{c.steps.map(([title,text],i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</Grid></Section>
      {assets.secondaryImage && <Section><TrainingDetail><figure><img src={assets.secondaryImage} alt={labels.secondaryAlt} loading="lazy" width="1536" height="1024" /><figcaption>{labels.imageNote}</figcaption></figure><div><h2>{c.secondaryTitle}</h2><p>{c.secondaryText}</p></div></TrainingDetail></Section>}
      <Section><h2>{labels.questions}</h2><FAQ>{c.faq.map(([question,answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</FAQ></Section>
      <Section><h2>{labels.related}</h2><Related>{Object.keys(serviceAssets).filter(key => key !== service).map(key => <Link key={key} to={`/profesionales/${key}`}>{(serviceCopy[lang] || serviceCopy.es)[key].label}<FiArrowUpRight aria-hidden="true" /></Link>)}</Related></Section>
      <Contact><h2>{labels.contact}</h2><p>{labels.contactText}</p><Button to={contact}>{c.cta}<FiArrowUpRight aria-hidden="true" /></Button></Contact>
    </Wrap>
  </Page>;
}
