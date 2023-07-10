import styled from 'styled-components';
import { BsCloudDownload } from 'react-icons/bs';

const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  gap: 0.5rem;
`;

const Content = styled.div<{ type: string }>`
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: ${({ type }) =>
    type === 'doc'
      ? 'rgb(161,217,255)'
      : type === 'ppt'
      ? 'rgb(255,241,160)'
      : type === 'xls'
      ? 'rgb(159,239,233)'
      : 'rgb(208,222,231)'};
  color: ${({ type }) =>
    type === 'doc'
      ? 'rgb(39,155,241)'
      : type === 'ppt'
      ? 'rgb(173, 161, 117)'
      : type === 'xls'
      ? 'rgb(0,183,143)'
      : 'rgb(131, 134, 136)'};

  div {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0 0.5rem;
    align-items: center;
    background-color: ${({ type }) =>
      type === 'doc'
        ? 'rgb(194,230,255)'
        : type === 'ppt'
        ? 'rgb(255,248,208)'
        : type === 'xls'
        ? 'rgb(194,244,234)'
        : 'rgb(232,238,243)'};
  }
`;

export default function MaterialDownload({ card }: any) {
  function handleDownload(material: any) {
    alert(`Function not implemented, you selected ${material.description}.${material.type}`);
  }

  return (
    <Container>
      {card.materials.map((material: any) => (
        <Content type={material.type} onClick={() => handleDownload(material)}>
          <BsCloudDownload
            size={20}
            style={{
              padding: '0.25rem 0.5rem',
            }}
          />
          <div>
            {material.description}.{material.type}
          </div>
        </Content>
      ))}
    </Container>
  );
}
