import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #d0d0d0;
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
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

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2 rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  jsutify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".header"),
      {
        opacity: 0,
        y: -60,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".section"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".paragraph"),
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: element.querySelector(".cl"),
          duration: 1,
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Section ref={ref}>
      <Container className="container">
        <ColumnLeft className="cl">
          <h1 className="header">{heading}</h1>
          <p className="paragraph">{paragraphOne}</p>
          <p className="paragraph">{paragraphTwo}</p>
          <Button to="/homes" primary={true}>
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
