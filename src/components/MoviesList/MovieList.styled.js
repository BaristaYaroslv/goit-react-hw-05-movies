import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #4CAF50;
    }
  }
`;
