import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  selected: boolean;
  onClick: () => void;
  label: string;
}

const StyledButton: any = styled.button<ButtonProps>`
  padding: 0.5rem 1.1rem;
  font-size: 1rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: ${(props) => (props.selected ? 'rgb(0,126,255)' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: solid 1px ${(props) => (props.selected ? 'rgb(0,126,255)' : 'black')};
  border-radius: 1.5rem;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.selected ? 'white' : 'rgb(0,126,255)')};
    border: solid 1px ${(props) => (props.selected ? 'rgb(0,126,255)' : 'rgb(0,126,255)')};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <StyledButton {...props}>{label}</StyledButton>;
};

export default Button;
