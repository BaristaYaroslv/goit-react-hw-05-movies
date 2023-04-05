import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 4px;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  a {
    text-decoration: none;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 4px;
  }

  h3 {
    font-size: 20px;
    margin: 0 0 10px;
  }

  p {
    font-size: 14px;
    margin: 0;
  }
`;
