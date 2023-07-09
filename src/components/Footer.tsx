'use client';

import styled from 'styled-components';
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';

const data = [
  {
    title: 'Links Principais',
    links: [
      {
        label: 'Home',
        url: 'https://leadster.com.br/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Ferramenta',
        url: '/ferramenta',
      },

      {
        label: 'Preços',
        url: 'https://leadster.com.br/preco/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Contato',
        url: 'https://leadster.com.br/contato/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
    ],
  },
  {
    title: 'Cases',
    links: [
      {
        label: 'Geração de Leads B2B',
        url: 'https://leadster.com.br/geracao-de-leads/b2b/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Geração de Leads em Software',
        url: 'https://leadster.com.br/geracao-de-leads/software/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Geração de Leads em Imobiliária',
        url: 'https://leadster.com.br/geracao-de-leads/imobiliaria/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Cases de Sucesso',
        url: 'https://leadster.com.br/estudo-de-caso/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
    ],
  },
  {
    title: 'Materiais',
    links: [
      {
        label: 'Blog',
        url: 'https://leadster.com.br/blog/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Parcerias com Agências',
        url: 'https://leadster.com.br/geracao-de-leads/agencias/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Guia Definitivo do Marketing',
        url: 'https://leadster.com.br/marketing-conversacional/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
      {
        label: 'Materiais Gratuitos',
        url: 'https://leadster.com.br/materiais/?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB?utm_source=branding&utm_medium=cpc&utm_campaign=bofu_pql_CA_search_branding_leadster&utm_term={leadster}&utm_content=CJ_leadster&utm_source=branding&utm_medium=cpc&utm_campaign=Branding_leadster&gad=1&gclid=Cj0KCQjwho-lBhC_ARIsAMpgModl6pSDLiyfnrgeW9trOwHqX19o43zkz-fRyD7_BiFgrpzEdP7CUi4aAoEQEALw_wcB',
      },
    ],
  },
];

const Section = styled.section`
  /* font-family: 'Plus Jakarta Sans', sans-serif; */
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9375rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Paragraph = styled.p`
  /* font-size: 15px; */
  font-size: inherit;
  color: #677294;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
`;

const Tittle = styled.div`
  color: #2c3e50;
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  font-weight: 600;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.9375rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    margin-top: 0;
    margin-bottom: 1.25rem;

    a {
      text-decoration: none;
      color: #677294;

      &:hover {
        color: #1f76f0;
      }
    }
  }
`;

const LinksContainer = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6rem;
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 2.5rem;
`;

const SocialMediaIconsReact = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    width: 100%;
    background-color: #ebeef5;
    width: 2.875rem;
    height: 2.875rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &:hover {
      background-color: #00aff0;
      cursor: pointer;
      color: #fff;
    }
  }
`;

const ContactContainer = styled.div`
  font-size: 0.9375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;

  a {
    text-decoration: none;
    color: #677294;
  }

  a:hover {
    color: #1f76f0;
  }
`;

const CopyrightContainer = styled.div`
  width: 62%;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #7f88a6;
  }
`;

export default function Footer() {
  return (
    <Section>
      <ImgContainer>
        <img
          src='https://leadster.com.br/_next/image/?url=%2Fimg%2Fleadster%2Fleadster_gif%2Fleadster_270.gif&w=384&q=75'
          alt='logo leadster'
        />
      </ImgContainer>
      <Paragraph>Transformando visitantes em clientes.</Paragraph>

      <LinksContainer>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <Tittle>{item.title}</Tittle>
              <List>
                {item.links?.map((link, i) => (
                  <li key={i}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </List>
            </div>
          </div>
        ))}
        <div>
          <Tittle>Siga a Leadster</Tittle>
          <div>
            <SocialMediaIconsReact>
              <div>
                <a href='https://www.linkedin.com/company/leadsterbr/'>
                  <BiLogoLinkedin size={22} color='#858da8' />
                </a>
              </div>
              <div>
                <a href='https://www.facebook.com/leadsterbr'>
                  <BiLogoFacebook size={22} color='#858da8' />
                </a>
              </div>
              <div>
                <a href='https://www.instagram.com/leadsterbr/'>
                  <BiLogoInstagram size={22} color='#858da8' />
                </a>
              </div>
            </SocialMediaIconsReact>
          </div>
          <ContactContainer>
            <div>
              E-mail: <a href='mailto:contato@leadster.com.br'>contato@leadster.com.br</a>
            </div>
            <div>Telefone: (42) 98828-9851</div>
          </ContactContainer>
        </div>
      </LinksContainer>
      <CopyrightContainer>
        <Paragraph>
          Copyright © 2015 - 2022 Todos os direitos reservados | <a>Leadster</a>
        </Paragraph>
        <Paragraph>
          <span>
            Rua José Loureiro, 464 - Centro - Curitiba/PR - CEP: 80010-000 | Termos de uso
          </span>
        </Paragraph>
      </CopyrightContainer>
    </Section>
  );
}
