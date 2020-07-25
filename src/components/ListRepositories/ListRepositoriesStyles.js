import styled from 'styled-components';
import { ReactComponent as Search } from './icons/search.svg';

export const Container = styled.main`
  padding: 15px;
`;

export const HeaderLevel2 = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #e1e4e8;
  padding-bottom: 16px;
`;

export const RepoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Blankslate = styled.div`
  padding: 32px;
  text-align: center;
`;

export const SearchIcon = styled(Search)`
  margin-right: 4px;
  margin-bottom: 8px;
  margin-left: 4px;
  fill: #a3aab1;
`;

export const HeaderEmpty = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

export const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
