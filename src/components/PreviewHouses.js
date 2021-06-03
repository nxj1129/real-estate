import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import LuxuryBali from "../images/luxurybali.jpg";
import LuxurySpain from "../images/luxuryspain.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section = styled.div`
  width: 100%;
  height: 80%;
  padding: 4rem 0rem;
  background: #d0d0d0;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  img {
    height: 300px;
    width: 500px;
    padding-bottom: 1rem;
  }
`;

const PreviewHouses = () => {
  useEffect(() => {
    gsap.from(".previewContainer", {
      duration: 1,
      x: "50",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".column",
        start: "top",
        end: "top",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <Section>
      <Container className="previewContainer">
        <Column className="column">
          <h1 className="leftSlide">Luxury Bali</h1>
          <img src={LuxuryBali} className="leftSlide" alt="home" />
          <Button className="bottomSlide" to="/homes" primary={true}>
            View Details
          </Button>
        </Column>
        <Column>
          <h1 className="rightSlide">Luxury Spain</h1>
          <img src={LuxurySpain} className="rightSlide" alt="home" />
          <Button className="bottomSlide" to="/homes" primary={true}>
            View Details
          </Button>
        </Column>
      </Container>
    </Section>
  );
};

export default PreviewHouses;
