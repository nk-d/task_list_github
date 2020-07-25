import styled from 'styled-components';
import { ReactComponent as Repo } from './icons/repo.svg';
import { ReactComponent as Star } from './icons/star.svg';
import { ReactComponent as Law } from './icons/law.svg';

export const Item = styled.li`
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;

  & + & {
    border-top: 1px solid #e1e4e8;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const RepoIcon = styled(Repo)`
  fill: #6a737d;
`;

export const ContentWrapper = styled.div`
  margin-top: -4px
`;

export const Link = styled.a`
 
 &:hover {
   text-decoration: underline;
 }
`;

export const Header = styled.h3`
  font-weight: 400;
  margin: 0;
  font-size: 16px;
`;

export const Bold = styled.em`
  font-style: normal;
  font-weight: 600;
`;

export const Description = styled.p`
  margin-top: 0px;
  margin-bottom: 4px;
  padding: 0;
`;

export const Footer = styled.div`
  display: flex;
  font-size: 12px;
  flex-wrap: wrap;
  color: #586069;
`;

export const Mr3 = styled.div`
  margin-right: 16px;
`;

export const StarIcon = styled(Star)`
  fill: #586069;
  display: inline-block;
  vertical-align: text-bottom;
  margin-right: 3px;
`;

export const LawIcon = styled(Law)`
  fill: #586069;
  display: inline-block;
  vertical-align: text-bottom;
  margin-right: 5px;
`;
