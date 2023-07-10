'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Select = styled.select`
  font-family: 'Plus Jakarta Sans', sans-serif;
  width: 12rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border-color: black;
  border-radius: 0.75rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='32' viewBox='0 0 24 24' width='32' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: 50%;
`;

export default function Dropdown({ props }: any) {
  return (
    <Container>
      <div>Ordenar por</div>
      <Select name='Filter' id=''>
        {props.map((item: any) => (
          <option value={item}>{item}</option>
        ))}
      </Select>
    </Container>
  );
}
