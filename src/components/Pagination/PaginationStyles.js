import styled, { css } from 'styled-components';

export const Paginate = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  & > * {
    margin-left: 5px;
  } 
`;

const Button = css`
  min-width: 32px;
  padding: 5px 10px;
  font-style: normal;
  line-height: 20px;
  color: #24292e;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: border-color .2s cubic-bezier(.3,0,.5,1);
  background-color: transparent;
  
  &:focus {
    outline: none;
    box-shadow: none;
  }
  
  &:active, &:hover {
    border-color: #eaecef;
    transition: none;
  }
`;

const DisabledButton = css`
  color: #6a737d;
  cursor: default;
  border-color: transparent;
  pointer-events: none;
`;

const EnabledButton = css`
  color: #fff;
  background-color: #0366d6;
  border-color: transparent;
  pointer-events: none;
`;

const AfterBefore = css`
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
  content: "";
  background-color: currentColor;
`;

export const PrevPage = styled.button`
  ${Button}
  color: #0366d6;
  margin-left: 0;
  
  ${props => props.disabled ? DisabledButton : ``}
  
  &::before {
    ${AfterBefore}
    margin-right: 4px;
    clip-path: polygon(9.8px 12.8px,8.7px 12.8px,4.5px 8.5px,4.5px 7.5px,8.7px 3.2px,9.8px 4.3px,6.1px 8px,9.8px 11.7px,9.8px 12.8px);
  }
`;

export const NextPage = styled.button`
  ${Button}
  color: #0366d6;
  
  ${props => props.disabled ? DisabledButton : ``}
  
  &::after {
    ${AfterBefore}
    margin-left: 4px;
    clip-path: polygon(6.2px 3.2px,7.3px 3.2px,11.5px 7.5px,11.5px 8.5px,7.3px 12.8px,6.2px 11.7px,9.9px 8px,6.2px 4.3px,6.2px 3.2px);
  }
`;

export const Gap = styled.span`
  ${Button}
  ${DisabledButton}
`;

export const Page = styled.button`
  ${Button}
  
  ${props => props.enabled ? EnabledButton : ``}
`;
