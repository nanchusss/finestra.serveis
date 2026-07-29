import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n";

/* ================= STYLES ================= */

const Section = styled.section`
  background: ${p => p.theme.colors.cream};
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
    font-family:${p=>p.theme.fonts.display};
    font-size: clamp(32px, 4vw, 44px);
    font-weight: 400;
    margin-bottom: 20px;
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
  border-radius: 2px;
  border: 1px solid ${p => p.theme.colors.border};
  box-shadow: 0 20px 50px rgba(0,0,0,0.06);
  display: grid;
  gap: 18px;
  @media(max-width:560px){padding:26px 18px}
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 2px;
  border: 1px solid
    ${p => (p.error ? "#e74c3c" : p.theme.colors.border)};
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: ${p =>
      p.error ? "#e74c3c" : p.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  padding: 14px;
  border-radius: 2px;
  border: 1px solid
    ${p => (p.error ? "#e74c3c" : p.theme.colors.border)};
  min-height: 120px;
  resize: vertical;
  font-size: 15px;
`;

const ErrorMsg = styled.span`
  font-size: 13px;
  color: #e74c3c;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 16px;
  border-radius: 2px;
  font-weight: 800;
  border: none;
  cursor: pointer;
  background: ${p => p.theme.colors.primary};
  color: white;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Status = styled.div`
  font-weight: 600;
  padding: 10px 0;
  color: ${p => (p.ok ? "#1f7a3a" : "#c0392b")};
`;

/* ================= COMPONENT ================= */

export default function ContactForm() {
  const {t}=useLanguage();
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const SERVICE_ID  = process.env.REACT_APP_EMAIL_SERVICE;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE;
  const PUBLIC_KEY  = process.env.REACT_APP_EMAIL_PUBLIC;

  const validate = (form) => {
    const newErrors = {};

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const phone = form.user_phone.value.trim();
    const message = form.message.value.trim();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
      /^[0-9]{6,15}$/;

    // Nombre obligatorio
    if (!name) {
      newErrors.user_name = "El nombre es obligatorio.";
    }

    // Email válido
    if (!emailRegex.test(email)) {
      newErrors.user_email = "Introduce un email válido.";
    }

    // Teléfono solo números 6-15 dígitos
    if (phone && !phoneRegex.test(phone)) {
      newErrors.user_phone =
        "El teléfono debe contener solo números (6 a 15 dígitos).";
    }

    // Mensaje mínimo 10 palabras
    const wordCount = message.split(/\s+/).filter(Boolean).length;

    if (wordCount < 10) {
      newErrors.message =
        "El mensaje debe contener al menos 10 palabras.";
    }

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const form = formRef.current;
    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      setSending(true);

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        { publicKey: PUBLIC_KEY }
      );

      setStatus({
        ok: true,
        text: "Mensaje enviado correctamente. Te responderemos pronto.",
      });

      form.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        text: "Ocurrió un error. Inténtalo nuevamente.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contacto">
      <Container>
        <Left>
          <h2>{t("contactTitle")}</h2>
          <p>
            {t("contactText")}
          </p>
        </Left>

        <Card ref={formRef} onSubmit={onSubmit}>
          {status && (
            <Status ok={status.ok}>{status.text}</Status>
          )}

          <Field>
            <Input
              type="text"
              name="user_name"
              placeholder={t("name")}
              error={errors.user_name}
            />
            {errors.user_name && (
              <ErrorMsg>{errors.user_name}</ErrorMsg>
            )}
          </Field>

          <Field>
            <Input
              type="email"
              name="user_email"
              placeholder={t("email")}
              error={errors.user_email}
            />
            {errors.user_email && (
              <ErrorMsg>{errors.user_email}</ErrorMsg>
            )}
          </Field>

          <Field>
            <Input
              type="text"
              name="user_phone"
              placeholder={t("phone")}
              error={errors.user_phone}
            />
            {errors.user_phone && (
              <ErrorMsg>{errors.user_phone}</ErrorMsg>
            )}
          </Field>

          <Field>
            <Textarea
              name="message"
              placeholder={t("message")}
              error={errors.message}
            />
            {errors.message && (
              <ErrorMsg>{errors.message}</ErrorMsg>
            )}
          </Field>

          <Button type="submit" disabled={sending}>
            {sending ? "…" : t("send")}
          </Button>
        </Card>
      </Container>
    </Section>
  );
}
