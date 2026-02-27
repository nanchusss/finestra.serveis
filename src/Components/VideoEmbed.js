import styled from "styled-components";

const Box = styled.section` max-width:900px; margin:80px auto; padding:0 20px; `;
const Frame = styled.div` aspect-ratio:16/9; border-radius:16px; overflow:hidden; `;

export default function VideoEmbed(){
  return (
    <Box id="video">
      <Frame>
        <iframe
          src="https://www.youtube.com/embed/6JsMf2vkp54"
          title="Fulfillment demo"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen style={{width:"100%", height:"100%"}}
        />
      </Frame>
    </Box>
  );
}
