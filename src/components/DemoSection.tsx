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
`;

const Span = styled.span`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tittle = styled.div`
  font-size: 2.65rem;
  width: 35rem;
  font-weight: 500;
`;

const SubTittle = styled.div`
  font-weight: 500;
  font-size: 1.45rem;
  border-bottom: 2px solid rgb(200, 212, 221);
  padding-bottom: 1.5rem;
`;

const DemoButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const PaymentContainer = styled.div`
  font-family: 'DM Sans', sans-serif;

  display: flex;
  text-align: center;
  gap: 0.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CreditCard = styled.div`
  border-right: 1px solid black;
  padding-right: 0.5rem;
`;

export default function Body() {
  return (
    <Section>
      <Container>
        <ImgContainer>
          <img src='comparativo_img_CTA.png' alt='' />
        </ImgContainer>

        <ContentContainer>
          <Tittle>
            Pronto para triplicar sua <Span>Geração de Leads?</Span>
          </Tittle>
          <SubTittle>
            Criação e ativação em <Span>4 minutos.</Span>
          </SubTittle>

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
            <img src='no-card-dark.webp' alt='' />
            <CreditCard>
              <Span>Não</Span> é necessário Cartão de Crédito
            </CreditCard>
            <img src='rating.webp' alt='' width={92} height={16} />
            <div>4.9/5 média de satisfação</div>
          </PaymentContainer>
        </ContentContainer>
      </Container>
    </Section>
  );
}
