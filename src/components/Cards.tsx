'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Filters from '@/components/Filters';
import Card from '@/components/Card';
import Button2 from '@/components/Button2';

interface Card {
  id: number;
  title: string;
}

interface CardProps {
  card: Card;
}

const Container = styled.div`
  height: 140vh;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  padding: 5rem 0;
`;

const Menu = styled.div`
  width: 100%;
  border-bottom: 2px solid rgb(200, 212, 221);
`;

const Body = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  margin: 4rem 0;
  gap: 2rem;
  padding-bottom: 4rem;
  border-bottom: 2px solid rgb(200, 212, 221);
  align-items: start;
`;

const Pagination = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface PaginationProps {
  cards: Card[];
  cardsPerPage: number;
}

const cardsData: Card[] = [
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
  { id: 3, title: 'Card 3' },
  { id: 4, title: 'Card 4' },
  { id: 5, title: 'Card 5' },
  { id: 6, title: 'Card 6' },
  { id: 7, title: 'Card 7' },
  { id: 8, title: 'Card 8' },
  { id: 9, title: 'Card 9' },
  { id: 10, title: 'Card 10' },
  { id: 11, title: 'Card 11' },
  { id: 12, title: 'Card 12' },
  { id: 13, title: 'Card 13' },
  { id: 14, title: 'Card 14' },
  { id: 15, title: 'Card 14' },
  { id: 16, title: 'Card 14' },
  { id: 17, title: 'Card 14' },
  { id: 18, title: 'Card 14' },
  { id: 19, title: 'Card 14' },
  { id: 20, title: 'Card 14' },
  { id: 21, title: 'Card 14' },
  { id: 22, title: 'Card 14' },
  { id: 23, title: 'Card 14' },
  { id: 24, title: 'Card 14' },
  { id: 25, title: 'Card 14' },
  { id: 26, title: 'Card 14' },
  { id: 27, title: 'Card 14' },
  { id: 28, title: 'Card 14' },
  { id: 29, title: 'Card 14' },
  // More card data...
];

const filters = [
  { value: 'Agências', id: 1 },
  { value: 'Chatbot', id: 2 },
  { value: 'Marketing Digital', id: 3 },
  { value: 'Geração de Leads', id: 4 },
  { value: 'Mídia Paga', id: 5 },
];

const sortBy = ['Data de Publicação', 'bb', 'cc'];

const PaginationComponent: React.FC<PaginationProps> = ({ cards, cardsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const showPage = (pageNumber: number) => {
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = pageNumber * cardsPerPage;

    return cards.slice(startIndex, endIndex);
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
        <Button2 description={i} buttonClassName={buttonClassName} onClick={() => goToPage(i)} />
      );
    }

    return paginationControls;
  };

  return (
    <Container>
      <Content>
        <Menu>
          <Filters buttons={filters} sortBy={sortBy} />
        </Menu>

        <Body className='card-container'>
          {showPage(currentPage).map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </Body>
        <Pagination className='pagination-container'>
          <div>Página</div>
          <div>{renderPaginationControls()}</div>
        </Pagination>
      </Content>
    </Container>
  );
};

const Cards: React.FC = () => {
  return <PaginationComponent cards={cardsData} cardsPerPage={9} />;
};

export default Cards;
