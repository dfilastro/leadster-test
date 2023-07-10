import styled from 'styled-components';
import MaterialDownload from '@/components/MaterialButton';

interface VideoModalProps {
  card: any;
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
`;

const ModalTitle = styled.div`
  margin: 1.5rem auto 2rem auto;
  width: 60%;
  font-size: 1.5rem;
  font-weight: 600;

  span {
    color: #2c83fb;
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
  font-size: 0.9375;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin: 0.5rem 0;
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
`;

const VideoModal: React.FC<VideoModalProps> = ({ card, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>
          <span>Webinar: </span>
          {card.title}
        </ModalTitle>

        <ModalContent>
          <video controls autoPlay>
            <source src={card.url} type='video/mp4' />
          </video>
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
};

export default VideoModal;
