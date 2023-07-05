'use client';

import styled from 'styled-components';

interface ButtonProps {
  description: number;
  buttonClassName: string;
  onClick: (i: number) => void;
}

const Button = styled.button`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: white;
  padding: 0.25rem 0.75rem;
  border: none;

  &.active {
    color: #1f76f0;
    border: solid 1px #1f76f0;
    border-radius: 0.5rem;
    font-weight: 800;
  }
`;

export default function Button2({
  description,
  buttonClassName,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <Button key={description} className={buttonClassName} onClick={() => onClick(description)}>
      {description}
    </Button>
  );
}
