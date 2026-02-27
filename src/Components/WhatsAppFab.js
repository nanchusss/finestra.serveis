import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const Fab = styled.a`
  position:fixed; bottom:20px; right:20px; z-index:100;
  width:76px; height:76px; border-radius:50%;
  background:#25D366; display:flex; align-items:center; justify-content:center;
  color:#fff; font-size:28px; box-shadow:0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 20px;
  &:hover {
    transform: scale(1.1);
    box-shadow:0 6px 16px rgba(0,0,0,0.3);
  }
`;

export default function WhatsAppFab(){
  return (
    <Fab 
      href="https://wa.me/34691292245" 
      target="_blank" 
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </Fab>
  );
}

