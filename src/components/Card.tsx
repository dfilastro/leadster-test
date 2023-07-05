'use client';

import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 2rem 3rem rgba(0, 0, 0, 0.068);
  border-radius: 1rem;
  height: 18rem;
`;

const CardText = styled.div`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #333333;
  text-align: start;
`;

const Image = styled.img`
  border-radius: 1rem 1rem 0 0;
  width: 100%;
`;

export default function Card() {
  return (
    <Container>
      <Image src='thumbnail.png' alt='' />
      <CardText>Como aumentar sua Geração de Leads feat. Traktor</CardText>
    </Container>
  );
}
