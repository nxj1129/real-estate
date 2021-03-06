import React, { useEffect } from "react";
import styled from "styled-components";
import LuxuryUsa from "../images/luxuryusa.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-image: linear-gradient(
    black 33.33%,
    white 33.33%,
    white 66.66%,
    black 66.66%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0px;
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

const Interior = () => {
  useEffect(() => {
    gsap.from(".interiorContainer", {
      duration: 1,
      y: "-30",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".slideText",
        start: "top",
        end: "center",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <Section>
      <Container className="interiorContainer">
        <ColumnLeft>
          <h1 className="slideText">Stunning Interior</h1>
          <p className="slideText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            possimus debitis. Voluptate dolorem dolorum enim laborum suscipit
            sint necessitatibus ipsam est, ullam ipsum deleniti, pariatur alias,
            laudantium accusamus magnam nemo.
          </p>
        </ColumnLeft>
        <ColumnRight>
          <img src={LuxuryUsa} alt="usa" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Interior;
