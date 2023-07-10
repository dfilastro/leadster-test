'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filters from '@/components/Filters';
import Card from '@/components/Card';
import Button2 from '@/components/Button2';
import VideoModal from '@/components/VideoModal';

interface Card {
  id: number;
  type: 'Agências' | 'Chatbot' | 'Marketing Digital' | 'Geração de Leads' | 'Mídia Paga';
  title: string;
  description: string;
  url?: string;
  materials?: any;
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
  {
    id: 1,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
    url: 'https://www.youtube.com/watch?v=7C2z4GqqS5E',
    materials: [
      { type: 'doc', description: 'Document', url: '' },
      { type: 'xls', description: 'Spreadsheet', url: '' },
      { type: 'ppt', description: 'Presentation', url: '' },
    ],
  },
  {
    id: 2,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
    url: 'https://www.youtube.com/watch?v=7C2z4GqqS5E',
    materials: [
      { type: 'doc', description: 'Document2', url: '' },
      { type: 'xls', description: 'Spreadsheet2', url: '' },
      { type: 'zip', description: 'Folder2', url: '' },
    ],
  },
  {
    id: 3,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 4,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 5,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 6,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 7,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 8,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 9,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 10,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 11,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 12,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 13,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 13',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 14,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 14',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 15,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 15',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 16,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 17,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 18,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 19,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 19',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 20,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 20',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 21,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 21',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 22,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 22',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 23,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 23',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 24,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 24',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 25,
    type: 'Mídia Paga',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 25',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 26,
    type: 'Agências',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 26',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 27,
    type: 'Chatbot',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 27',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 28,
    type: 'Marketing Digital',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 28',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
  {
    id: 29,
    type: 'Geração de Leads',
    title: 'Como aumentar sua Geração de Leads feat. Traktor 29',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem officia laboriosam velit fugiat? Repudiandae, eum dicta amet sunt, nemo, velit modi ratione beatae officiis quam voluptatibus et totam officia!',
  },
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

const Cards: React.FC = () => {
  return <PaginationComponent cards={cardsData} cardsPerPage={9} />;
};

export default Cards;
