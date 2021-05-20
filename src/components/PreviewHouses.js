import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import LuxuryBali from "../images/luxurybali.jpg";
import LuxurySpain from "../images/luxuryspain.jpg";

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
  return (
    <Section>
      <Container>
        <Column>
          <h1>Luxury Bali</h1>
          <img src={LuxuryBali} alt="home" />
          <Button to="/homes" primary={true}>
            View Details
          </Button>
        </Column>
        <Column>
          <h1>Luxury Spain</h1>
          <img src={LuxurySpain} alt="home" />
          <Button to="/homes" primary={true}>
            View Details
          </Button>
        </Column>
      </Container>
    </Section>
  );
};

export default PreviewHouses;
