import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = jest.fn();
});

const cases = [
  ['suministro', 'Suministro de ventanas para profesionales.', 'Consultar suministro', 'Solo suministro'],
  ['apoyo-tecnico', 'Suministro de ventanas con apoyo técnico.', 'Consultar apoyo técnico', 'Suministro + apoyo técnico'],
  ['instalacion', 'Instalación de ventanas para tus obras.', 'Consultar instalación completa', 'Suministro + instalación'],
  ['asesoramiento-tecnico', 'Asesoramiento técnico para instalar en tu obra.', 'Consultar asesoramiento técnico', 'Asesoramiento técnico en obra'],
];

test.each(cases)('%s opens a dedicated page and carries the choice to contact', (slug, heading, cta, selected) => {
  window.history.replaceState({}, '', `/profesionales/${slug}`);
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  fireEvent.click(screen.getAllByRole('link', { name: cta })[0]);
  expect(screen.getByRole('combobox')).toHaveValue(selected);
});

test('professionals offers three services and a technical advice page', () => {
  window.history.replaceState({}, '', '/profesionales');
  render(<App />);
  const options = screen.getByRole('navigation', { name: 'Tres formas de trabajar juntos. Tú eliges.' });
  for (const [slug] of cases) {
    expect(within(options).getAllByRole('link').some(link => link.getAttribute('href') === `/profesionales/${slug}`)).toBe(true);
  }
});

test('language selection updates professional content and persists without navigation', () => {
  window.history.replaceState({}, '', '/profesionales/asesoramiento-tecnico');
  render(<App />);
  fireEvent.click(screen.getAllByRole('button', { name: 'English', exact: true })[0]);
  expect(screen.getByRole('heading', { level: 1, name: 'Technical advice for installations on your site.' })).toBeInTheDocument();
  expect(localStorage.getItem('finestra-lang')).toBe('en');
  expect(document.documentElement.lang).toBe('en');
  expect(window.location.pathname).toBe('/profesionales/asesoramiento-tecnico');
  expect(screen.getAllByRole('button', { name: 'English', exact: true })[0]).toHaveAttribute('aria-pressed', 'true');
  fireEvent.click(screen.getAllByRole('button', { name: 'Català', exact: true })[0]);
  expect(screen.getByRole('heading', { level: 1, name: 'Assessorament tècnic per instal·lar a la teva obra.' })).toBeInTheDocument();
});
