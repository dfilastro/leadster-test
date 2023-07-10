'use client';

import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

const Container = styled.div`
  position: relative;
  box-shadow: 0px 2rem 3rem rgba(0, 0, 0, 0.068);
  border-radius: 1rem;
  height: 18rem;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &:hover .overlay {
    opacity: 1;
  }

  &:hover {
    color: #2c83fb;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 131, 251, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const CardText = styled.div`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 800;
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: start;
`;

const Image = styled.img`
  border-radius: 1rem 1rem 0 0;
  width: 100%;
`;

const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Card({ card, onClick }: any) {
  return (
    <Container onClick={onClick}>
      <ImageWrapper>
        <Image src='thumbnail.png' alt='' />
        <Overlay className='overlay'>
          <PlayButton>
            <FaPlay size={'4rem'} />
          </PlayButton>
        </Overlay>
      </ImageWrapper>
      <CardText className='text'>{card.title}</CardText>
    </Container>
  );
}
