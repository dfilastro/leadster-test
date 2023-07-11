'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8rem;
`;

const Logo = styled.img``;

export default function Header() {
  return (
    <Container>
      <Logo src='logo.png' alt='logo leadster' />
    </Container>
  );
}
