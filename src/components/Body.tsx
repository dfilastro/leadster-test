'use client';

import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: rgb(240, 248, 255);
  height: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem 0;
  }
`;

const FirstLine = styled.div`
  color: #1f76f0;
  font-size: 0.8rem;
  font-weight: 800;
  border: solid 2px #1f76f0;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem 1.5rem 1.5rem 0.3rem;
`;

const SecondLine = styled.div`
  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ThirdLine = styled.div`
  font-size: 5.5rem;
  font-weight: 800;
  background: linear-gradient(to right, #2c83fb, #1f76f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-top: -1rem;

  border-bottom: 1px solid rgb(200, 212, 221);
  padding: 0 2rem 1rem 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-top: 0;
  }
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  position: absolute;
  top: -5%;
  right: 2%;

  @media (max-width: 1280px) {
    position: absolute;
    margin-top: 2rem;
    top: -33%;
  }

  @media (max-width: 768px) {
    width: 1.2rem;
    position: absolute;
    margin-top: 2rem;
    top: -70%;
    right: 8%;
  }
`;

const FourthLine = styled.div`
  font-size: 1.15rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;

export default function Body() {
  return (
    <Container>
      <FirstLine>WEBINARS EXCLUSIVOS</FirstLine>
      <SecondLine>Menos Conversinha,</SecondLine>
      <Content>
        <ThirdLine>Mais Conversão</ThirdLine>
        <Image src='asset-header.png' alt='' />
      </Content>
      <FourthLine>
        Conheça as estratégias que <Span>mudaram o jogo</Span> e como aplicá-las no seu negócio
      </FourthLine>
    </Container>
  );
}
