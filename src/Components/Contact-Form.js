import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Wrap = styled.section`
  max-width: ${(p) => p.theme.maxw};
  margin: 40px auto;
  padding: 24px 20px;
`;

const Title = styled.h2`
  font-size: clamp(24px, 3.6vw, 36px);
  font-weight: 800;
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.text};
`;

const Intro = styled.p`
  margin: 0 0 22px;
  color: ${(p) => p.theme.colors.muted};
`;

const Form = styled.form`
  background: ${(p) => p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius};
  box-shadow: ${(p) => p.theme.shadow};
  padding: 20px;
  display: grid;
  gap: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme.colors.border};
`;

const Button = styled.button`
  padding: 12px 16px;
  border-radius: 12px;
  font-weight: 800;
  background: ${(p) => p.theme.colors.primary};
  color: #fff;
  border: none;
  cursor: pointer;
  &:disabled { opacity: 0.6; }
`;

export default function ContactForm() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const SERVICE_ID  = "service_nb2g1m5";
  const TEMPLATE_ID = "template_h8b7bms";
  const PUBLIC_KEY  = "-x8j7fLiSzznIBgT9";

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      setSending(true);
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus({ ok: true, text: "¡Mensaje enviado con éxito! Te responderemos pronto." });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, text: "Ocurrió un error. Intenta de nuevo." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Wrap id="contacto">
      <Title>Contacto</Title>
      <Intro>Escríbenos y te responderemos en breve.</Intro>

      {status && <p style={{ color: status.ok ? "green" : "red" }}>{status.text}</p>}

      <Form ref={formRef} onSubmit={onSubmit}>
        <Input type="text" name="user_name" placeholder="Tu nombre" required />
        <Input type="email" name="user_email" placeholder="Tu email" required />
        <Input type="text" name="user_phone" placeholder="Teléfono (opcional)" />
        <Textarea name="message" placeholder="Tu mensaje..." required />
        <Button type="submit" disabled={sending}>
          {sending ? "Enviando..." : "Enviar"}
        </Button>
      </Form>
    </Wrap>
  );
}
