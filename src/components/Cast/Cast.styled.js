import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastImage = styled.img`
  width: 185px;
  height: auto;
  border-radius: 5%;
  object-fit: cover;
`;