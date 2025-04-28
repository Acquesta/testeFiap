import styled from "styled-components";
import breakImage from "@/assets/imgs/break-image.jpg"

const SectionParallax = styled.section`
  height: 60vh;
  background-image: URL(${breakImage.src}); 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function BreakImage() {
    return (
        <SectionParallax />
    );
}

export default BreakImage;