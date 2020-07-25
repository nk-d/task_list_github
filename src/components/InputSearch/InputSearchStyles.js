import styled from 'styled-components';
import {ReactComponent as Search} from './icons/search.svg';

export const Container = styled.nav`
  background-color: #f6f8fa;
  border-bottom: 1px solid #d4d4d4;
  padding: 15px;
`;

export const Form = styled.form`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  
  &:focus {
    border-color: #0366d6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(3,102,214,.3);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  flex: 0 0 auto;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  margin-left: 15px;
`;

export const SearchButton = styled(Search)`
  width: 15px;
  height: 15px;
`;
