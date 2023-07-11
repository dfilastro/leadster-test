'use client';

import styled from 'styled-components';
import Button from '@/components/Button';

const Section = styled.section`
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: rgb(240, 248, 255);
  height: 45.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 1280px) {
    height: auto;
    padding: 2rem;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  z-index: 99;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;

    @media (max-width: 480px) {
      width: 60%;
    }
  }
`;

const Title = styled.div`
  font-size: 2.65rem;
  width: 35rem;
  font-weight: 500;

  @media (max-width: 1280px) {
    font-size: 2rem;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.45rem;
  border-bottom: 2px solid rgb(200, 212, 221);
  padding-bottom: 1.5rem;

  @media (max-width: 1280px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    width: 100%;
    text-align: center;
  }
`;

const DemoButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 1280px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    @media (max-width: 480px) {
      width: 70%;
    }
  }
`;

const PaymentContainer = styled.div`
  font-family: 'DM Sans', sans-serif;

  display: flex;
  text-align: center;
  gap: 0.5rem;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CreditCard = styled.div`
  border-right: 1px solid black;
  padding-right: 0.5rem;

  @media (max-width: 1280px) {
    border-right: none;
    padding-right: 0;
  }
`;

const Line = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Triangle = styled.div`
  background-color: rgb(230, 243, 255);
  position: absolute;
  width: 85rem;
  height: 80rem;
  rotate: 45deg;
  z-index: 0;
  top: 50%;
  right: 45%;
  border-top-left-radius: 5%;

  @media (max-width: 1280px) {
    width: 60rem;
    height: 60rem;
    right: 30%;
  }

  @media (max-width: 480px) {
    width: 40rem;
    height: 40rem;
    right: -10%;
  }
`;

export default function Body() {
  return (
    <Section>
      <Triangle />
      <Container>
        <ImgContainer>
          <img src='comparativo_img_CTA.png' alt='' />
        </ImgContainer>

        <ContentContainer>
          <Title>
            Pronto para triplicar sua <Span>Geração de Leads?</Span>
          </Title>
          <SubTitle>
            Criação e ativação em <Span>4 minutos.</Span>
          </SubTitle>

          <DemoButtonContainer>
            <Button
              selected={true}
              label={'VER DEMONSTRAÇÃO'}
              padding='0.5rem 2.4rem'
              borderRadius='3rem'
              fontSize='1.1rem'
              fontWeight='700'
            />
            <img src='selo_RD.png' alt='' />
          </DemoButtonContainer>
          <PaymentContainer>
            <Line>
              <img src='no-card-dark.webp' alt='' />
              <CreditCard>
                <Span>Não</Span> é necessário Cartão de Crédito
              </CreditCard>
            </Line>

            <Line>
              <img src='rating.webp' alt='' width={92} height={16} />
              <div>4.9/5 média de satisfação</div>
            </Line>
          </PaymentContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
}
