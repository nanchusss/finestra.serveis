import styled from "styled-components";
import { useLanguage } from "../i18n";

const Switcher = styled.div`
  display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0;
`;
const Choices = styled.div`
  display: flex; padding: 4px; gap: 2px; border: 1px solid ${p => p.theme.colors.border};
  border-radius: 999px; background: ${p => p.theme.colors.neutral};
`;
const Choice = styled.button`
  appearance: none; border: 0; border-radius: 999px; min-width: 34px; min-height: 34px; padding: 6px 8px;
  font: 600 11px ${p => p.theme.fonts.primary}; letter-spacing: .03em; cursor: pointer;
  color: ${p => p.$active ? p.theme.colors.white : p.theme.colors.ink};
  background: ${p => p.$active ? p.theme.colors.primary : "transparent"};
  transition: background .2s, color .2s;
  &:hover { background: ${p => p.$active ? p.theme.colors.primaryHover : p.theme.colors.white}; }
  &:focus-visible { outline: 2px solid ${p => p.theme.colors.primary}; outline-offset: 3px; }
  @media(max-width: 1280px) { min-width: 44px; min-height: 44px; }
`;
const languages = [{code:"es",name:"Español"},{code:"ca",name:"Català"},{code:"en",name:"English"}];
export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return <Switcher role="group" aria-label={lang === "en" ? "Language" : "Idioma"}>
    <Choices>{languages.map(({code,name}) => <Choice key={code} type="button" $active={lang === code} aria-pressed={lang === code} aria-label={name} lang={code} title={name} onClick={() => setLang(code)}>{code.toUpperCase()}</Choice>)}</Choices>
  </Switcher>;
}
