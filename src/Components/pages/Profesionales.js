import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../../i18n";
import { professionalOverview } from "../../content/professionalOverview";
import { serviceCopy, serviceAssets } from "../../content/professionalServices";
import detail from "../../Images/profesionales/arquitectura.jpg";
import installation from "../../Images/profesionales/asesoramiento-en-obra.jpg";

const Page = styled.main`
  background: ${p => p.theme.colors.cream};
  color: ${p => p.theme.colors.ink};
  h1, h2, h3 { font-family: ${p => p.theme.fonts.display}; font-weight: 500; }
  h2 { font-size: clamp(32px, 4.4vw, 60px); line-height: 1.06; }
  p { font-size: 20px; line-height: 1.7; }
  a:focus-visible { outline: 3px solid ${p => p.theme.colors.primary}; outline-offset: 5px; }
`;
const Wrap = styled.div`
  max-width: ${p => p.theme.maxw}; margin: auto; padding: 0 clamp(20px, 4vw, 56px);
`;
const Hero = styled.section`
  max-width: ${p => p.theme.maxw}; margin: auto; padding: clamp(30px, 4vw, 56px) clamp(20px, 4vw, 56px) 44px;
  h1 { font-size: clamp(42px, 5.2vw, 74px); line-height: 1.02; margin: 16px 0 0; letter-spacing: -.045em; }
  h1 span { display: block; color: ${p => p.theme.colors.primary}; }
  @keyframes professionalEnter { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
  @media(prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
const HeroTop = styled.div`
  display: grid; grid-template-columns: 1.15fr 1fr; gap: 48px; align-items: center;
  animation: professionalEnter .6s both;
  p { font-size: 20px; margin: 0 0 12px; max-width: 520px; }
  @media(max-width: 800px) { grid-template-columns: 1fr; gap: 24px; p { font-size: 18px; } }
`;
const QuickChoices = styled.nav`
  margin-top: 38px;
  > h2 { font-family: ${p => p.theme.fonts.primary}; font-size: 19px; font-weight: 500; letter-spacing: 0; margin-bottom: 18px; }
`;
const ChoiceGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px;
  @media(max-width: 760px) { grid-template-columns: 1fr; gap: 14px; }
`;
const ChoiceCard = styled(Link)`
  min-width: 0; overflow: hidden; display: flex; flex-direction: column; background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border}; border-radius: 0;
  animation: professionalEnter .6s both; animation-delay: ${p => p.$order * .1 + .12}s;
  transition: box-shadow .25s, transform .25s, border-color .25s;
  > img { width: 100%; height: 120px; object-fit: cover; transition: transform .5s; }
  > div { display: flex; flex-direction: column; flex: 1; padding: 22px; position: relative; background: ${p => p.theme.colors.white}; }
  b { font-size: 13px; font-weight: 500; color: ${p => p.theme.colors.primary}; display: block; margin-bottom: 12px; }
  h3 { font-size: 25px; line-height: 1.15; letter-spacing: -.025em; }
  p { font-size: 19px; line-height: 1.55; margin: 12px 0 20px; }
  span { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: auto; color: ${p => p.theme.colors.primary}; font-weight: 600; font-size: 14px; }
  svg { width: 22px; height: 22px; flex-shrink: 0; transition: transform .25s; }
  @media(hover: hover) { &:hover { transform: translateY(-4px); border-color: ${p => p.theme.colors.primary}; box-shadow: 0 18px 36px rgba(24,35,28,.08); } &:hover > img { transform: scale(1.035); } &:hover svg { transform: translate(2px,-2px); } }
  @media(max-width: 760px) { display: grid; grid-template-columns: 82px minmax(0,1fr); > img { display: block; width: 82px; height: 100%; object-fit: cover; } > div { padding: 20px 16px; } h3 { font-size: 24px; } p { font-size: 18px; margin-bottom: 16px; } b { line-height: 1.5; } }
`;
const TrainingLink = styled(Link)`
  display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 18px;
  padding: 18px 22px; border-radius: 0; background: ${p => p.theme.colors.neutral}; font-size: 16px; line-height: 1.6;
  strong { font-weight: 600; } svg { flex-shrink: 0; width: 22px; height: 22px; }
  &:hover { background: ${p => p.theme.colors.white}; }
`;
const HeroActions = styled.div`
  display: flex; gap: 16px 24px; align-items: center; flex-wrap: wrap;
`;
const OptionLink = styled(Link)`
  display: inline-flex; align-items: center; gap: 12px; padding: 12px 0; font-weight: 600;
  font-size: 16px; color: ${p => p.theme.colors.primary}; text-decoration: underline; text-underline-offset: 4px;
`;
const Kicker = styled.div`
  font-size: 11px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase;
  display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
  &:before { content: ""; width: 32px; height: 2px; background: ${p => p.theme.colors.secondary}; }
`;
const Button = styled(Link)`
  display: inline-flex; align-items: center; justify-content: space-between; gap: 24px;
  background: ${p => p.theme.colors.primary}; color: ${p => p.theme.colors.white};
  padding: 18px 22px; border-radius: 0; margin-top: 20px; font-size: 15px; font-weight: 600;
  &:hover { background: ${p => p.theme.colors.primaryHover}; }
`;
const Section = styled.section`
  scroll-margin-top: 110px;
  padding: clamp(56px, 7vw, 100px) 0; border-top: 1px solid ${p => p.theme.colors.border};
`;
const Intro = styled.div`
  display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(24px, 6vw, 90px);
  p { margin-top: 0; max-width: 560px; }
  @media(max-width: 800px) { grid-template-columns: 1fr; }
`;
const Options = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; margin-top: 56px;
  article { scroll-margin-top: 110px; border-top: 2px solid ${p => p.theme.colors.primary}; padding-top: 22px; }
  span { font-family: ${p => p.theme.fonts.display}; font-size: 52px; color: ${p => p.theme.colors.primary}; }
  h3 { font-size: 26px; margin: 22px 0 14px; }
  strong { display: block; font-size: 18px; }
  p { font-size: 19px; }
  @media(max-width: 760px) { grid-template-columns: 1fr; gap: 28px; }
`;
const Experience = styled.section`
  display: grid; grid-template-columns: 1fr 1fr; background: ${p => p.theme.colors.white};
  img { width: 100%; height: 100%; max-height: 660px; object-fit: cover; }
  > div { padding: clamp(36px, 6vw, 90px) clamp(20px, 4vw, 56px); align-self: center; }
  @media(max-width: 800px) { grid-template-columns: 1fr; img { height: 340px; } }
`;
const Assistance = styled(Section)`
  background: ${p => p.theme.colors.neutral}; border-top: 0;
`;
const InstallationImage = styled.img`
  width: 100%; height: clamp(240px, 35vw, 440px); object-fit: cover; object-position: center 48%; border-radius: 0; margin-bottom: 44px;
`;
const Systems = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px;
  > div { padding-top: 22px; border-top: 1px solid ${p => p.theme.colors.border}; }
  span { display: block; font-size: 12px; letter-spacing: .12em; margin-bottom: 12px; }
  strong { font-size: clamp(22px, 3vw, 34px); font-weight: 500; color: ${p => p.theme.colors.primary}; }
  @media(max-width: 500px) { grid-template-columns: 1fr; }
`;
const Complementary = styled.div`
  display: grid; grid-template-columns: .85fr 1.15fr; gap: clamp(28px, 5vw, 64px); margin-top: 36px; align-items: stretch;
  > figure { margin: 0; position: relative; border-radius: 0; overflow: hidden; min-height: 480px; }
  > figure img { width: 100%; height: 100%; position: absolute; inset: 0; object-fit: cover; }
  @media(max-width: 800px) { grid-template-columns: 1fr; > figure { min-height: 260px; } }
`;
const Services = styled.div`
  display: flex; flex-direction: column; background: ${p => p.theme.colors.white}; border-radius: 0; padding: 6px 28px;
  a { display: grid; grid-template-columns: 30px 1fr 40px; align-items: center; gap: 18px; padding: 24px 0; }
  a + a { border-top: 1px solid ${p => p.theme.colors.border}; }
  b { font-size: 13px; font-weight: 500; color: ${p => p.theme.colors.primary}; }
  h3 { font-size: 26px; line-height: 1.2; } p { font-size: 19px; line-height: 1.55; margin: 8px 0 0; color: ${p => p.theme.colors.muted}; }
  span { display: grid; place-items: center; border: 1px solid ${p => p.theme.colors.border}; width: 40px; height: 40px; border-radius: 50%; transition: background .2s, color .2s; }
  a:hover span { background: ${p => p.theme.colors.primary}; color: white; } a:hover h3 { color: ${p => p.theme.colors.primary}; }
  @media(max-width: 500px) { padding: 4px 20px; a { grid-template-columns: 1fr 36px; gap: 12px; padding: 22px 0; } b { display: none; } h3 { font-size: 23px; } span { width: 36px; height: 36px; } }
`;
const Contact = styled(Section)`
  text-align: center; background: ${p => p.theme.colors.white};
  p { max-width: 570px; margin: 24px auto 0; }
`;
const ContactLinks = styled.div`
  display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 32px; margin-top: 32px;
  font-size: 15px; a:hover { text-decoration: underline; }
`;

export default function Profesionales() {
  const { lang, t } = useLanguage();
  const c = professionalOverview[lang] || professionalOverview.es;
  const services = serviceCopy[lang] || serviceCopy.es;
  const modes = ["suministro", "apoyo-tecnico", "instalacion"];
  const serviceQueries = ["persianas", "mosquiteras", "toldos", "ajustes", "sustituciones"];
  return <Page>
    <Helmet><title>{c.title} {c.accent.replace(/\.$/, "")} | Finestra Serveis</title><meta name="description" content={c.meta} /><link rel="canonical" href="https://finestraserveis.com/profesionales" /></Helmet>
    <Hero>
      <HeroTop>
        <div><Kicker>Finestra Serveis · {t("professionals")}</Kicker><h1>{c.heroTitle}<span>{c.heroAccent}</span></h1></div>
        <div><p><strong>{c.lead}</strong> {c.intro}</p><p>{c.audience}</p><HeroActions><Button to="/contacto?consulta=profesionales">{c.cta}<FiArrowUpRight aria-hidden="true" /></Button></HeroActions></div>
      </HeroTop>
      <QuickChoices aria-label={c.choices}><h2>{c.chooseTitle}</h2><ChoiceGrid>
        {modes.map((key,i) => <ChoiceCard key={key} to={`/profesionales/${key}`} $order={i}><img src={serviceAssets[key].image} alt="" width="1536" height="1024" /><div><b>0{i+1} · {services[key].label}</b><h3>{c.intent[i]}</h3><p>{c.quick[i]}</p><span>{c.choiceCta[i]}<FiArrowUpRight aria-hidden="true" /></span></div></ChoiceCard>)}
      </ChoiceGrid><TrainingLink to="/profesionales/asesoramiento-tecnico"><div><strong>{c.learn}</strong> {c.trainingLink}</div><FiArrowUpRight aria-hidden="true" /></TrainingLink></QuickChoices>
    </Hero>
    <Wrap><Section id="colaboracion"><Kicker>{c.kicker}</Kicker><Intro><h2>{c.collaboration}</h2><div><p>{c.introText}</p><p><strong>{c.promise}</strong></p><p>{c.scope}</p></div></Intro>
      <Options>{modes.map((key,i) => <article key={key} id={key}><span>0{i+1}</span><h3>{services[key].label}</h3><strong>{c.optionHeads[i]}</strong><p>{c.optionTexts[i]}</p><p><strong>{c.fitLabel}</strong>{c.fits[i]}</p><OptionLink to={`/profesionales/${key}`} aria-label={`${c.more}: ${services[key].label}`}>{c.more}<FiArrowUpRight aria-hidden="true" /></OptionLink></article>)}</Options>
    </Section></Wrap>
    <Experience><img src={detail} alt={services.suministro.alt} loading="lazy" width="1536" height="1024" /><div><Kicker>{c.experience}</Kicker><h2>{c.experienceTitle}</h2><p>{c.experienceText}</p><p>{c.experienceDetail}</p></div></Experience>
    <Assistance id="primera-instalacion"><Wrap><InstallationImage src={installation} alt={services["asesoramiento-tecnico"].alt} loading="lazy" width="1536" height="1024" /><Intro><div><Kicker>{c.training}</Kicker><h2>{c.trainingTitle}</h2></div><div><p>{c.trainingText}</p><p>{c.trainingDetail}</p><Button to="/profesionales/asesoramiento-tecnico">{c.trainingCta}<FiArrowUpRight aria-hidden="true" /></Button></div></Intro></Wrap></Assistance>
    <Wrap><Section><Intro><h2>{c.systems}</h2><p>{c.systemsText}</p></Intro><Systems><div><span>PVC</span><strong>REHAU</strong></div><div><span>{c.aluminium}</span><strong>INDALSU · STRUGAL</strong></div></Systems></Section>
      <Section><Kicker>{c.complement}</Kicker><h2>{c.servicesTitle}</h2><Complementary><figure><img src={detail} alt={services.suministro.alt} loading="lazy" width="1536" height="1024" /></figure><Services>{c.services.map(([title,text],i) => <Link key={title} to={`/contacto?consulta=${serviceQueries[i]}`}><b>0{i+1}</b><div><h3>{title}</h3><p>{text}</p></div><span><FiArrowUpRight aria-hidden="true" /></span></Link>)}</Services></Complementary></Section>
    </Wrap>
    <Contact><Wrap><h2>{c.finalTitle}</h2><p>{c.finalText}</p><Button to="/contacto?consulta=profesionales">{c.cta}<FiArrowUpRight aria-hidden="true" /></Button><ContactLinks><a href="tel:+34691292245">691 292 245</a><a href="mailto:info@finestraserveis.com">info@finestraserveis.com</a><Link to="/">www.finestraserveis.com</Link></ContactLinks></Wrap></Contact>
  </Page>;
}
