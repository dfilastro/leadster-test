import styled from 'styled-components';
import MaterialDownload from '@/components/MaterialDownloadButton';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';

interface VideoModalProps {
  card: {
    id: number;
    type: 'Agências' | 'Chatbot' | 'Marketing Digital' | 'Geração de Leads' | 'Mídia Paga';
    title: string;
    description: string;
    url?: string;
    materials: {
      description: string;
      type: string;
    }[];
  };
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: white;
  width: 35%;
  height: 80%;
  border-radius: 1rem;
  overflow: auto;
  border-top: 5px solid #2c83fb;
  position: relative;

  @media (max-width: 1280px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const ModalTitle = styled.div`
  margin: 1.5rem auto 2rem auto;
  width: 60%;
  font-size: 1.5rem;
  font-weight: 600;

  span {
    color: #2c83fb;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    width: 80%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  video {
    width: 100%;
  }
`;

const ModalDescription = styled.div`
  font-size: 0.9375rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 1024px) {
    font-size: 0.875rem;
    padding: 1rem;
  }
`;

const ModalSubtitle = styled.div`
  font-weight: 600;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  border: none;
  background-color: transparent;
  font-size: 1.1rem;
  color: #7f88a6;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 0.25rem;
    right: 0.75rem;
  }
`;

export default function VideoModal({ card, onClose }: VideoModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>
          <span>Webinar: </span>
          {card.title}
        </ModalTitle>

        <ModalContent>
          <ReactPlayer url={card.url} controls={true} width={'100%'} />
        </ModalContent>
        <CloseButton onClick={onClose}>✖</CloseButton>

        <ModalDescription>
          <div>
            <ModalSubtitle>Descrição</ModalSubtitle>
            <p>{card.description}</p>
          </div>
          <div>
            <ModalSubtitle>Downloads</ModalSubtitle>
            <MaterialDownload card={card} />
          </div>
        </ModalDescription>
      </ModalContainer>
    </ModalOverlay>
  );
}
