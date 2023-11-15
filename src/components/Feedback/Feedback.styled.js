import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  width: 100px;
  height: 5cqh;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #1f618d; 
  border: none;
  color: #fff; 
  border-radius: 15px; 
  transition: background-color 0.3s ease;  

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:focus-visible {
    outline: none; 
    box-shadow: 0 0 0 3px lightcoral; 
  }

  &:hover {
    background-color: #2980b9; 
  }

  &:active {
    background-color: #1f618d; 
  }
`;