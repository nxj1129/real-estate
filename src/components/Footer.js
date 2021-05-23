import React from "react";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: black;
`;

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 600px;

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
    font-size: clamp(3.5rem, 6vw, 2rem);
    color: white;
  }

  h2 {
    font-size: clamp(1rem, 6vw, 2rem);
    color: white;
  }

  p {
    color: white;
    padding-top: 1rem;
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

const Footer = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Let's find your Dream Home!</h1>
        </ColumnLeft>
        <ColumnRight>
          <ColumnLeft>
            <h2>Contact us</h2>
            <p>FAQ</p>
            <p>Support</p>
            <p>Questions</p>
          </ColumnLeft>
          <ColumnLeft>
            <h2>Offices</h2>
            <p>United States</p>
            <p>London</p>
            <p>Dubai</p>
          </ColumnLeft>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Footer;
