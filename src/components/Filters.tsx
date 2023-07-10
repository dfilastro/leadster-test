import { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';

import Dropdown from '@/components/Dropdown';

interface ButtonData {
  value: string;
  id: number;
}

interface FilterProps {
  buttons: ButtonData[];
  sortBy: string[];
  onFilterChange: (selectedButton: string) => void;
  onClearFilters: () => void;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const ButtonFilters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Filters: React.FC<FilterProps> = ({ buttons, sortBy, onFilterChange, onClearFilters }) => {
  const [selectedButton, setSelectedButton] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setSelectedButton(value);
    onFilterChange(value);
  };

  const handleClearFilters = () => {
    setSelectedButton('');
    onClearFilters();
  };

  return (
    <Container>
      <ButtonFilters>
        {buttons.map((button) => (
          <Button
            key={button.id}
            label={button.value}
            selected={selectedButton === button.value}
            onClick={() => handleButtonClick(button.value)}
          />
        ))}
        <Button label='Clear' onClick={handleClearFilters} selected={false} />
      </ButtonFilters>
      <div>
        <Dropdown props={sortBy} />
      </div>
    </Container>
  );
};

export default Filters;
