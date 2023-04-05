import styled from 'styled-components';

/* Стили для контейнера с фильмом */
export const Wrap = styled.div`
  display: flex;
  margin: 20px;
`;
/* Стили для обертки изображения */
export const WrapImage = styled.div`
  flex: 0 0 300px;
  margin-right: 20px;
`;
/* Стили для изображения */
export const Image = styled.img`
  width: 100%;
  height: auto;
`;
/* Стили для заголовка фильма */
export const H1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;
/* Стили для оценки пользователей */
export const P = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
/* Стили для описания фильма */
export const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;