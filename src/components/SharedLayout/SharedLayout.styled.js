import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Head = styled.div`
  box-shadow: 1px 3px 10px 5px rgba(135, 124, 124, 0.75);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 20px;

  > nav {
    display: flex;
    gap: 20px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: bold;

  &.active {
    color: #4CAF50;
  }
`;
