import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  selected: boolean;
  onClick?: () => void;
  label: string;
  padding?: string;
  margin?: string;
  width?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
}

const StyledButton: any = styled.button<ButtonProps>`
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: ${(props) => (props.selected ? 'rgb(0,126,255)' : 'white')};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: solid 1px ${(props) => (props.selected ? 'rgb(0,126,255)' : 'black')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  padding: ${(props) => (props.padding ? props.padding : '0.5rem 1.1rem')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '1.5rem')};

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
