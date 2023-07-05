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
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonFilters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Filters: React.FC<FilterProps> = ({ buttons, sortBy }) => {
  const [selectedButton, setSelectedButton] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setSelectedButton(value);
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
      </ButtonFilters>
      <div>
        <Dropdown props={sortBy} />
      </div>
    </Container>
  );
};

export default Filters;
