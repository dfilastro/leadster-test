'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filters from '@/components/Filters';
import Card from '@/components/Card';
import Button2 from '@/components/Button2';
import VideoModal from '@/components/VideoModal';
import { useWindowSize } from '../../utils/windowSize';
import { cardsData } from '../../data/cards';
import { sortBy } from '../../data/sortBy';
import { filters } from '../../data/filters';

interface Card {
  id: number;
  type: 'Agências' | 'Chatbot' | 'Marketing Digital' | 'Geração de Leads' | 'Mídia Paga';
  title: string;
  description: string;
  url?: string;
  materials?: {
    description: string;
    type: string;
  }[];
}

interface PaginationProps {
  cards: Card[];
  cardsPerPage: number;
}

const Container = styled.div`
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    padding: 1rem;
    height: auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  padding: 5rem 0;

  @media (max-width: 1280px) {
    width: 80%;
    padding: 2rem 0;
  }
`;

const Menu = styled.div`
  width: 100%;
  border-bottom: 2px solid rgb(200, 212, 221);
`;

const Body = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;
  padding-bottom: 4rem;
  border-bottom: 2px solid rgb(200, 212, 221);
  align-items: start;

  @media (max-width: 912px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Pagination = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PaginationComponent: React.FC<PaginationProps> = ({ cards, cardsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);

  useEffect(() => {
    setCurrentPage(1); // Reset current page when filtered cards change
  }, [filteredCards]);

  const handleFilterChange = (selectedButton: string) => {
    const filteredData = cards.filter((card) => card.type === selectedButton);
    setFilteredCards(filteredData);
  };

  const handleClearFilters = () => {
    setFilteredCards(cards);
  };

  const handleVideoClick = (videoUrl: any) => {
    setSelectedCard(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const showPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return filteredCards.slice(startIndex, endIndex);
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return; // Invalid page number
    }

    setCurrentPage(pageNumber);
  };

  const renderPaginationControls = () => {
    const paginationControls = [];

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      const buttonClassName = isActive ? 'active' : '';

      paginationControls.push(
        <Button2
          key={i}
          description={i}
          buttonClassName={buttonClassName}
          onClick={() => goToPage(i)}
        />
      );
    }

    return paginationControls;
  };

  return (
    <Container>
      <Content>
        <Menu>
          <Filters
            buttons={filters}
            sortBy={sortBy}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </Menu>

        <Body className='card-container'>
          {showPage(currentPage).map((card) => (
            <Card key={card.id} card={card} onClick={() => handleVideoClick(card)} />
          ))}
        </Body>
        <Pagination className='pagination-container'>
          <div>Página</div>
          <div>{renderPaginationControls()}</div>
        </Pagination>
      </Content>

      {selectedCard?.url && <VideoModal card={selectedCard} onClose={handleCloseModal} />}
    </Container>
  );
};

export default function Cards() {
  const { width: screenWidth } = useWindowSize();

  return (
    <PaginationComponent
      cards={cardsData}
      cardsPerPage={screenWidth <= 480 ? 4 : screenWidth <= 900 ? 6 : 9}
    />
  );
}
