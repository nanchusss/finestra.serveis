import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Section = styled.section`
  background: linear-gradient(
    180deg,
    ${p => p.theme.colors.neutral} 0%,
    #ffffff 100%
  );
  padding: 120px 20px;
`;

const Container = styled.div`
  max-width: ${p => p.theme.maxw};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const Left = styled.div`
  h2 {
    font-size: clamp(32px, 4vw, 44px);
    font-weight: 900;
    margin-bottom: 20px;
    line-height: 1.1;
  }

  p {
    color: ${p => p.theme.colors.muted};
    font-size: 18px;
    max-width: 420px;
  }
`;

const Card = styled.form`
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid ${p => p.theme.colors.border};
  box-shadow: 0 20px 50px rgba(0,0,0,0.06);
  display: grid;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 14px;
    font-weight: 600;
    color: ${p => p.theme.colors.text};
  }
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${p => p.theme.colors.border};
  font-size: 15px;
  transition: all .2s ease;

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.primary};
    box-shadow: 0 0 0 3px ${p => p.theme.colors.primary}22;
  }
`;

const Textarea = styled.textarea`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${p => p.theme.colors.border};
  min-height: 130px;
  resize: vertical;
  font-size: 15px;
  transition: all .2s ease;

  &:focus {
    outline: none;
    border-color: ${p => p.theme.colors.primary};
    box-shadow: 0 0 0 3px ${p => p.theme.colors.primary}22;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 16px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  cursor: pointer;
  background: ${p => p.theme.colors.primary};
  color: white;
  transition: all .25s ease;

  &:hover {
    background: ${p => p.theme.colors.primaryHover};
    transform: translateY(-3px);
  }

  &:disabled {
    opacity: 0.6;
    transform: none;
    cursor: not-allowed;
  }
`;

const Status = styled.div`
  font-weight: 600;
  padding: 10px 0;
  color: ${p => (p.ok ? "#1f7a3a" : "#c0392b")};
`;

export default function ContactForm() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

const SERVICE_ID  = process.env.REACT_APP_EMAIL_SERVICE;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE;
const PUBLIC_KEY  = process.env.REACT_APP_EMAIL_PUBLIC;

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ ok: true, text: "Mensaje enviado correctamente. Te responderemos pronto." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, text: "Ocurrió un error. Inténtalo nuevamente." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contacto">
      <Container>
        <Left>
          <h2>Solicita tu presupuesto</h2>
          <p>
            Cuéntanos qué necesitas y nuestro equipo te responderá con una solución
            personalizada para tu proyecto.
          </p>
        </Left>

        <Card ref={formRef} onSubmit={onSubmit}>
          {status && <Status ok={status.ok}>{status.text}</Status>}

          <Field>
            <label>Nombre</label>
            <Input type="text" name="user_name" required />
          </Field>

          <Field>
            <label>Email</label>
            <Input type="email" name="user_email" required />
          </Field>

          <Field>
            <label>Teléfono</label>
            <Input type="text" name="user_phone" />
          </Field>

          <Field>
            <label>Mensaje</label>
            <Textarea name="message" required />
          </Field>

          <Button type="submit" disabled={sending}>
            {sending ? "Enviando..." : "Enviar solicitud"}
          </Button>
        </Card>
      </Container>
    </Section>
  );
}